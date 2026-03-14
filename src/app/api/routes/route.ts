import fs from "fs/promises";
import path from "path";
import { csvParseRows } from "d3-dsv";

const COUNTRY = "India";

function airportParse(row: string[]) {
  return {
    airportId: row[0],
    name: row[1],
    city: row[2],
    country: row[3],
    iata: row[4],
    icao: row[5],
    lat: row[6],
    lng: row[7],
    alt: row[8],
    timezone: row[9],
    dst: row[10],
    tz: row[11],
    type: row[12],
    source: row[13],
  };
}

function routeParse(row: string[]) {
  return {
    airline: row[0],
    airlineId: row[1],
    srcIata: row[2],
    srcAirportId: row[3],
    dstIata: row[4],
    dstAirportId: row[5],
    codeshare: row[6],
    stops: row[7],
    equipment: row[8],
  };
}

function indexBy(arr: any[], key: string) {
  const map: Record<string, any> = {};
  for (const item of arr) {
    if (item[key]) map[item[key]] = item;
  }
  return map;
}

export async function GET() {
  const airportsPath = path.join(process.cwd(), "lib", "airports.txt");
  const routesPath = path.join(process.cwd(), "lib", "routes.txt");

  const [airportsRaw, routesRaw] = await Promise.all([
    fs.readFile(airportsPath, "utf8"),
    fs.readFile(routesPath, "utf8"),
  ]);

  const airports = csvParseRows(airportsRaw, airportParse);
  const routes = csvParseRows(routesRaw, routeParse);

  const byIata = indexBy(airports, "iata");

  const filteredRoutes = routes
    .filter((d) => byIata[d.srcIata] && byIata[d.dstIata] && d.stops === "0")
    .map((d) => ({
      ...d,
      srcAirport: byIata[d.srcIata],
      dstAirport: byIata[d.dstIata],
    }))
    .filter(
      (d) =>
        d.srcAirport.country === COUNTRY && d.dstAirport.country !== COUNTRY,
    );

  return Response.json({
    airports,
    routes: filteredRoutes,
  });
}

import Navbar from "@/src/components/Navbar";
import Orb from "@/src/components/Orb";

export default function Partners() {
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "600px",
          position: "relative",
          marginTop: "50px",
        }}
      >
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
    </>
  );
}

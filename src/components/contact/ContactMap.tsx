import { MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactMap() {
  return (
    <div className="overflow-clip px-4 lg:px-0">
      <section className="text-secondary mx-auto max-w-7xl font-thin">
        {/* Header */}
        <h3 className="text-h3 text-center">
          Contact <span className="text-primary">Us.</span>
        </h3>
        <h4 className="text-h4">
          We are located <span className="text-primary">in.</span>
        </h4>
        <div className="relative mx-auto h-[300px] w-[1000px]">
          <Image
            src="/images/contact/Lab.png"
            alt=""
            fill
            objectFit="contain"
          />
          {/* <Image
            src="/images/contact/phone.png"
            alt=""
            height={20}
            width={20}
            className="absolute top-[36%] right-[36.5%] -translate-x-1/2 -translate-y-1/2 animate-bounce"
          /> */}
          <MapPin className="text-primary absolute top-[32%] right-[32.8%] w-fit max-w-fit -translate-x-1/2 -translate-y-1/2 animate-bounce" />
        </div>
      </section>
    </div>
  );
}

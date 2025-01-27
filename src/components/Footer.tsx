import Image from "next/image";

export default function Footer() {
  return (
    <>
      <main className="text-white w-full">
        <div className="hidden lg:flex w-[90%] mx-auto flex-col">
          <section className="flex justify-around">
            <div>
              <div className="flex gap-2">
                <Image src="/logo.png" alt="logo" width={30} height={30} />
                <h1 className="text-[32px] font-semibold">GAIASPACE</h1>
              </div>
              <div className="mt-8 text-[#B9B3B3]">
                The purpose of a FAQ is generally to provide <br /> information
                on frequent questions or <br />
                concerns.
              </div>
              <div className="flex gap-[0.65rem] mt-6 ">
                <Image
                  src="/Icon/TwitterIcon.png"
                  alt="logo"
                  width={35}
                  height={35}
                />
                <Image
                  src="/Icon/FacebookIcon.png"
                  alt="logo"
                  width={35}
                  height={35}
                />
                <Image
                  src="/Icon/InstaIcon.png"
                  alt="logo"
                  width={35}
                  height={35}
                />
                <Image
                  src="/Icon/GithubIcon.png"
                  alt="logo"
                  width={35}
                  height={35}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3>Company</h3>
              <a href="">Service</a>
              <a href="">Resources</a>
              <a href="">About Us</a>
            </div>
            <div className="flex flex-col">
              <h3>Help</h3>
              <a href="">Customer Support</a>
              <a href="">Terms & Conditions</a>
              <a href="">Privacy Policy</a>
            </div>
            <div className="flex flex-col">
              <h3>Subscribe to Newsletter</h3>
              <div>
                <input type="text" placeholder="Enter email address" />
                <p>Join</p>
              </div>
            </div>
          </section>
          <section>
            <hr />
            <p>© Copyright 2024, All Rights Reserved by GaiaSpace</p>
          </section>
        </div>
        <div className="lg:hidden text-white">
          <section>
            <div>
              <Image src="/logo.png" alt="logo" width={20} height={20} />
              <h3>GAIASPACE</h3>
            </div>
            <div className="flex">
              <Image src="/logo.png" alt="logo" width={20} height={20} />
              <Image src="/logo.png" alt="logo" width={20} height={20} />
              <Image src="/logo.png" alt="logo" width={20} height={20} />
              <Image src="/logo.png" alt="logo" width={20} height={20} />
            </div>
          </section>
          <section>
            <div className="flex flex-col">
              <h3>Company</h3>
              <a href="">Service</a>
              <a href="">Resources</a>
              <a href="">About Us</a>
            </div>
            <div className="flex flex-col">
              <h3>Help</h3>
              <a href="">Customer Support</a>
              <a href="">Terms & Conditions</a>
              <a href="">Privacy Policy</a>
            </div>
          </section>
          <section className="flex flex-col">
            <h3></h3>
            <div>
              <input type="text" placeholder="Enter email address" />
              <p>Join</p>
            </div>
          </section>
          <section>
            <hr />
            <p>© Copyright 2024, All Rights Reserved by GaiaSpace</p>
          </section>
        </div>
      </main>
    </>
  );
}

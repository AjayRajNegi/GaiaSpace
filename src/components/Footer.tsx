import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <main className="text-secondary mx-auto mt-10 w-full max-w-7xl">
        <div className="mx-auto hidden flex-col lg:flex">
          <section className="flex justify-between">
            <div>
              <div className="flex gap-2">
                <Image
                  src="/icon/GIcon.png"
                  alt="GIcon"
                  height={30}
                  width={50}
                />
                <h1 className="text-h3 font-[300]">GAIASPACE</h1>
              </div>
              <div className="text-secondary/70 mt-8 text-xs">
                A Space and Satellite frontier, bringing you vast <br /> abyss
                of universe with technology
              </div>
              <div className="mt-6 flex gap-[0.65rem]">
                <Image
                  src="/icon/TwitterIcon.png"
                  alt="logo"
                  width={40}
                  height={40}
                />
                <Image
                  src="/icon/FacebookIcon.png"
                  alt="logo"
                  width={40}
                  height={40}
                />
                <Image
                  src="/icon/InstaIcon.png"
                  alt="logo"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            {/* Navigation */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h6">Navigation</h3>
              <Link href="" className="text-secondary/70 text-sm">
                Service
              </Link>
              <Link href="" className="text-secondary/70 text-sm">
                Resources
              </Link>
              <Link href="" className="text-secondary/70 text-sm">
                About Us
              </Link>
            </div>
            {/* Help */}
            <div className="flex flex-col gap-3">
              <h3 className="text-h6">Help</h3>
              <Link href="" className="text-secondary/70 text-sm">
                Contact Us
              </Link>
              <Link href="" className="text-secondary/70 text-sm">
                Careers
              </Link>
              <Link href="" className="text-secondary/70 text-sm">
                Privacy Policy
              </Link>
            </div>
            {/* Newsletter */}
            <div className="flex flex-col">
              <h3>Subscribe to Newsletter</h3>
              <div className="border-secondary mt-3 flex overflow-hidden rounded-lg border-[1]">
                <input
                  type="text"
                  placeholder="Enter email address"
                  className="bg-secondary w-2/3 pl-4 text-black"
                />
                <p className="w-1/3 bg-black px-5 py-4 text-center">Join</p>
              </div>
            </div>
          </section>
          <section className="border-secondary/70 mt-6 border-t-[1] text-center">
            <p className="mt-5 mb-10">
              © Copyright 2024, All Rights Reserved by GaiaSpace
            </p>
          </section>
        </div>
        <div className="text-white lg:hidden">
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
              <Link href="">Service</Link>
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

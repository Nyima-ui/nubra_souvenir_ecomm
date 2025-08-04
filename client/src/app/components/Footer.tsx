import Image from "next/image";
import Link from "next/link";
import { auth } from "../../../auth";

const Footer = async () => {
  const session = await auth(); 
  return (
    <footer className="text-white bg-primary pt-9 px-7.5 pb-30 md:pb-40 lg:pb-60 relative">
      {/* grid container  */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-15 md:grid-cols-3 lg:grid-cols-4">
        {/* first grid child  */}
        <div className="grid_child">
          <Image
            src="/images/footer_logo.svg"
            alt="Shop Logo"
            height={42}
            width={107}
          />
        </div>
        {/* second grid child  */}
        <div className="grid_child">
          <h4 className="footer_head">Socials</h4>
          <hr className="footer_line" />
          <div className="space-y-4 md:space-y-5">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/whatsapp.svg"
                alt="Whats App"
                height={24}
                width={24}
              />
              <Link href="/" className="footer_link">
                Whats App{" "}
              </Link>
            </div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/facebook.svg"
                alt="Whats App"
                height={24}
                width={24}
              />
              <Link href="/" className="footer_link">
                Facebook{" "}
              </Link>
            </div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/insta.svg"
                alt="Whats App"
                height={24}
                width={24}
              />
              <Link href="/" className="footer_link">
                Instagram
              </Link>
            </div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/mail.svg"
                alt="Whats App"
                height={24}
                width={24}
              />
              <Link href="/" className="footer_link">
                {" "}
                Gmail
              </Link>
            </div>
          </div>
        </div>
        {/* third grid child  */}
        <div className="grid_child">
          <h4 className="footer_head">Products</h4>
          <hr className="footer_line" />
          <div className="space-y-3 flex flex-col items-start">
            <Link href="/" className="footer_link">
              Home Decor
            </Link>
            <Link href="/" className="footer_link">
              Gifts
            </Link>
            <Link href="/" className="footer_link">
              Most Bought
            </Link>
          </div>
        </div>
        {/* fourth grid child  */}
        <div className="grid_child">
          <h4 className="footer_head">Location</h4>
          <hr className="footer_line" />
          <address className="footer_link max-w-[158px]">
            Nubra Souvenir Lamdon Complex, Nubra Diskit
          </address>
          <address className="footer_link max-w-[158px]">
            Leh Ladakh - 19001
          </address>
          {session && session?.user ? <p>{session?.user?.name} visit again lo</p> : ""}
        </div>
      </div>

      {/* big footer logo  */}
      <div className="absolute bottom-1 left-0 w-full">
        <Image
          src="/images/Nubra_Souvenir.svg"
          alt="Shop Logo"
          height={49}
          width={436}
          className="w-full"
        />
      </div>
    </footer>
  );
};

export default Footer;

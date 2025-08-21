import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white bg-primary pt-9 px-7.5 pb-30 md:pb-40 lg:pb-60 relative">
      {/* grid container  */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-15 md:grid-cols-3 lg:grid-cols-4 max-w-[86vw] mx-auto">
        {/* first grid child  */}
        <div className="grid_child">
          <Link href="/">
            <Image
              src="/images/newLogo.png"
              alt="Shop Logo"
              height={62}
              width={127}
            />
          </Link>
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
              <Link
                href="https://wa.me/9419529117"
                className="footer_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whats App
              </Link>
            </div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/facebook.svg"
                alt="Whats App"
                height={24}
                width={24}
              />
              <Link
                href="https://www.facebook.com/nawang.gyatso.5"
                className="footer_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
            </div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/insta.svg"
                alt="Whats App"
                height={24}
                width={24}
              />
              <Link
                href="https://www.instagram.com/nawang.gyatso.5?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="footer_link"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <Link
                href="mailto:nawanggyatso450@gmail.com"
                className="footer_link"
                target="_blank"
                rel="noopener noreferrer"
              >
          nawanggyatso450@gmail.com
              </Link>
            </div>
          </div>
        </div>
        {/* third grid child  */}
        <div className="grid_child">
          <h4 className="footer_head">Products</h4>
          <hr className="footer_line" />
          <div className="space-y-3 flex flex-col items-start">
            <Link href="#home-decor" className="footer_link">
              Home Decor
            </Link>
            <Link href="#souvenirs" className="footer_link">
              Gifts
            </Link>
            <Link href="#souvenirs" className="footer_link">
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

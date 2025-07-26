import Image from "next/image";
import DesktopHeader from "./DesktopHeader";

const Hero = () => {
  return (
    <>
    {/* mobile hero section  */}
      <section className="pt-4 pb-7.5 flex flex-col items-center gap-5 sm:hidden border">
        <Image
          src="/images/heroM-min.png"
          alt="Image of our shop."
          width={570}
          height={377}
        ></Image>
        <h1 className="mt-2.5 font-century font-bold text-primary text-[27.65px] max-w-[327px] text-center tracking-[0.01em] leading-[1.15]">
          Want to get souvenirs for your relatives?
        </h1>
        <hr className="border border-black/40 min-w-[300px] max-w-[357px]" />
        <p className="font-grotesk-400 text-center max-w-[327px] tracking-[0.01em] text-base leading-[1.5]">
          Look no further—visit our Nubra Souvenir shop, where we offer
          priceless souvenirs and antiques like traditional carpets, pashmina
          shawls, jewelry, and much more.
        </p>
        <button className="bg-primary py-2.5 px-8 text-white font-grotesk-600 tracking-[0.01em] text-[16.5px] mt-2.5">
          Stop By
        </button>
      </section>
      {/* desktop hero section  */}
      <section className="max-sm:hidden w-screen h-[90vh] bg-[url(/images/hero-min.png)] bg-no-repeat bg-cover bg-center flex items-center justify-center text-white border">
          <DesktopHeader />
          <div className="max-w-[540px] flex flex-col items-center gap-[17.5px] relative -translate-y-5">
             <h1 className="font-century font-bold text-[47.78px] text-center leading-[1.15] tracking-[0.01em]">Want To Get Souvenirs for Your Relatives?</h1>
             <hr className="border border-white/70  w-full" />
             <p className="text-center text-[19.2px] font-grotesk-400 tracking-[0.01em] leading-[1.4]">Look no further—visit our Nubra Souvenir shop, where we offer priceless souvenirs and antiques like traditional carpets, pashmina shawls, jewelry, and much more.</p>
             <button className="py-2.5 px-8 bg-primary font-grotesk-600 tracking-[0.01em] mt-2 cursor-pointer">Stop By</button>
          </div>
      </section>
    </>
  );
};

export default Hero;

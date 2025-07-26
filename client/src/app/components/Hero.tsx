import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-4 pb-7.5 flex flex-col items-center gap-5 sm:hidden">
      <Image
        src="/images/heroM-min.png"
        alt="Image of our shop."
        width={440}
        height={377}
      ></Image>
      <h1 className="mt-2.5 font-century font-bold text-primary text-[27.65px] max-w-[327px] text-center tracking-[0.01em] leading-[1.15]">
        Want to get souvenirs for your relatives?
      </h1>
      <hr className="border border-black/40 min-w-[300px] max-w-[357px]" />
      <p className="font-grotesk-400 text-center max-w-[327px] tracking-[0.01em] text-base leading-[1.5]">
        Look no further—visit our Nubra Souvenir shop, where we offer priceless
        souvenirs and antiques like traditional carpets, pashmina shawls,
        jewelry, and much more.
      </p>
      <button className="bg-primary py-2.5 px-8 text-white font-grotesk-600 tracking-[0.01em] text-[16.5px] mt-2.5">
        Stop By
      </button>
    </section>
  );
};

export default Hero;

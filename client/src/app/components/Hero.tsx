"use client";
import Image from "next/image";
import DesktopHeader from "./DesktopHeader";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const fadeInandUp: Variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      {/* mobile hero section  */}
      <section className="pt-4 pb-7.5 flex flex-col items-center gap-5 sm:hidden">
        <motion.div variants={fadeInandUp} initial="initial" animate="animate">
          <Image
            src="/images/heroM-min.png"
            alt="Image of our shop."
            width={570}
            height={377}
          ></Image>
        </motion.div>
        <motion.h1
          className="mt-2.5 font-century font-bold text-primary text-[27.65px] max-w-[327px] text-center tracking-[0.01em] leading-[1.15]"
          variants={fadeInandUp}
          initial="initial"
          animate="animate"
        >
          Want to get souvenirs for your relatives?
        </motion.h1>
        <motion.hr
          className="border border-black/40 min-w-[300px] max-w-[357px]"
          variants={fadeInandUp}
          initial="initial"
          animate="animate"
        />
        <motion.p
          className="font-grotesk-400 text-center max-w-[327px] tracking-[0.01em] text-base leading-[1.5]"
          variants={fadeInandUp}
          initial="initial"
          animate="animate"
        >
          Look no further—visit our Nubra Souvenir shop, where we offer
          priceless souvenirs and antiques like traditional carpets, pashmina
          shawls, jewelry, and much more.
        </motion.p>
        <motion.button
          className="bg-primary py-2.5 px-8 text-white font-grotesk-600 tracking-[0.01em] text-[16.5px] mt-2.5"
          variants={fadeInandUp}
          initial="initial"
          animate="animate"
        >
          Stop By
        </motion.button>
      </section>
      {/* desktop hero section  */}
      <section className="max-sm:hidden w-screen h-[90vh] bg-[url(/images/hero-min.png)] bg-no-repeat bg-cover bg-center flex items-center justify-center text-white">
        <DesktopHeader />
        <motion.div
          className="max-w-[540px] flex flex-col items-center gap-[17.5px] relative -translate-y-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="font-century font-bold text-[47.78px] text-center leading-[1.15] tracking-[0.01em]">
            Want To Get Souvenirs for Your Relatives?
          </h1>
          <hr className="border border-white/70  w-full" />
          <p className="text-center text-[19.2px] font-grotesk-400 tracking-[0.01em] leading-[1.4]">
            Look no further—visit our Nubra Souvenir shop, where we offer
            priceless souvenirs and antiques like traditional carpets, pashmina
            shawls, jewelry, and much more.
          </p>
          <button
            className="py-2.5 px-8 bg-primary font-grotesk-600 tracking-[0.01em] mt-2 cursor-pointer 
             hover:bg-white hover:text-black transition-all duration-100 ease-in"
          >
            Stop By
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;

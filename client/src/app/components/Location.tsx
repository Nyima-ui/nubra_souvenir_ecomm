"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <section className="pb-7.5 sm:flex sm:flex-row-reverse sm:gap-5 sm:justify-between  sm:pl-10 lg:pl-20">
      <motion.div
        className="overflow-hidden relative"
        initial={{ right: "-100px", opacity: 0 }}
        whileInView={{ right: "0", opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Image
          src="/images/location-min.png"
          alt="Picture of a white Stupa"
          height={639}
          width={711}
        />
      </motion.div>
      <motion.div
        className="space-y-3.5 mt-5 sm:max-w-[440px] relative"
        initial={{ left: "-100px", opacity: 0 }}
        whileInView={{ left: "0", opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <h3
          className="text-center font-century text-[19.02px] md:text-[23.04px]
         tracking-[0.01em] sm:text-left"
        >
          Come say Julley in Diskit
        </h3>
        <p className="text-center font-grotesk-400 text-base md:text-[19.5px] tracking-[0.01em] sm:text-left">
          We are right here in Diskit—the heart of Nubra. Drop by, explore, and
          take home a little piece of Ladakh.
        </p>
        <button className="border py-2 px-6 block mx-auto sm:mx-0 mt-7.5 md:mt-11 font-grotesk-400 cursor-pointer hover:bg-primary hover:text-white hover:border-transparent transition-all duration-100 ease-in">
          Stop By
        </button>
      </motion.div>
    </section>
  );
};

export default Location;

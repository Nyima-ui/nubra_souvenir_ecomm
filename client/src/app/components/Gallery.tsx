"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section className="py-7.5 md:py-15" id="aboutUs">
      <h3
        className="text-center font-century text-[19.02px]
         tracking-[0.01em] md:text-[23.04px]"
      >
        Shop Gallery
      </h3>
      <div className="flex flex-col items-center  gap-5 mt-7.5 sm:flex-row sm:justify-between max-w-[88vw] mx-auto">
        <motion.div
          initial={{ left: "-100px", opacity: 0 }}
          whileInView={{ left: "0", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.05 }}
          className="relative"
        >
          <Image
            src="/images/gallery_pic_1-min.png"
            alt="Shop Gallery"
            height={553}
            width={414}
            className="hover:scale-105 transition-scale duration-150 ease-in"
          />
        </motion.div>
        <motion.div
          initial={{ left: "100px", opacity: 0 }}
          whileInView={{ left: "0", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.05 }}
          className="relative"
        >
          <Image
            src="/images/gallery_pic_2-min.png"
            alt="Shop Gallery"
            height={259 * 2}
            width={412 * 2}
            className="hover:scale-105 transition-scale duration-150 ease-in"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Owner = () => {
  return (
    <section className="py-7.5 md:py-15">
      <h3
        className="text-center font-century text-[19.02px]
         tracking-[0.01em] md:text-[23.04px]"
      >
        Meet Nawang Gyatso
      </h3>
      {/* outermost wrapper  */}
      <div className="flex flex-col sm:gap-2.5 items-center my-7.5 md:my-15 sm:flex-row mx-auto max-w-[86vw] sm:justify-between">
        {/* image wrapper  */}
        <motion.div
          className="h-[423px] w-[380px] sm:h-[541px] sm:min-w-[341px] lg:min-w-[541px] shadow-xs relative"
          initial={{ left: "-100px", opacity: 0 }}
          whileInView={{ left: "0", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.05 }}
        >
          <Image
            src="/images/owner.jpg"
            alt="Picture of owner"
            width={420}
            height={423}
            className="h-full w-full object-cover hover:scale-105 transition-scale duration-150 ease-in"
          />
        </motion.div>
        {/* content wrapper  */}
        <motion.div
          className="flex gap-2 items-start pt-7.5 max-sm:min-w-[330px] md:max-w-[600px] relative"
          initial={{ left: "100px", opacity: 0 }}
          whileInView={{ left: "0", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.05 }}
        >
          <Image
            src="/images/quotes.svg"
            alt="Quotation mark"
            height={28}
            width={28}
            className="border size-7.5"
          />
          <p className="font-grotesk-400 text-base md:text-[19.5px] tracking-[0.01em]">
            It’s been over a decade since I started running this shop. In the
            beginning, we had only a few cultural artifacts. But thanks to
            customers like you, we continued to grow. Today, our collection has
            expanded into two full shops, featuring a wide variety of Tibetan
            artifacts, traditional home décor, and Ladakhi antiques. We aim to
            offer our wonderful tourists the most beautiful and meaningful
            souvenirs of Ladakh.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Owner;

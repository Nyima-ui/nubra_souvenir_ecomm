'use client';

import { motion } from 'framer-motion';

const items = ['culture', 'souvenirs', 'Gifts', 'home decor', 'culture', 'souvenirs', 'Gifts', 'home decor',];

function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-primary text-white font-century font-bold text-[19.2px] max-sm:text-base py-7.5 max-sm:py-5 tracking-[0.01em] uppercase">
      <motion.div
        className="flex gap-6"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          duration: 15,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {/* Repeat items twice to ensure seamless loop */}
        {[...items, ...items].map((text, i) => (
          <h6 key={i} className="w-[250px] max-sm:w-[180px] text-center shrink-0 tracking-[0.1em] font-century">
            {text}
          </h6>
        ))}
      </motion.div>
    </div>
  );
}
 
export default Marquee;



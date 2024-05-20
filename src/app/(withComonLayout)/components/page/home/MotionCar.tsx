"use client";

import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import img from "../../../../../../public/assets/hero-car.svg";

const MotionCar = () => {
  return (
    <motion.div
      initial={{ x: "50%" }}
      animate={{ y: 40, x: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={img}
        width={750}
        height={750}
      />
    </motion.div>
  );
};

export default MotionCar;

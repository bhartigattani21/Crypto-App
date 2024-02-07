import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
       src={btcSrc} alt="cryptoRank" h={'full'} w={'full'} objectFit={'contain'} filter={'grayscale(1)'} 
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={'rgb(252,211,76)'}
        mt={"-25px"}
      >
        Crypto
      </Text>
    </Box>
  );
};

export default Home;

import {Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";



const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack h={"full"} direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} color={"rgb(252,211,76)"}>
            About Us
          </Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"wide"}
            textAlign={["center", "left"]}
            w={["full", "60%"]}
          >
             I bring you a user-friendly crypto platform using the latest tech.
            Real-time data, easy navigation and packed with features to help you
            stay informed and make informed decisions. Thank you for choosing
            cryptoRank.
          </Text>
        </VStack>
        <VStack w={["full", "40%"]}>
        <Avatar boxSize={"28"} mt={["4", "2"]} src={avatarSrc} />
          <Link
            color={"rgb(252,211,76)"}
            h={"none"}
            target={"blank"}
            href={"https://www.linkedin.com/in/bharti-gattani-539024227/"}
            textTransform={"capitalize"}
          >
            Bharti Gattani
          </Link>
          <Text h={"auto"} fontWeight={"bold"} letterSpacing={"wider"}>
            {" "}
            Founder{" "}
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

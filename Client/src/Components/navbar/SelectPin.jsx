import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BACKGROUNDCOLOR, PRIMARY } from "../../Styles/BrandColor";

const SelectPin = () => {
  return (
    <Flex>
      <Text color={PRIMARY} fontWeight={"400"}>
        Select Pincode
      </Text>
      <IoMdArrowDropdown
        style={{ marginTop: "0.3rem", marginLeft: "0.4rem" }}
        size="23px"
      />
    </Flex>
  );
};

export default SelectPin;

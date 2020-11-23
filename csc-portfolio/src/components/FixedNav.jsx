import React, { Component } from "react";
import { Flex, Heading, Menu, MenuItem, Box } from "@chakra-ui/core";

export default class FixedNav extends Component {
  render() {
    return (
      <Flex
        display={{ base: "none", md: "flex" }}
        justifyContent="space-around"
      >
        <Flex>
          <Heading>Home</Heading>
        </Flex>
        <Flex>
          <Box m={10}>Projects</Box>
          <Box m={10}>Work</Box>
          <Box m={10}>Contacts</Box>
        </Flex>
      </Flex>
    );
  }
}

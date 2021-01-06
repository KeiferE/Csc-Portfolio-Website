import React, { Component } from "react";
import { Card } from "./";
import { Flex, Heading, Menu, MenuItem, Box } from "@chakra-ui/core";

export default class CardRack extends Component {
  render() {
    return (
      <Flex flexDirection="column" alignItems="center">
        <Flex>
          <Heading position="absolute" left={0} m={10}>
            Title of content for rack
          </Heading>
        </Flex>
        <Card />
        <Card />
        <Card />
      </Flex>
    );
  }
}

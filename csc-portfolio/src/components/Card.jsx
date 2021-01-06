import React, { Component } from "react";
import { Flex, Heading, Menu, MenuItem, Box } from "@chakra-ui/core";

export default class Card extends Component {
  render() {
    return (
      <Flex>
        <h1>Subject of Card</h1>
        <h1>Line catcher of Card</h1>
        <p>description of one line about subject</p>
        <h1>Button to more</h1>
      </Flex>
    );
  }
}

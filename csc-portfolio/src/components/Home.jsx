import React, { Component } from "react";
import { Flex, Heading, Box } from "@chakra-ui/core";

export default class Home extends Component {
  render() {
    return (
      <Flex>
        <div>
          <h1>Hello, I'm Keifer Edelmayer</h1>
          <p>
            Software developer, computer vision enthusiast, and PCT thru-hiker
          </p>
        </div>
        <div>Break space</div>
        <div>
          <p>Check out some projects and my work below</p>
          <h1>linkedin icon github icon</h1>
        </div>
      </Flex>
    );
  }
}

import React, { Component } from "react";
import { Button, Flex } from "@chakra-ui/core";

export default class Contact extends Component {
  render() {
    return (
      <Flex>
        <div>
          <h1>Lets get in touch</h1>
          <p>If you want to reach me, email or a linkedin message is best</p>
        </div>
        <div>Break space</div>
        <div>
          <p>email</p>
          <h1>linkedin icon github icon</h1>
        </div>
        <Button>Test</Button>
      </Flex>
    );
  }
}

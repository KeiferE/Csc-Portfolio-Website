import React, { Component } from "react";
import { Card } from './'

export default class CardRack extends Component {
  render() {
    return (
      <div>
        <h1>Title of content for rack</h1>
        <Card/>
        <Card/>
        <Card/>
      </div>
    );
  }
}

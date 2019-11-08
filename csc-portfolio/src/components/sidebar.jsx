import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

export default class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar">
                <a className="menu-item" href="/">
                    This is a first test line
                </a>

                <a className="menu-item" href="/">
                    This is a second test line
                </a>

                <a className="menu-item" href="/">
                    This is a third test line
                </a>
            </div>
        );
    }
}
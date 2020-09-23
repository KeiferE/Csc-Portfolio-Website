import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar">
                <a class="icon" href="/">
                    Icon content unit
                </a>
                <div id="middle">
                <a className="center-content" href="/">
                    Home
                </a>
                <a className="center-content" href="/">
                    About
                </a>
                <a className="center-content" href="/">
                    Projects
                </a>
                </div>
                <a className="menu-item" href="/">
                    Contact
                </a>
            </div>
        );
    }
}
import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

export default class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar">
                <a class="icon" href="/">
                    This is a icon test line
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
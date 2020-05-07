import React, { Component } from 'react';
import "./header.scss";
export default class header extends React.Component {
    render() {
        return (
            <header >
                <ul className="nav mx-3 mt-5">
                    <li className="px-3" >Home</li>
                    <li className="px-3">Weather</li>
                </ul>
            </header>
        );
    };
}
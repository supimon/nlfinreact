/**
 * Created by supimon on 22/11/17.
 */
import React, { Component } from 'react';
import logo from '../logo.svg';
import './Root.css';

class Root extends Component {
    render() {
        return (
            <div className="Root">
                <header className="Root-header">
                    <img src={logo} className="Root-logo" alt="logo" />
                    <h1 className="Root-title">Welcome to React</h1>
                </header>
                <p className="Root-intro">
                    To get started, edit <code>src/Root.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default Root;
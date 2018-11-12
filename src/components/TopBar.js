import logo from './logo.svg'
import React from 'react'

export class TopBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-title">Around</div>
            </header>

        );
    }
}


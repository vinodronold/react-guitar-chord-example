import React, { Component } from 'react'
import Guitar from 'react-guitar-chord'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Guitar Chord</h1>
          <h2>Examples</h2>
        </header>
        <pre>{`<Guitar chord="A" />`}</pre>
        <Guitar chord="A" />
        <Guitar chord="A" quality="MIN" />
      </div>
    )
  }
}

export default App

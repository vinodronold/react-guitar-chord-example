import React, { Component, Fragment } from 'react'
import GuitarChord from 'react-guitar-chord'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Guitar Chord</h1>
          <h2>Examples</h2>
          <a href={'https://github.com/vinodronold/react-guitar-chord'}>
            View repo on Github
          </a>
        </header>
        <div className={'container'}>
          {[
            'A',
            'A#',
            'B',
            'C',
            'C#',
            'D',
            'D#',
            'E',
            'F',
            'F#',
            'G',
            'G#'
          ].map(c => (
            <Fragment key={c}>
              <div className={'chord'}>
                <pre>{`<GuitarChord chord={'${c}'} />`}</pre>
                <GuitarChord chord={c} />
              </div>
              <div className={'chord'}>
                <pre>{`<GuitarChord chord={'${c}'} quality={'MIN'} />`}</pre>
                <GuitarChord chord={c} quality={'MIN'} />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    )
  }
}

export default App

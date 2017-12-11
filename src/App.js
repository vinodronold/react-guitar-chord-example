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
                <div className={'code'}>{`<GuitarChord chord={'${c}'} />`}</div>
                <GuitarChord chord={c} />
              </div>
              <div className={'chord'}>
                <div
                  className={'code'}
                >{`<GuitarChord chord={'${c}'} quality={'MIN'} />`}</div>
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

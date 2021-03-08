// Code YouTubeDebugger Component Here

import React from 'react'

export default class YouTubeDebugger extends React.Component{

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  } 

  changeBits = () => {
    console.log(this.state)
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, () => console.log(this.state))
  }

  changeResolution = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        video:{
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return(
      <div>
        <button className='bitrate' onClick={this.changeBits}>Bitrate: {this.state.settings.bitrate}</button>

        <button className='resolution' onClick={this.changeResolution}>Resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }

}
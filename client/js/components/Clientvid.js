// client/js/components/App.js

import 'stylesheets/base.sass'
import React, {PropTypes, Component} from 'react'
import OpentokVideo from './opentok/opentokVideo'
import OpentokSettings from './opentok/opentokSettings'

class ChatSubscriber extends Component{
  render() {
     
    return(
      <div>
        <h1> Videochat View for Client</h1>
        <OpentokVideo type='subscribe' apiKey={OpentokSettings.API_KEY} sessionId={OpentokSettings.SESSION_ID} token={OpentokSettings.TOKEN_SUB} />
      </div>
    )
  }
}

export default ChatSubscriber


import React, { Component } from 'react';
import '../../../App.css'
import Lowersection from './lowersection';
class Chat extends Component {
    render() {
        const {messages} =this.props;
        return (
            <div className='chat-box'>
                <div className="messages">
                {messages.map((msg, index) => (
                  <div key={index} className="message">
                    <div className="message-content">
                      <span className="message-text">{msg.text}</span>
                      <span className="message-timestamp">{msg.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Lowersection/>
            </div>
        );
    }
}

export default Chat;

import React, { Component } from 'react';
import '../../../App.css'
import Lowersection from './lowersection';
import Iterable from '../helper/iterable';
class Chat extends Component {
    render() {
        const {messages} =this.props;
        console.log("sbcg",messages.messages.msg);
        return (
          <div>
          {messages.messages.msg?(
            <Iterable data={messages.messages.msg}/>) : (<div>No data to display</div>)
     } 
        <Lowersection messages={messages}/>
     </div>);
    }
}

export default Chat;

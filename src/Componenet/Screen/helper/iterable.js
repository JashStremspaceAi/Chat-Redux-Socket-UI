import React, { Component } from 'react';
import '../../../App.css'
class Iterable extends Component {
    render() {
        const {data}=this.props
        return (
            <div>
               <div className='chat-box'>
                <div className="messages">
             
                 {data ? (
    data.map((msg, index) => (
      <div key={index} className="message">
      <div className="message-content">
        <span className="message-text">{msg}</span>
      </div>
    </div>
    ))
) : (
    <div></div>
)}
              </div>
           
            </div> 
            </div>
        );
    }
}

export default Iterable;

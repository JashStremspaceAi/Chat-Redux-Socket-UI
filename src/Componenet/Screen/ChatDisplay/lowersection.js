import React, { Component } from 'react';
import InputField from '../atoms/input';
import Button from '../atoms/buttons';
import { connect } from 'react-redux';
import { addMessage,emitUser } from '../../Redux/actions';
import '../../../App.css'
class lowerSection extends Component{
 constructor(props){
    super(props);
    this.state = {
      message:'',
     
    };
    this.messageshistory=[];   
 }

sendMessage = () => {
    const { message } = this.state;
    if (message.trim()) {
      this.props.emitUser("message",message)
      this.setState({ message: '' });
    }
  };
  ViewData = () => {
    console.log("dfhkj");
    const {messages} =this.props;
    console.log(messages);
    // console.log("message history",this.messageshistory);  
    this.setState(this.messageshistory=messages)
    console.log(this.messageshistory);
    let his=this.messageshistory.messages.history;
    console.log(his);
  //  return 
  
  };
  render(){
    const { message } = this.state;
    console.log("medfa",message)
    return(
        
        <div className="input-box">
                <InputField
                  type="text"
                  value={message}
                  onChange={(e) => this.setState({ message: e.target.value })}
                  placeholder="Type your message..."
                />
                <Button onClick={this.sendMessage}>Send</Button>
                <Button onClick={this.ViewData}>View Old Chat</Button>
              </div>
              
    );
  }
}

const mapStateToProps = (state) => ({
    message:state.message
  });
  
  const mapDispatchToProps = {
    addMessage,
    emitUser
  };
export default connect(mapStateToProps, mapDispatchToProps)(lowerSection);
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
    console.log("message history",this.messageshistory);   
  };
  render(){
    const { message } = this.state;
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
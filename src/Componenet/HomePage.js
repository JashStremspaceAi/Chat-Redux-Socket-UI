import React, { Component } from "react";
import { connect } from "react-redux";
import { addMessage, addUser, socketOn } from "./Redux/actions/index";
import "../App.css";
import Chat from "./Screen/ChatDisplay/chat";
import DisplayName from "./Screen/SidePanel/displayName";

class HomePage extends Component {
  
  componentDidMount() {
    // console.log(this.props);
    const { dispatch } = this.props;
 console.log(dispatch);
    dispatch(
      socketOn("message", (data) => {
        console.log("Received message:", data);
        dispatch(addMessage(data));
        
      })
    );
    dispatch(
      socketOn("user",(userdata)=>{
        console.log("Received user:", userdata);
        dispatch(addUser(userdata));
      })
    );
  }
  componentWillUnmount() {
    const { socket } = this.props;
    socket.off("message");
  }

  render() {
    const { messages } = this.props;

    return (
      <div className="chat-container">
        <DisplayName users={messages.users}/>
        <Chat messages={messages} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  users:state.users
});
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  addMessage,
  addUser,
  socketOn,
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

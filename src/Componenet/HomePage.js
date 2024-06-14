import React, { Component } from "react";
import { connect } from "react-redux";
import { addMessage, addUser, socketOn } from "./Redux/actions/index";
import "../App.css";
import Sidepanel from "./Screen/SidePanel/sidepanel";
import Chat from "./Screen/ChatDisplay/chat";

class HomePage extends Component {
  
  componentDidMount() {
    // console.log(this.props);
    const { dispatch } = this.props;

    dispatch(
      socketOn("message", (data) => {
        console.log("Received message:", data);
        dispatch(addMessage(data));
        
      })
    );
    dispatch(
      socketOn("user",(data)=>{
        console.log("Received user:", data);
        dispatch(addUser(data));
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
        <Sidepanel />
        <Chat messages={messages} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  addMessage,
  addUser,
  socketOn,
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

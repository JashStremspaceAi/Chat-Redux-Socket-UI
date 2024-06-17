import React, { Component } from "react";
import InputField from "../atoms/input";
import Button from "../atoms/buttons";
import { connect } from "react-redux";
import {  addUser,emitUser } from "../../Redux/actions";
import "../../../App.css";
class Sidepanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }
  // componentDidMount(){
  //   const {dispatch}=this.props
  //   dispatch(
  //   socketOn("user",(user)=>{
  //     console.log(user);
  //     dispatch(addUser(user))
  //   })
  // )
  // }
  addUserDetail = () => {
    const { user } = this.state;
    console.log(user);
    if (user.trim()) {
      this.props.emitUser("user",user);
      // console.log("su",this.props.emitUser("user",user));
      this.setState({ user: '' });
    }
  };
  render() {
    const { user } = this.state;
    // console.log(user);
    return (
      <div>
        <div className="online-users">
         
          <ul>
          
            <li>
              <InputField
              className="sidepanel-input-style"
                type="text"
                value={user}
                onChange={(e) => this.setState({ user: e.target.value })}
                placeholder="Type your Name..."
              />
              <Button onClick={this.addUserDetail}>Add </Button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  addUser,
  emitUser
  // dispatch:dispatch
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidepanel);

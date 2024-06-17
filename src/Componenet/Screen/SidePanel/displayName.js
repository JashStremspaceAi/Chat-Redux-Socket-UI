import React, { Component } from 'react';
import '../../../App.css'
import Sidepanel from './sidepanel';
import Iterable from '../helper/iterable';
class DisplayName extends Component {
    render() {
        const {users}=this.props;
        console.log("QWERY",users);
        return (
            <div>
               <div className="online-users">
          <h3>Online Users</h3>
          <ul>
           
          {users.user ? (
    // users.user.map((key, index) => (
    //     <li key={index}>{key}</li>
    <Iterable data={users.user}/>
    // )
// )
) : (
    <li>No users found</li>
)}
       
          </ul>
        </div> 
        <Sidepanel/>
            </div>
        );
    }
}

export default DisplayName;

//TUTORIAL IS BASED ON: https://appdividend.com/2017/07/22/react-firebase-tutorial/#Step_4_Create_MessageList_component

import React, { Component } from 'react';

import MessageList from './components/MessageList'; //allows you to use the object <MessageList />
//import ChannelList from './components/ChannelList';
import MessageBox from './components/MessageBox'; 
import Header from './components/Header';

import firebase from 'firebase';

class App extends Component {

  constructor(props){ //how does this work?
    super(props);
    
    let config = {
    apiKey: "AIzaSyAoaknv4WAWovLi-VhVa_ctSWXKs3ME6Xo",
    authDomain: "chat-5b8d8.firebaseapp.com",
    databaseURL: "https://chat-5b8d8.firebaseio.com",
    projectId: "chat-5b8d8",
    storageBucket: "chat-5b8d8.appspot.com",
    messagingSenderId: "812035456664"
  };

    firebase.initializeApp(config);
  }

  render() {
    return (
      
      <div className="container">
            <Header title="Simple Firebase App" />
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageList db={firebase} />
              </div>
            </div>
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageBox db={firebase} />
              </div>
            </div>
        </div>
    );
  }
}

export default App;

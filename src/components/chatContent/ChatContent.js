import React, {useState, createRef, useEffect , useRef} from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import {chatItms} from '../../data'


const genearteRand= () =>{
  return chatItms.length + 1
}

const ChatContent = () => {
  let messagesEndRef = useRef(null);
  let [chat, setChat] = useState(chatItms)
  let [msg, setMsg] = useState('')
  
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onStateChange = (e) => {
    setMsg(e.target.value);
  };

  const updateUi= () =>{
      if (msg != "") {
        chatItms.push({
          key: genearteRand(),
          type: "",
          msg: msg,
          image:
            "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        });
        setChat([...chatItms]);
        setMsg("")
        scrollToBottom();
    }
  }

  useEffect(()=>{
    scrollToBottom()
  }, [chat])


  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar
              isOnline="active"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
            />
            <p>Tim Hover</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          {chat.map((itm, index) => {
            return (
              <ChatItem
                animationDelay={index + 2}
                key={itm.key}
                user={itm.type ? itm.type : "me"}
                msg={itm.msg}
                image={itm.image}
              />
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="addFiles">
            <i className="fa fa-plus"></i>
          </button>
          <input
            type="text"
            placeholder="Type a message here"
            onChange={onStateChange}
            onKeyPress={(e)=>{e.key ==="Enter" && updateUi()}}
            value={msg}
          />
          <button className="btnSendMsg" id="sendMsgBtn">
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;


// export default class ChatContent extends Component {
//   messagesEndRef = createRef(null);
  

//   constructor(props) {
//     super(props);
//     this.state = {
//       chat: this.chatItms,
//       msg: "",
//     };
//   }

//   scrollToBottom = () => {
//     this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   componentDidMount() {
//     window.addEventListener("keydown", (e) => {
//       if (e.keyCode == 13) {
//         if (this.state.msg != "") {
//           this.chatItms.push({
//             key: 1,
//             type: "",
//             msg: this.state.msg,
//             image:
//               "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
//           });
//           this.setState({ chat: [...this.chatItms] });
//           this.scrollToBottom();
//           this.setState({ msg: "" });
//         }
//       }
//     });
//     this.scrollToBottom();
//   }
//   onStateChange = (e) => {
//     this.setState({ msg: e.target.value });
//   };

//   render() {
//     return (
//       <div className="main__chatcontent">
//         <div className="content__header">
//           <div className="blocks">
//             <div className="current-chatting-user">
//               <Avatar
//                 isOnline="active"
//                 image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
//               />
//               <p>Tim Hover</p>
//             </div>
//           </div>

//           <div className="blocks">
//             <div className="settings">
//               <button className="btn-nobg">
//                 <i className="fa fa-cog"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="content__body">
//           <div className="chat__items">
//             {this.state.chat.map((itm, index) => {
//               return (
//                 <ChatItem
//                   animationDelay={index + 2}
//                   key={itm.key}
//                   user={itm.type ? itm.type : "me"}
//                   msg={itm.msg}
//                   image={itm.image}
//                 />
//               );
//             })}
//             <div ref={this.messagesEndRef} />
//           </div>
//         </div>
//         <div className="content__footer">
//           <div className="sendNewMessage">
//             <button className="addFiles">
//               <i className="fa fa-plus"></i>
//             </button>
//             <input
//               type="text"
//               placeholder="Type a message here"
//               onChange={this.onStateChange}
//               value={this.state.msg}
//             />
//             <button className="btnSendMsg" id="sendMsgBtn">
//               <i className="fa fa-paper-plane"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

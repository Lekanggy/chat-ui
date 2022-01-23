import React, { useState} from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import {allChatUsers} from '../../data'


const ChatList = () => {
  const [allChats, setAllChats] = useState(allChatUsers)
  return (
    <div className="main__chatlist">
      <button className="btn">
        <i className="fa fa-plus"></i>
        <span>New conversation</span>
      </button>
      <div className="chatlist__heading">
        <h2>Chats</h2>
        <button className="btn-nobg">
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>
      <div className="chatList__search">
        <div className="search_wrap">
          <input type="text" placeholder="Search Here" required />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="chatlist__items">
        {allChats.map((item, index) => {
          return (
            <ChatListItems
              name={item.name}
              key={item.id}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;



// export default class ChatList extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       allChats: this.allChatUsers,
//     };
//   }
//   render() {
//     return (
//       <div className="main__chatlist">
//         <button className="btn">
//           <i className="fa fa-plus"></i>
//           <span>New conversation</span>
//         </button>
//         <div className="chatlist__heading">
//           <h2>Chats</h2>
//           <button className="btn-nobg">
//             <i className="fa fa-ellipsis-h"></i>
//           </button>
//         </div>
//         <div className="chatList__search">
//           <div className="search_wrap">
//             <input type="text" placeholder="Search Here" required />
//             <button className="search-btn">
//               <i className="fa fa-search"></i>
//             </button>
//           </div>
//         </div>
//         <div className="chatlist__items">
//           {this.state.allChats.map((item, index) => {
//             return (
//               <ChatListItems
//                 name={item.name}
//                 key={item.id}
//                 animationDelay={index + 1}
//                 active={item.active ? "active" : ""}
//                 isOnline={item.isOnline ? "active" : ""}
//                 image={item.image}
//               />
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
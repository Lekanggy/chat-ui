import React from "react";
import Avatar from "./Avatar";


const ChatListItems = ({active, image, isOnline, name, animationDelay}) => {
  
  const selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };

  return (
    <div
      style={{ animationDelay: `0.${animationDelay}s` }}
      onClick={selectChat}
      className={`chatlist__item ${
        active ? active : ""
      } `}
    >
      <Avatar
        image={
          image ? image : "http://placehold.it/80x80"
        }
        isOnline={isOnline}
      />

      <div className="userMeta">
        <p>{name}</p>
        <span className="activeTime">32 mins ago</span>
      </div>
    </div>
  );
};

export default ChatListItems;


// export default class ChatListItems extends Component {
//   constructor(props) {
//     super(props);
//   }
//   selectChat = (e) => {
//     for (
//       let index = 0;
//       index < e.currentTarget.parentNode.children.length;
//       index++
//     ) {
//       e.currentTarget.parentNode.children[index].classList.remove("active");
//     }
//     e.currentTarget.classList.add("active");
//   };

//   render() {
//     return (
//       <div
//         style={{ animationDelay: `0.${animationDelay}s` }}
//         onClick={this.selectChat}
//         className={`chatlist__item ${
//           active ? active : ""
//         } `}
//       >
//         <Avatar
//           image={
//             image ? image : "http://placehold.it/80x80"
//           }
//           isOnline={isOnline}
//         />

//         <div className="userMeta">
//           <p>{this.props.name}</p>
//           <span className="activeTime">32 mins ago</span>
//         </div>
//       </div>
//     );
//   }
// }


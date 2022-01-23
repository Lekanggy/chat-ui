import React, { Component } from "react";

const Avatar = ({image, isOnline}) => {
  return (
    <div className="avatar">
      <div className="avatar-img">
        <img src={image} alt="#" />
      </div>
      <span className={`isOnline ${isOnline}`}></span>
    </div>
  );
};

export default Avatar;


// export default class Avatar extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="avatar">
//         <div className="avatar-img">
//           <img src={this.props.image} alt="#" />
//         </div>
//         <span className={`isOnline ${this.props.isOnline}`}></span>
//       </div>
//     );
//   }
// }

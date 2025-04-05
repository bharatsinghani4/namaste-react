import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="about-us">
        <h1>This is namaste react web series about us page.</h1>
        <UserClass />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div id="about-us">
//       <h1>This is namaste react web series about us page.</h1>
//       {/* <User
//         name="Bharat"
//         location="Gurgaon"
//         contact="@bharatsinghani"
//       /> */}
//       <UserClass
//         name="Bharat"
//         location="Gurgaon"
//         contact="@bharatsinghani"
//       />
//     </div>
//   );
// };

export default About;

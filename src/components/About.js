import User from "./User";

const About = () => {
  return (
    <div id="about-us">
      <User />
    </div>
  );
};

// class About extends React.Component {
//   render() {
//     return (
//       <div id="about-us">
//         <h1>This is namaste react web series about us page.</h1>
//         <UserContext.Consumer>
//           {(loggedInUser) => console.log(loggedInUser)}
//         </UserContext.Consumer>
//         <User />
//       </div>
//     );
//   }
// }

export default About;

import React from "react";

import Shimmer from "./Shimmer";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: null,
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://api.github.com/users/bharatsinghani4"
    );
    const data = await response.json();

    this.setState({
      userInfo: data,
    });
  }

  componentDidUpdate() {
    this.timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    if (this.state.userInfo === null) return <Shimmer />;

    const { avatar_url, name, location, login } = this.state.userInfo;

    return (
      <div className="user-card">
        <img
          src={avatar_url}
          alt={name}
        />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;

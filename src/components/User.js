import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";

const User = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.github.com/users/bharatsinghani4"
    );
    const data = await response.json();

    setUserInfo(data);
  };

  if (userInfo === null) return <Shimmer />;

  const { avatar_url, name, location, login } = userInfo;

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
};

export default User;

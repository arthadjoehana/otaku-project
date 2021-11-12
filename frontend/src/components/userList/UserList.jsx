import "./userList.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Rightbar from "../rightbar/Rightbar";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import User from "../user/User";

export default function UserList({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [users, setUsers] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    axios.get("/users/userlist", { withCredentials: true })
        .then((res) => {
            setUsers(res.data.data);
            console.log("users", res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
  }, []);



  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };

  return (
    <div className="userList">
      <h4 className="userListTitle">List of users</h4>
      <ul className="userList-list">
        {users.map((user) => (
          <User key={user.userid} username={user.username} />
        ))}
      </ul>
    </div>
  );
}

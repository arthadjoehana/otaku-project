import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import UserList from "../../components/userList/UserList"

import "./userlistpage.css"

export default function UserListPage() {
  return (
    <>
      <Topbar />
      <div className="userlistpagecontainer">
        <Sidebar />
        <UserList />
        <Rightbar/>
      </div>
    </>
  );
}

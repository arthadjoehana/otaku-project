import "./sidebar.css";
import {
  Home,
  Group,
  Shop,
  Event,
} from "@material-ui/icons";
import { Link } from 'react-router-dom'


export default function Sidebar() {
  const handleDisconnect = (e) =>{
    window.localStorage.clear(); //clear all localstorage
    window.location.reload();
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link className="sidebarListItem">
          <Home className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
          </Link>
          <Link className="sidebarListItem">
          <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Profile</span>
          </Link>
          <Link className="sidebarListItem">
          <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Friends & follows</span>
          </Link>
          <Link className="sidebarListItem">
          <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Mangas</span>
          </Link>
          <Link className="sidebarListItem">
          <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Games</span>
          </Link>
          <Link className="sidebarListItem">
          <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Animes</span>
          </Link>
          <Link className="sidebarListItem">
            <Shop className="sidebarIcon" />
            <span className="sidebarListItemText">Store</span>
          </Link>
          <Link className="sidebarListItem">
          <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Community</span>
          </Link>
          <Link className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </Link>
          <Link className="sidebarListItem">
          <Group className="sidebarIcon" />
            <span className="sidebarListItemText">About us</span>
          </Link>
          <button onClick={handleDisconnect}>Log out</button>
        </ul>
      </div>
    </div>
  );
}

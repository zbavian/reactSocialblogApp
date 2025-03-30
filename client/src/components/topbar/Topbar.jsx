import   "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}} >
          <span className="logo">Lamasocial</span>
        </Link>
      </div>
      <div className="topbarCentre">
        <div className="searchBar">
          <Search className="searchIcon"/>
          <input placeholder="search for friend, post or video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="toparLink"> Homepage </span>
          <span className="toparLink"> Timeline </span>
        </div>
        <div className="topbarIcons">
          <div className="toparIconItem">
            <Person />
            <div className="toparIconBadge">1</div>
          </div>
          <div className="toparIconItem">
            <Chat />
            <div className="toparIconBadge">2</div>
          </div>
          <div className="toparIconItem">
            <Notifications />
            <div className="toparIconBadge">3</div>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>      
    </div>
  )
}

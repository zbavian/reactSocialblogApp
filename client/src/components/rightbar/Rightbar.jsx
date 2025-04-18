import "./rightbar.css";
import {Users} from "../../dummyData"
import Online from "../online/Online"
// import { useEffect } from "react";

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log("user.city0000000000000000000000=");
  // console.log(user.city)
  const HomeRightbar = ()=>{
    return(
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
        {Users.map((u)=>(
          <Online key={u.id} user={u} />
        ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () =>{
    return (
      <>
      {/* <span>"user.id="  {user._id}  </span>
      <span>"user.name="  {user.username}  </span>
      <span>"user.city="  {user.city}  </span> */}


      <h4 className="rightbarTitle">User Information </h4>
      <div className="rightbarInfo">
        <div className="rightarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">{user.city}</span>
        </div>
        <div className="rightarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">{user.from}</span>
        </div>
        <div className="rightarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">{user.relationship===1 ? "single":
                                               user.relationship===2 ? "Married": "-"}</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
      
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />} 
      </div>
    </div>
  );
}
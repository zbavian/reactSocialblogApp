import './profile.css'
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
import { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from 'react-router';


export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser] = useState({});
  const username=useParams().username;
  // const [user, setUser] = useState(null);

  //  const [username, setUsername]=useState("zzzzzz")
  //console.log(params);

  useEffect(() => {
    const fetchUser = async () => {
      // try {
        // setUsername("zahra")
        const res = await axios.get(`/users?username=${username}`);
        setUser(res.data);
        
      // } catch (error) {
      //   console.error("Error fetching user:00000000000000000", error);
      // }
    };
 
    fetchUser();
  },[username]);
  // const likeHandler=() =>{
  //   console.log("res.data in profile=00000000000000000");
  //       console.log(user);
  // }
  return (
    <div>
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">

                    <div className="profileRightTop">

                        <div className="profileCover">
                            <img className='profileCoverImg' src={user.coverpicture || 
                              PF + "person/noCover.jpeg" } alt="" />
                            <img className='profileUserImg' src={user.profilepicture || 
                              PF + "person/noAvator.jpg" } alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>{user.username}</h4>
                            <h4 className='profileInfoDesc'>{user.desc}</h4>
                        </div>

                    </div>
                    {/* <button onClick={likeHandler}>temprory</button> */}
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        {/* <Rightbar  key={user._id} user={user}/> */}
                       
                        <Rightbar user={user}/>
                        {/* <span>{user.city}</span> */}

                        {/* {Object.keys(user).length > 0 ? <Rightbar user={user} /> : <p>Loading user data...</p>} */}

                    </div>
                    
                </div>
            </div>
        </>      
    </div>
  )
}

import Share from "../share/Share";
import Post from "../post/Post"
import "./feed.css";
import { useEffect, useState } from "react";
import axios from "axios"

export default function Feed({username}) {
  const [posts, setPosts]=useState([]);
  useEffect(()=>{
    const fetchPosts=async()=>{
      console.log(username)
      const res = username
      ? await axios.get("/posts/profile/" + username)
      : await axios.get("/posts/timeline/67b97c13103d34e2d6a1863e")
      setPosts(res.data)
    };
    fetchPosts();
    
  },[]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p)=>(
          <Post key={p._id} post={p}/>
        ))}
      </div>
    </div>
  )
}

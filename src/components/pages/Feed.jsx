import React, {useState, useEffect} from 'react';
import "./Feed.css";
import Share from '../Share';
import Post from '../Post';
import {FaArrowCircleUp} from 'react-icons/fa'
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext} from "react";

export default function Feed({username}) {

  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = username
  //       ? await axios.get("/posts/profile/" + username)
  //       : await axios.get("posts/timeline/" + "60c7db011ee51c49c8b7bbd7");
  //     setPosts(
  //       res.data.sort((p1, p2) => {
  //         return new Date(p2.createdAt) - new Date(p1.createdAt);
  //       })
  //     );
  //   };
  //   fetchPosts();
  // }, [username, "60c7db011ee51c49c8b7bbd7"]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/timeline/all");
      setPosts(res.data)
    };
    fetchPosts();
  }, []);


    const ScrollArrow = () =>{

        const [showScroll, setShowScroll] = useState(false)
      
        const checkScrollTop = () => {
          if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
          } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
          }
        };
      
        const scrollTop = () =>{
          window.scrollTo({top: 0, behavior: 'smooth'});
        };
      
        window.addEventListener('scroll', checkScrollTop)
      
        return (
              <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
        );
      }
    
    return(
      <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
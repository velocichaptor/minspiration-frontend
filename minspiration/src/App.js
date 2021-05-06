import React, { useState, useEffect } from "react";
// import { Button, Container, Image, Modal } from 'semantic-ui-react'
import './App.css';
import MenuBar from './MenuBar'
import Feed from './Body/Feed'
import NewPostForm from './Body/NewPostForm'



function App() {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    fetch(`http://localhost:3000/posts`)
      .then((r) => r.json())
      .then(posts => {
        buildFeed(posts)
      })
  }, [posts]);

  function buildFeed(posts) {
    setPosts(posts)
  }
  
  const handleAddPost = (post) => {
    setPosts(posts => [...posts, post])
  }

  // const handleDeletePost = (posts) => {
  //   debugger
  //   setPosts(posts)
  // }
  

  return (
    <div className="App">
      <MenuBar />
      <Feed
      postData={posts}
      // handleDeletePost={handleDeletePost}
      buildFeed={buildFeed}
      />
      <NewPostForm handleAddPost={handleAddPost}/>
    </div>
  );
}

export default App;
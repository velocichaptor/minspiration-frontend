import React, { useState, useEffect } from "react";
// import { Button, Container, Image, Modal } from 'semantic-ui-react'
import './App.css';
import MenuBar from './MenuBar'
import Feed from './Body/Feed'
import NewPostForm from './Body/NewPostForm'



function App() {

  const [posts, setPosts] = useState([])
  // const [open, setOpen] = useState(true)
  // const [rerender, setRerender] = useState([])


  useEffect(() => {
    fetch(`http://localhost:3000/posts`)
      .then((r) => r.json())
      .then(posts => {
        buildFeed(posts)
      })
  }, []);

  function buildFeed(posts) {
    console.log('goodbye', posts)
    setPosts(posts)
  }
  
  // const openForm = (e) => {
  //   setOpen(!open)
  // }

  const handleAddPost = (post) => {
    setPosts(posts => [...posts, post])
  }

  const handleDeletePost = (posts) => {
    debugger
    setPosts(posts)
  }
  

  return (
    <div className="App">
      <MenuBar buildFeed={buildFeed}/>
      <Feed
      postData={posts}
      handleDeletePost={handleDeletePost}
      />
      <NewPostForm handleAddPost={handleAddPost}/>
   {/* {open ? 'hello' : 'goodbye'} */}
    </div>
  );
}

export default App;
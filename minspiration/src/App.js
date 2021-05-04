import React, { useState, useEffect } from "react";
import './App.css';
import MenuBar from './MenuBar'
import Feed from './Body/Feed'



function App() {

  const [posts, setPosts] = useState([])
  const [rerender, setRerender] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/posts`)
      .then((r) => r.json())
      .then(posts => {
        buildFeed(posts)
        // debugger
      }
      )
     
      // .then(posts => buildFeed(posts));
      // debugger
  }, []);

// debugger
  function buildFeed(posts) {
    console.log('goodbye')
    setPosts(posts)
    // debugger
  }

  return (
    <div className="App">
      <MenuBar/>
      <Feed
      postData={posts}
      />
    </div>
  );
}

export default App;

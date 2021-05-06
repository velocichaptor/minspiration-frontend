import React from 'react'
import { Grid } from 'semantic-ui-react'
import PostCard from './PostCard'

function Feed({postData, handleDeletePost}) {
  


  const postArr = postData.map(post => <PostCard key={post.id} {...post} handleDeletePost={handleDeletePost}/>)
  

  return (
  <Grid relaxed columns={4}>
    {postArr}
  </Grid>
  )
 }


//make form for capturing and persisting new data
//    - create form component that renders on click of button
//    - have the form capture the data
//    - create handler functions to POST the data
//    - rerender the entire feed data
//add a like button for updating data
//    - on a click, button will add one like
//    - patch request to update the models
//be able to delete a post
//   -delete post from database
export default Feed
import React, {useEffect, useState} from 'react'
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'

function PostCard({id, title, image, caption, user_id, handleDeletePost}) {
    

    const [likes, setLikes] = useState([])
    const [postLikes, setPostLikes] = useState({})
    const [users, setUser] = useState([])
    const postId = id
    const userID = user_id
    // debugger
   
    useEffect(() => {
        fetch(`http://localhost:3000/likes`)
            .then((r) => r.json())
            .then(likes => {
            likeSetter(likes)
            }
            )}, 
        []);

        function likeSetter(likes){
            setLikes(likes)
            // console.log(likes)
            // debugger
        }

     useEffect(() => {
        fetch(`http://localhost:3000/users`)
            .then((r) => r.json())
            .then(users => {
            userSetter(users)
            }
            )}, 
        []);

        function userSetter(users){
            setUser(users)
            console.log(users)
            // debugger
        }
    // likeTester()
    let likesOfPost = likes.filter(like => like.post_id === postId)
    // console.log('hello', likesOfPost)
    // debugger

    let userOfPost = users.filter(user => user.id === userID)
     console.log('hello', userOfPost)
    // debugger

    function likeHandler(){
        fetch(`http://localhost:3000/likes`, {
            method: "POST",
            headers: {
              "Content-Type": 'application/json',
              "Accept": 'application/json'
            },
            body: JSON.stringify({
              user_id: 1,
              post_id: postId,
            })
          })
          .then(res => res.json())
          .then(likes => {
            likeSetter(likes)
            debugger
          }
          ) 
    }

    function deleteHandler(){
        fetch(`http://localhost:3000/posts/${postId}`, {
            method: "DELETE",
        })
          .then((response) => response.json())
          .then((posts) => {
            handleDeletePost(posts);
          });
    }

return (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{userOfPost.name}</Card.Meta>
      <Card.Description>
        {caption}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Button as='div' labelPosition='right'>
      <Button icon
      onClick={likeHandler}>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic pointing='left'>
        {likesOfPost.length}
      </Label>
    </Button>
    <Button as='div' labelPosition='right'>
      <Button icon
      onClick={deleteHandler}>
        <Icon name='heart' />
        Delete
      </Button>
    </Button>
    </Card.Content>
  </Card>
)
}
export default PostCard
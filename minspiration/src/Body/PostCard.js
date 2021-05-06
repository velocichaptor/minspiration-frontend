import React, {useEffect, useState} from 'react'
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'

function PostCard({id, title, image, caption, user_id, likes, buildFeed}) {
    let displayLikes = likes
    const postID = id
    const [displayUser, setDisplayUser] = useState('')
    const [postLikes, setPostLikes] = useState(displayLikes)
    
    
    
    useEffect(() => {
        fetch(`http://localhost:3000/users/${user_id}`)
            .then((r) => r.json())
            .then(user => {
            userSetter(user)
            }
            )}, []);
 
    const userSetter = (user) => {
        setDisplayUser(user.username)
    }

    function likeHandler(){
        fetch(`http://localhost:3000/posts/${postID}`, {
            method: "PATCH",
            headers: {
              "Content-Type": 'application/json',
              "Accept": 'application/json'
            },
            body: JSON.stringify({
              likes: likes + 1,
            })
          })
          .then(res => res.json())
          .then(updatedPost => {
            likeSetter(updatedPost)
            // debugger
          }
          ) 
    }

    function likeSetter(updatedPost){
        console.log('hello', updatedPost)
        setPostLikes(updatedPost.likes)
    }

    function deleteHandler(){
        fetch(`http://localhost:3000/posts/${postID}`, {
            method: "DELETE",
        })
          .then((response) => response.json())
          .then((posts) => {
            buildFeed(posts);
          });
    }
//  {/*wrapped ui={true} */}
return (
  <Card color='blue'>
    <Image src={image} size='medium' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>by {displayUser}</Card.Meta>
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
        {postLikes}
      </Label>
    </Button>
    <Button as='div' labelPosition='right'>
      <Button icon
      onClick={deleteHandler}>
        <Icon name='cut' />
        Delete
      </Button>
    </Button>
    </Card.Content>
  </Card>
)
}
export default PostCard
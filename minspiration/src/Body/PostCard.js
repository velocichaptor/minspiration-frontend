import React, {useEffect, useState} from 'react'
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'

function PostCard({id, title, image, caption}) {

    const [likes, setLikes] = useState([])
    const [postLikes, setPostLikes] = useState({})
    const postId = id
    // debugger
   
        useEffect(() => {
            fetch(`http://localhost:3000/likes`)
              .then((r) => r.json())
              .then(likes => {
                likeSetter(likes)
                // console.log(likes)
                // debugger
                }
              )}, []);

    function likeSetter(likes){
        setLikes(likes)
        console.log(likes)
        // debugger
    }

    function postLikeSetter(){
    // likeTester()
    let likesOfPost = likes.filter(like => like.post_id === postId)
    console.log('hello', likesOfPost)
    setPostLikes(likesOfPost)
    // debugger
}

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
        //   .then(likes => {
        //     likeSetter(likes)
        //   }
        //   ) 
    }

return (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>user</Card.Meta>
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
    </Card.Content>
  </Card>
)
}
export default PostCard

// import React, {useState} from "react";

// function Poem({title, content, author}) {

//   const [read, setRead] = useState(true)

//   const toggleRead = () => {
//     setRead(read => !read)
//   }
 
//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{content}</p>
//       <p>
//         <strong>- By Author {author}</strong>
//       </p>
//       {read ? (
//       <button onClick={toggleRead}>Mark as read</button>
//       ) : (
//         <button onClick={toggleRead}>Mark as unread</button>
//       )}
//     </div>
//   );
// }

// export default Poem;
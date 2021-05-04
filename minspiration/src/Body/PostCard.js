import React, {useEffect, useState} from 'react'
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'

function PostCard({id, title, image, caption}) {

   
        useEffect(() => {
            fetch(`http://localhost:3000/likes`)
              .then((r) => r.json())
              .then(likes => {
                likeGetter(likes)
                }
              )}, []);

    function likeGetter(likes){

    }

    function likeHandler(){

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
        total likes
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
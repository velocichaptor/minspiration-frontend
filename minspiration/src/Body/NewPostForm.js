import React, {useState} from 'react'
import { Button, Container, Image, Modal, Form } from 'semantic-ui-react'

function NewPostForm({handleAddPost}) {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [caption, setCaption] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    submitNewPost({title, image, caption})
    setTitle("")
    setImage("")
    setCaption("")
  }

  const submitNewPost = ({title, image, caption}) => {
    fetch('http://localhost:3000/posts', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({
        title: title,
        image: image,
        caption: caption,
        user_id: 1
      })
    })
    .then(res => res.json())
    .then(post => handleAddPost(post))
  }

  return (
    <Container>
    <Form onSubmit={submitHandler}>
    <Form.Field>
      <label>Title</label>
      <input placeholder='Title' 
      onChange={(e) => setTitle(e.target.value)} 
      value={title} 
      />
    </Form.Field>
    <Form.Field>
      <label>Image</label>
      <input placeholder='URL' 
      onChange={(e) => setImage(e.target.value)} 
      value={image}
      />
    </Form.Field>
    <Form.Field>
      <label>Instructions</label>
      <textarea placeholder='How did you achieve this?'
      onChange={(e) => setCaption(e.target.value)} 
      value={caption}
      />
    </Form.Field>
    <Button color='blue' type='submit'>Submit</Button>
  </Form>
  </Container>
  )
}

export default NewPostForm
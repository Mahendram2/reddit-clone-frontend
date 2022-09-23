import { useState } from 'react';

function NewPost({ createPost }) {
  const [newPost, setNewPost] = useState({
    title: '',
    createdBy: '',
  });

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(newPost);
    setNewPost({
      title: '',
      createdBy: '',
    });
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type='text'
            name='title'
            value={newPost.title}
            onChange={handleChange}
            placeholder='Title'
          />
        </label>
        <label>
          Author:
          <input
            type='text'
            name='createdBy'
            value={newPost.createdBy}
            onChange={handleChange}
            placeholder='Author'
          />
        </label>
        <input type='submit' value='Create Post' />
      </form>
    </div>
  );
}

export default NewPost;

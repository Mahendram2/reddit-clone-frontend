import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewPost({ createPost, user }) {
  const [newPost, setNewPost] = useState({
    title: '',
    createdBy: '',
    content: '',
    category: '',
  });

  const navigate = useNavigate();

  const signedIn = () => {
    const handleChange = (e) => {
      setNewPost({
        ...newPost,
        [e.target.name]: e.target.value,
        createdBy: user.displayName,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      createPost(newPost);
      setNewPost({
        title: '',
        content: '',
        category: '',
      });
      navigate('/');
    };

    return (
      <div>
        <h1>Create a New Post</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Category:
            <input
              type='text'
              name='category'
              value={newPost.category}
              onChange={handleChange}
              placeholder='Category'
            />
          </label>
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
            Content:
            <textarea
              type='text'
              name='content'
              value={newPost.content}
              onChange={handleChange}
              placeholder='Post Text Content'
            />
          </label>
          <input type='submit' value='Create Post' />
        </form>
      </div>
    );
  };

  const noUser = () => {
    return <h1>Sign in to create a post!</h1>;
  };

  return user ? signedIn() : noUser();
}

export default NewPost;

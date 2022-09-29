import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewPost({ createPost, user }) {
  const [newPost, setNewPost] = useState({
    title: '',
    createdBy: '',
    content: '',
    category: 'General',
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
      <div className='new-post'>
        <h1 className='title'>Create a New Post</h1>
        <h2 className='title'>''</h2>
        <form onSubmit={handleSubmit}>
          <label className='category'>
            <select name='category' onChange={handleChange}>
              <option value='General'>General</option>
              <option value='Movies'>Movies</option>
              <option value='Sports'>Sports</option>
              <option value='Video Games'>Video Games</option>
            </select>
          </label><br />
          <label>
            <input
              type='text'
              name='title'
              value={newPost.title}
              onChange={handleChange}
              placeholder='Title'
            />
          </label><br />
          <label>
            <textarea
              type='text'
              name='content'
              value={newPost.content}
              onChange={handleChange}
              placeholder='Post Text Content'
            />
          </label><br />
          <input type='submit' value='Submit' className='create-b' />
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

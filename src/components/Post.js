import Content from './Content';
import Comment from './Comment';

function Post(props) {
  return (
    <>
      <h1>I am the Post Component</h1>
      <Content />
      <Comment />
    </>
  );
}

export default Post;

import Content from './Content';
import Comment from './Comment';

function Post({ title, createdBy }) {
  return (
    <>
      <h2>{title}</h2>
      <h3>Created By: {createdBy}</h3>
      <Content />
      <Comment />
    </>
  );
}

export default Post;

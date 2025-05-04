import { useParams } from "react-router";

function Post() {
  const params = useParams<{ postId: string }>();
  return (
    <div>
      <h3>post {params.postId}</h3>
    </div>
  );
}

export default Post;

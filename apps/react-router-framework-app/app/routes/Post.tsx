import type { Route } from './+types/Post'

function Post({params}: Route.LoaderArgs) {
  return (
    <div>Post id: {params.postId}</div>
  )
}

export default Post
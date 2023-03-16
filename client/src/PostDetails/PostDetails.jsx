import React from 'react'
import { useSelector } from 'react-redux'

const PostDetails = () => {
  const post =useSelector(state=>state.posts.PostToDispalay)

  return (
    <div>
      {post._id}
      <img src={post.selectedFile} alt="" />
    </div>
  )
}

export default PostDetails


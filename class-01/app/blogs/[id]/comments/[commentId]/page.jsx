import React from 'react'

const SingleComment = async ({params}) => {
    const obj = await params
    console.log(obj)
  return (
    <div>The comment ID of this comment is {obj.commentId}</div>
  )
}

export default SingleComment
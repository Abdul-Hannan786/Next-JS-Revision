import React from 'react'

const Comments = async ({params}) => {
    const obj = await params
    console.log(obj)
  return (
    <div>All Comments on {obj.id} Blog</div>
  )
}

export default Comments
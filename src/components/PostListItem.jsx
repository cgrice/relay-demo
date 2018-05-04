import React from 'react'
import { Link } from 'react-router-dom'
import { createFragmentContainer, graphql } from 'react-relay'

const PostListItem = ({
    post
}) => (
    <div>
        <h2>
            { console.log(post) }
            <Link to={`/post/${post.id}`} >
                {post.title}
            </Link>
        </h2>
    </div>
)

export default createFragmentContainer(PostListItem, graphql`
  fragment PostListItem_post on Post {
    id
    title
  }  
`)
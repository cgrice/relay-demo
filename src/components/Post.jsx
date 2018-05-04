import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import CommentList from './CommentList'
import CommentForm from './CommentForm'

const Post = ({
  post
}) => (
    <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>

        <CommentList comments={post.comments} />
        <CommentForm
            post={post}
        />
    </div>
)

export default createFragmentContainer(Post, graphql`
  fragment Post_post on Post {
    id
    title
    content
    comments {
        ...CommentList_comments
    }
    
  }  
`)
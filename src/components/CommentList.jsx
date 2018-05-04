import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

const CommentList = ({
    comments,
}) => (
    <div>
        { comments ? (
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <p>{comment.content}</p>
                        <p>{comment.author}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <div>No comments</div>
        )}
    </div>
)

export default createFragmentContainer(CommentList, graphql`
  fragment CommentList_comments on Comment @relay(plural: true) {
    id
    content
    author
  }  
`)
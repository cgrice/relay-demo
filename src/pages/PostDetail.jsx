import React from 'react'
import Post from '../components/Post'
import {
    QueryRenderer,
    graphql
} from 'react-relay'

import environment from '../environment'

const PostDetail = ({
    match
}) => (
    <QueryRenderer
        environment={environment}
        query={graphql`
            query PostDetailQuery($postId: ID!) {
              post: node(id: $postId) {
                ...Post_post
              }
            }
        `}
        variables={{
            postId: match.params.id,
        }}
        render={({ error, post }) => {
            if (error) {
                return <div>{error.message}</div>
            } else if (post) {
                return <Post post={post} />
            }
            return <div>Loading...</div>
        }}
    />

)

export default PostDetail
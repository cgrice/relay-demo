import React from 'react'
import PostDetail from './PostDetail'
import {
    QueryRenderer,
    graphql
} from 'react-relay'

import environment from '../../environment'

const PostDetailContainer = ({
    match
}) => (
    <QueryRenderer
        environment={environment}
        query={graphql`
            query PostDetailContainerQuery($where: PostWhereUniqueInput!) {
                post(where: $where) {
                    ...Post_post
                }
            }
        `}
        variables={{
            where: {
                id: match.params.id,
            }
        }}
        render={({ error, props }) => {
            console.log(props)
            if (error) {
                return <div>{error.message}</div>
            } else if (props) {
                return <PostDetail post={props.post} />
            }
            return <div>Loading...</div>
        }}
    />

)

export default PostDetailContainer
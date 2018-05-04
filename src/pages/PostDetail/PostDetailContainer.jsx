import React from 'react'
import PostDetail from './PostDetail'
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import { CircularProgress } from 'material-ui/Progress'


import environment from '../../environment'

const PostDetailContainer = ({
    match
}) => (
    <QueryRenderer
        environment={environment}
        query={graphql`
            query PostDetailContainerQuery($where: PostWhereUniqueInput!) {
                post(where: $where) {
                    id
                    ...Post_post
                    comments {
                        ...CommentList_comments
                    }
                }
            }
        `}
        variables={{
            where: {
                id: match.params.id,
            }
        }}
        render={({ error, props }) => {
            if (error) {
                return <div>{error.message}</div>
            } else if (props && props.post) {
                return <PostDetail post={props.post}/>
            }
            return <CircularProgress />
        }}
    />

)

export default PostDetailContainer
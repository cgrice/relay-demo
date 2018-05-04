import React from 'react'
import Grid from 'material-ui/Grid'

import Post from '../../components/Post'
import CommentList from '../../components/CommentList'
import CommentForm from '../../components/CommentForm'

const PostDetail = ({ post }) => {
    return (
        <Grid
            container
            spacing={16}
        >
            <Grid item xs={12}>
                <Post
                    post={post}
                />
            </Grid>
            <Grid item xs={12}>
                <CommentList comments={post.comments} />
            </Grid>
            <Grid item xs={12}>
                <CommentForm post={post} />
            </Grid>
        </Grid>
    )
}

export default PostDetail
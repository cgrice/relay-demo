import React from 'react'

import PostList from '../../components/PostList'
import Grid from 'material-ui/Grid'

const Home = ({ posts }) => {
    return (
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <PostList
                    posts={posts}
                />
            </Grid>
        </Grid>
    )
}

export default Home
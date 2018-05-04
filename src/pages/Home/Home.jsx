import React from 'react'

import PostList from '../../components/PostList'

const Home = ({ posts }) => {
    return (
        <div>
            <PostList
                posts={posts}
            />
        </div>
    )
}

export default Home
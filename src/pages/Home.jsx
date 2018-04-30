import React from 'react'
import PostList from "../components/PostList"

const Home = () => (
    <PostList
        posts={[
            {
                id: 1,
                title: 'Post 1',
                content: 'This is a blog post!',
            },
            {
                id: 2,
                title: 'Post 2',
                content: 'This is another blog post!',
            },
        ]}
    />
)

export default Home
import React from 'react'
import Post from './Post'

const PostList = ({
    posts,
}) => (
    <div>
        <ul>
            {posts.map(({ title, content }) => (
                <Post
                    title={title}
                    content={content}
                />
            ))}
        </ul>
    </div>
)

export default PostList
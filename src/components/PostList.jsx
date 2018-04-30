import React from 'react'
import PostListItem from './PostListItem'

const PostList = ({
    posts,
}) => (
    <div>
        <ul>
            {posts.map(({ title, id }) => (
                <PostListItem
                    title={title}
                    id={id}
                />
            ))}
        </ul>
    </div>
)

export default PostList
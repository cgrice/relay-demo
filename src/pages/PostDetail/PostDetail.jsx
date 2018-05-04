import React from 'react'

import Post from '../../components/Post'

const PostDetail = ({ post }) => {
    return (
        <div>
            <Post
                post={post}
            />
        </div>
    )
}

export default PostDetail
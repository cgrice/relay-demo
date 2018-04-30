import React from 'react'
import { Link } from 'react-router-dom'

const PostListItem = ({
    title,
    id
}) => (
    <div>
        <h2>
            <Link to={`/post/${id}`} >
                {title}
            </Link>
        </h2>
    </div>
)

export default PostListItem
import React from 'react'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

import PostListItem from './PostListItem'

const PostList = ({ posts }) => (
    <div>
        <ul>
            {posts.map((post) => (
                <div key={post.id} >
                    <PostListItem
                        post={post}
                    />
                </div>
            ))}
        </ul>
    </div>
)

export default createFragmentContainer(PostList, graphql`
    fragment PostList_posts on Post @relay(plural: true) {
        id
        ...PostListItem_post
    }    
`)
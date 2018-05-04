import React from 'react'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'
import List from 'material-ui/List'


import PostListItem from './PostListItem'

const PostList = ({ posts }) => (
    <List>
        {posts.map((post) => (
            <PostListItem
                key={post.id}
                post={post}
            />
        ))}
    </List>
)

export default createFragmentContainer(PostList, graphql`
    fragment PostList_posts on Post @relay(plural: true) {
        id
        ...PostListItem_post
    }    
`)
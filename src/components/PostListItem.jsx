import React from 'react'
import { Link } from 'react-router-dom'
import { createFragmentContainer, graphql } from 'react-relay'
import { ListItem, ListItemText } from 'material-ui/List'

const PostListItem = ({
    post
}) => (
    <div>
        <ListItem button component={Link} to={`/post/${post.id}`}>
            <ListItemText primary={post.title} secondary={`${post.comments.length} comments`}/>
        </ListItem>
    </div>
)

export default createFragmentContainer(PostListItem, graphql`
  fragment PostListItem_post on Post {
    id
    title
    comments {
        id
    }
  }  
`)
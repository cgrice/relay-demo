import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const CommentList = ({
    comments,
}) => (
    <div>
        <Typography variant="subheading">
            {comments ? comments.length : 0} comments on this post
        </Typography>
        { comments && (
            <List>
                {comments.map(({ id, content, author }) => (
                    <Paper key={id}>
                        <ListItem>
                            <ListItemText
                                primary={content}
                                secondary={author}
                            />
                        </ListItem>
                    </Paper>
                ))}
            </List>
        )}
    </div>
)

CommentList.defaultProps = {
    comments: [],
}

export default createFragmentContainer(CommentList, graphql`
  fragment CommentList_comments on Comment @relay(plural: true) {
    id
    content
    author
  }  
`)
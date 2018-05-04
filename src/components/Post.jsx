import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import Typography from 'material-ui/Typography'
import Card, { CardContent, CardHeader } from 'material-ui/Card'


const Post = ({
  post
}) => (
    <Card>
        <CardHeader title={post.title} />
        <CardContent>
            {post.content.split('\n').map((paragraph, i) => (
                <Typography key={i} paragraph variant="body1">{paragraph}</Typography>
            ))}
        </CardContent>
    </Card>
)

export default createFragmentContainer(Post, graphql`
  fragment Post_post on Post {
    id
    title
    content
  }  
`)
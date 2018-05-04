import {
    commitMutation,
    graphql
} from 'react-relay'

import environment from '../environment'

const mutation = graphql`
  mutation CreateComment_Mutation (
    $input: CommentCreateInput!
  ) {
    createComment(data: $input) {
      id
      content
      author
    }
  }
`

const createComment = (author, content, postId) => {

    const variables = {
        input: {
            author,
            content,
            postId,
        }
    }

    const optimisticResponse = {
        createComment: {
            content,
            author,
        }
    }

    const sharedUpdater = store => {
        const comment = store.getRootField('createComment')
        const post = store.get(postId)
        const comments = post.getLinkedRecords('comments') || []
        const newPostComments = [...comments, comment]
        post.setLinkedRecords(newPostComments, 'comments')
    }

    commitMutation(
        environment,
        {
            mutation,
            variables,
            optimisticResponse,
            updater: sharedUpdater,
            optimisticUpdater: sharedUpdater,
        }
    )
}

export default createComment
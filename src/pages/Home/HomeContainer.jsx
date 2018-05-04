import React from 'react'
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from '../../environment'

import Home from './Home'

const HomeContainer = () => (
    <QueryRenderer
        environment={environment}
        query={graphql`
            query HomeContainerQuery {
                posts {
                    ...PostList_posts
                }
            }
        `}
        render={({ error, props }) => {
            console.log(props)
            if (error) {
                return <div>{error.message}</div>
            } else if (props) {
                return <Home posts={props.posts} />
            }
            return <div>Loading...</div>
        }}
    />
)

export default HomeContainer
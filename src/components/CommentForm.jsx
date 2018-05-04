import React from 'react'

import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

import CreateComment from '../mutations/CreateComment'



class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author: '',
            content: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        const {
            author,
            content,
        } = this.state

        const {
            post,
        } = this.props

        CreateComment(author, content, post.id)

        this.setState({
            author: '',
            content: '',
        })
    }

    render() {
        const {
            author,
            content,
        } = this.state
        return (
            <Card>
                <CardContent>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            name="content"
                            id="content"
                            label="Comment"
                            fullWidth
                            multiline
                            margin="normal"
                            value={content}
                            onChange={this.handleChange}
                        />
                        <TextField
                            name="author"
                            id="content"
                            label="Your name"
                            fullWidth
                            margin="normal"
                            value={author}
                            onChange={this.handleChange}
                        />
                        <Button variant="raised" color="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        )
    }
}

export default CommentForm
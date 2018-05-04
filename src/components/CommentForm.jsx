import React from 'react'

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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="author" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Name:
                        <textarea name="content" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default CommentForm
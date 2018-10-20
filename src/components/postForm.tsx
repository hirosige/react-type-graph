import * as React from 'react'
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      body: '',
      title: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  public onChange(e: any) {
    this.setState({[e.target.name]: e.target.value});
  }

  public onSubmit(e: any) {
    e.preventDefault();

    const post = {
      body: this.state.body,
      id: 0,
      title: this.state.title,
    };

    this.props.createPost(post);
  }

  public render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <div>
            <label>Body: </label><br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { createPost })(PostForm);
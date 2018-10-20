import * as React from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class PostList extends React.Component<any, any> {
  public componentWillMount() {
    this.props.fetchPosts();
  }

  public componentWillReceiveProps(nextProps: any) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  public render() {
    const { posts } = this.props;

    const postItems = posts.map((post: any) => {
      return(
        <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      );
    })

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  console.log(state.posts.toJS())
  return {
    newPost: state.posts.item,
    posts: state.posts,
  }
};

export default connect(mapStateToProps, { fetchPosts })(PostList);

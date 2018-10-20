import { fromJS, OrderedMap } from 'immutable';

import {
  FETCH_POSTS,
  NEW_POST
} from '../actions/types';

import Post from '../models/post';

const init: any = OrderedMap<Post, Post>();

const mergeEntities = (state: any, newPosts: any) =>
  state.merge(newPosts.map((post: any) => new Post(post)))

export default (
  posts = init,
  action: {
    type: string,
    payload: any
  }
) => {
  switch (action.type) {
    case FETCH_POSTS:
      return mergeEntities(posts, fromJS(action.payload));
    case NEW_POST:
      return posts.push(action.payload);
    default:
      return posts;
  }
}

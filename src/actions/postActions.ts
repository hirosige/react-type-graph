import Post from 'src/models/post';

import {
  FETCH_POSTS,
  NEW_POST
} from './types';


export const fetchPosts = () => (dispatch: any) => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
      payload: posts,
      type: FETCH_POSTS,
    }));
}

export const createPost = (postData: object) => (dispatch: any) => {
  fetch('http://jsonplaceholder.typicode.com/posts', {
    body: JSON.stringify(postData),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
  })
    .then(res => res.json())
    .then(posts => {
      dispatch({
        payload: new Post(posts),
        type: NEW_POST,
      })
    });
}

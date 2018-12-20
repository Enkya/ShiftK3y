import axios from 'axios';
import {
  FETCH_ITEMS,
  SAVE_ITEM,
} from '../types';

export function saveItem(postProps) {
  const url = 'http://jsonplaceholder.typicode.com/posts';
  const request = axios.post(url, postProps);

  return {
    type: SAVE_ITEM,
    payload: request,
  };
}

export function fetchItems() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  return function(dispatch) {
    request.then( function(response) {
      dispatch({
        type: FETCH_ITEMS,
        payload: response,
      });
    });
  };
}

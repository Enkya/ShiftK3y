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
  const request = axios.get('http://jsonplaceholder.typicode.com/posts');

  return {
    type: FETCH_ITEMS,
    payload: request,
  };
}

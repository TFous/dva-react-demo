import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  return request(`/list/list?_page=${page}&_limit=${PAGE_SIZE}`);
}

export function remove(id) {
  return request(`/list/list/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
  console.log("edit");
  return request(`/list/list/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/list/list', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}

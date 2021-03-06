import createDataContext from './createDataContext';
import jsonServer, {BLOGPOSTS_ENDPOINT} from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'delete_blogpost':
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = dispatch => async () => {
  const response = await jsonServer.get(BLOGPOSTS_ENDPOINT);
  dispatch({
    type: 'get_blogposts',
    payload: response.data,
  });
};

const addBlogPost = () => async (title, content, callback) => {
  await jsonServer.post(BLOGPOSTS_ENDPOINT, {title, content});
  if (callback) callback();
};

const editBlogPost = () => async (id, title, content, callback) => {
  await jsonServer.put(`${BLOGPOSTS_ENDPOINT}/${id}`, {title, content});
  if (callback) callback();
};

const deleteBlogPost = dispatch => async (id) => {
  await jsonServer.delete(`${BLOGPOSTS_ENDPOINT}/${id}`);
  dispatch({type: 'delete_blogpost', payload: id});
};

export const {Context, Provider} = createDataContext(
    blogReducer,
    {getBlogPosts, addBlogPost, editBlogPost, deleteBlogPost},
    [],
);

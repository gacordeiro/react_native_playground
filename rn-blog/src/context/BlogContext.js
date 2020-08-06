import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      let id = Math.floor(Math.random() * 99999);
      return [
        ...state,
        {
          id: id,
          title: `Blog Post #${id}`,
        },
      ];
    case 'delete_blogpost':
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({type: 'add_blogpost'});
  };
};

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({type: 'delete_blogpost', payload: id});
  };
};

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost},
    [],
);

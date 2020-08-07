import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      let id = Math.floor(Math.random() * 99999);
      return [
        ...state,
        {
          id: id,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'edit_blogpost':
      let edited = {
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
      };
      return state.map((post) => post.id === action.payload.id ? edited : post);
    case 'delete_blogpost':
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = dispatch => (title, content, onSuccess) => {
  dispatch({
    type: 'add_blogpost',
    payload: {title, content},
  });
  onSuccess();
};

const editBlogPost = dispatch => (id, title, content, onSuccess) => {
  dispatch({
    type: 'edit_blogpost',
    payload: {id, title, content},
  });
  onSuccess();
};

const deleteBlogPost = dispatch => (id) => dispatch({
  type: 'delete_blogpost',
  payload: id,
});

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost, editBlogPost, deleteBlogPost},
    [],
);

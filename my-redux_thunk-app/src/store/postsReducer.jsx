export const ADD_POST = "ADD_POST";
export const GET_POST = "GET_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const IS_LOADING = "IS_LOADING";

const initialState = {
  posts: [],
  isLoading: false
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case GET_POST:
      return {
        ...state,
        posts: action.payload
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id != action.payload)
      }
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post => post.id == action.payload ? {...post, title: action.payload, body: action.payload} : post)
      }
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
}

export const isLoading = payload => ({type: IS_LOADING, payload});
export const getPost = payload => ({type: GET_POST, payload});
export const deletePost = payload => ({type: DELETE_POST, payload});
export const updatePost = payload => ({type: UPDATE_POST, payload});

export const getPostThunk = () => dispatch => {
  dispatch(isLoading(true));
  
  fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(res => res.json())
  .then(json => {
    dispatch(getPost(json));
    dispatch(isLoading(false));
  })
  .catch(e => {
    throw new Error(e);
  });
}

export const deletePostThunk = id => dispatch => {
  dispatch(isLoading(true));
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE'})
  .then(res => {
    dispatch(deletePost(id));
    dispatch(isLoading(false));
  })
  .catch(e => {
    throw new Error(e);
  });
}

export const updatePostThunk = (id, title) => dispatch => {
  dispatch(isLoading(true));
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(res => res.json())
  .then(json => {
    dispatch(updatePost(id));
    dispatch(isLoading(false));
  })
  .catch(e => {
    throw new Error(e);
  });
}
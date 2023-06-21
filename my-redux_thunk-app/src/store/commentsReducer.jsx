export const GET_COMMENTS = "GET_COMMENTS";
export const IS_LOADING = "IS_LOADING";

const initialState = {
  comments: [],
  isLoading: false
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
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
export const getComments = payload => ({type: GET_COMMENTS, payload});

export const getCommentsThunk = id => dispatch => {
  dispatch(isLoading(true));
  
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  .then(res => res.json())
  .then(json => {
    dispatch(getComments(json));
    dispatch(isLoading(false));
  })
  .catch(e => {
    throw new Error(e);
  });
}
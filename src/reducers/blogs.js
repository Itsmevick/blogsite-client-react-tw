import {
    RETRIEVE_BLOGS,
    CREATE_BLOGS,
  } from "../actions/type";
  
  const initialState = [];
  
  function blogReducer(blogs = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_BLOGS:
        return [...blogs, payload];
      case RETRIEVE_BLOGS:
        return payload;
  
      default:
        return blogs;
    }
  };
  
  export default blogReducer;
  
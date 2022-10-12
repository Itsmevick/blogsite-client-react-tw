import {
    RETRIEVE_BLOGS,
  } from "../actions/type";
  
  const initialState = [];
  
  function blogReducer(blogs = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {

      case RETRIEVE_BLOGS:
        return payload;
  
      default:
        return blogs;
    }
  };
  
  export default blogReducer;
  
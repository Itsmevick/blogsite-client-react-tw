import {
    RETRIEVE_BLOGS,
    CREATE_BLOGS
  } from "./type";
  
  import blogDataService from "../service/BlogService";
  

  export const createBlogs = (title, author, content, category) => async (dispatch) => {
  try {
    const res = await blogDataService.create({ title, author, content, category });

    await dispatch({
      type: CREATE_BLOGS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};


  export const retrieveblogs = () => async (dispatch) => {
    try {
      const res = await blogDataService.getAll();
  
      dispatch({
        type: RETRIEVE_BLOGS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  
  

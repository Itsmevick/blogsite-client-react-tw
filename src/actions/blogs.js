import {
    RETRIEVE_BLOGS,
  } from "./type";
  
  import blogDataService from "../service/BlogService";
  

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
  
  
  

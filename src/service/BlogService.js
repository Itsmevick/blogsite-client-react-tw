import http from "../http-common";

const getAll = () => {
  return http.get("/posts");
};

const get = id => {
  return http.get(`/posts/post/${id}`);
};


const BlogService = {
  getAll,
  get,
};

export default BlogService;
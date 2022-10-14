import http from "../http-common";

const create = data => {
  return http.post("/posts", data);
};

const getAll = () => {
  return http.get("/posts");
};

const get = id => {
  return http.get(`/posts/post/${id}`);
};


const BlogService = {
  getAll,
  get,
  create,
};

export default BlogService;
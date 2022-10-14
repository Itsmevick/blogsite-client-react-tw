import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlogs } from "../../../actions/blogs";

export default function CreatePostComponent() {
  const initialBlogsState = {
    id: null,
    title: "",
    author: "",
    content: "",
    category: "",
  };
  const [blog, setBlog] = useState(initialBlogsState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlog({ ...blog, [name]: value });
  };

  const saveBlog = (async) => {
    const { title, author, content, category } = blog;

     dispatch(createBlogs(title, author, content, category))
      .then((data) => {
        setBlog({
          id: data.id,
          title: data.title,
          author: data.description,
          content: data.content,
          category: data.category,
          date: data.date,
          coverart: data.coverart,
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newBlog = () => {
    setBlog(initialBlogsState);
    setSubmitted(false);
  };
  return (
    <div className="w-full h-full">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="" onClick={newBlog}>
            Add
          </button>
        </div>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="flex gap-2">
                <div className="flex py-4 gap-4">
                  <label htmlFor="text">Article Title</label>
                  <input
                    type="text"
                    className="border border-slate-600"
                    onChange={handleInputChange}
                    value={blog.title}
                    name="title"
                  />
                </div>
                <div className="flex py-4 gap-4">
                  <label htmlFor="text">Author Name</label>
                  <input
                    type="text"
                    className="border border-slate-600"
                    onChange={handleInputChange}
                    value={blog.author}
                    name="author"
                  />
                </div>
                <div className="flex py-4 gap-4">
                  <label htmlFor="text">Article Category</label>
                  <input
                    type="text"
                    className="border border-slate-600"
                    onChange={handleInputChange}
                    value={blog.category}
                    name="category"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <label htmlFor="text flex-none w-20">Content</label>
              <textarea
                id="message"
                rows="8"
                className="block p-2.5 w-[90%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Article content here..."
                onChange={handleInputChange}
                value={blog.content}
                name="content"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="my-1 px-3 py-2 bg-green-800 text-white tracking-widest uppercase semibold font-sm"
            onClick={saveBlog}
          >
            Save Post
          </button>
        </form>
      )}
    </div>
  );
}

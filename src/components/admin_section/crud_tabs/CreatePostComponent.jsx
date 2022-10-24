import React, { useState } from "react";
import {
  useGetPostsQuery,
  useAddNewPostMutation ,
} from "../../../store/features/api/blogsSlice";

export default function CreatePostComponent() {
  const [submitted, setSubmitted] = useState(false);
  const { data, error, isLoading, isSuccess } = useGetPostsQuery({
    refetchOnMountOrArgChange: true,
  });
  const [addNewPost, response] = useAddNewPostMutation ();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops, an error occured</div>;
  }

 // console.log(data);
  const handleSave = (e) => {
    e.preventDefault();
    const { title, author, category, content } = e.target.elements;
    let formData = {
      title: title.value,
      author: author.value,
      category: category.value,
      content: content.value,
    };
    addNewPost(formData)
      .unwrap()
      .then((mdata) => {console.log(mdata)})
      .then((error) => {
        //console.log(error)
      })
    //setSubmitted(true);
  };

  const newBlog = () => {
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
        <form onSubmit={handleSave}>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="flex gap-2">
                <div className="flex py-4 gap-4">
                  <label htmlFor="text">Article Title</label>
                  <input
                    type="text"
                    className="border border-slate-600"
                    name="title"
                    required
                  />
                </div>
                <div className="flex py-4 gap-4">
                  <label htmlFor="text">Author Name</label>
                  <input
                    type="text"
                    className="border border-slate-600"
                    name="author"
                    required
                  />
                </div>
                <div className="flex py-4 gap-4">
                  <label htmlFor="text">Article Category</label>
                  <input
                    type="text"
                    className="border border-slate-600"
                    name="category"
                    required
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
                name="content"
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="my-1 px-3 py-2 bg-green-800 text-white tracking-widest uppercase semibold font-sm"
          >
            Save Post
          </button>
        </form>
      )}
    </div>
  );
}

import React, { useState } from "react";
import CreatePostComponent from "./crud_tabs/CreatePostComponent";
import EditPostComponent from "./crud_tabs/EditPostComponent";
import DeletePostComponent from "./crud_tabs/DeletePostComponent";

function ManagePosts() {
  const [activeTab, setActiveTab] = useState("createPostTab");

  const handleCreate = () => {
    setActiveTab("createPostTab");
  };
  const handleEdit = () => {
    setActiveTab("editPostTab");
  };
  const handleDelete = () => {
    setActiveTab("deletePostTab");
  };
  return (
    <div className="py-8 flex flex-col">
      <div className="flex justify-center gap-4">
        <button
          className={`py-3 px-4 bg-slate-800 text-gray-200 uppercase text-sm tracking-widest ${activeTab} === createPostTab ? active : null`}
          onClick={handleCreate}
        >
          Create Posts
        </button>
        <button
          className={`py-3 px-4 bg-slate-800 text-gray-200 uppercase text-sm tracking-widest ${activeTab} === editPostTab ? active : null`}
          onClick={handleEdit}
        >
          Edit Posts
        </button>
        <button
          className={`py-3 px-4 bg-slate-800 text-gray-200 uppercase text-sm tracking-widest ${activeTab} === deletePostTab ? active : null`}
          onClick={handleDelete}
        >
          Delete Posts
        </button>
      </div>
      <div className="m-0 p-0 w-[1000px] h-80 mx-auto border-slate-600 border rounded-lg">
        <div>
          {activeTab === "createPostTab" ? <CreatePostComponent /> : ""}
          {activeTab === "editPostTab" ? <EditPostComponent /> : ""}
          {activeTab === "deletePostTab" ? <DeletePostComponent /> : ""}
        </div>
      </div>
    </div>
  );
}

export default ManagePosts;

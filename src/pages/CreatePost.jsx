import React, { useState } from "react";
import CreatePostComponent from '../components/CreatePostComponent'
import EditPostComponent from '../components/EditPostComponent'
import DeletePostComponent from '../components/DeletePostComponent'


export default function CreatePost() {

  return (
    <div className="py-8 flex flex-col">
      <div className="flex gap-4">
        <button className="py-3 px-4 bg-slate-800 text-gray-200 uppercase text-sm tracking-widest"
    
        >
          Create Post
        </button>
        <button className="py-3 px-4 bg-slate-800 text-gray-200 uppercase text-sm tracking-widest"
    
        >
          Edit Post
        </button>
        <button className="py-3 px-4 bg-slate-800 text-gray-200 uppercase text-sm tracking-widest"
        >
          Delete Post
        </button>
      </div>      
      <div> 
      <CreatePostComponent />
      < EditPostComponent />
      <DeletePostComponent />
      </div>
    </div>
  );
}

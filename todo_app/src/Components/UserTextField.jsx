import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const UserTextField = ({ updateTodoData,handleOpenTextBox }) => {
   const [notetTitle,setNoteTitle]=useState("");
   const [noteDescription,setNoteDescription]=useState("");
    
    const newTask={
        title:notetTitle,
        description:noteDescription
    }
    console.log(newTask);

    console.log(notetTitle);
    console.log(noteDescription);
    
  const handleTextBox = () => {
    handleOpenTextBox(false);
    updateTodoData(newTask);
  };
  
  const handleTitleInput=(event)=>{
    setNoteTitle(event.target.value);
  }
  const handleDescriptionInput=(event)=>{
    setNoteDescription(event.target.value);
  }

  return (
    <div className="absolute z-50 flex w-6/12 text-white rounded-md h-28 bg-sky-900 top-40 drop-shadow-xl">
      <div className="w-full">
        <div>
          <input
            type="text"
            placeholder="Title"
            value={notetTitle}
            onChange={handleTitleInput}
            className="w-full px-5 py-2 my-2 bg-transparent outline-none"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Description"
            value={noteDescription}
            onChange={handleDescriptionInput}
            className="w-full px-5 py-2 bg-transparent outline-none"
          />
        </div>
      </div>
      <div onClick={handleTextBox} className="cursor-pointer">
        <IoClose className="relative top-[-35px] left-8 text-white" size={30} />
      </div>
    </div>
  );
};

export default UserTextField;

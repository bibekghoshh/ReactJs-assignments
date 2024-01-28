import { useState } from "react";
import UserTextField from "./Components/UserTextField";
import { todoList } from "./todoListData";
import {MdDelete} from 'react-icons/md'

function App() {
  const [openTextBox, setOpenTextBox] = useState(false);
  const [newData,setNewData]=useState(todoList);

  const handleOpenTextBox = (newData) => {
    setOpenTextBox(newData);
  };
  const updateTodoData =(newTask)=>{
    if(newTask.title!=="" || newTask.description!==""){
      
    }
  }

  const handleTextField = () => {
    setOpenTextBox(true);
  };



  return (
    <div className={`w-full h-screen bg-sky-900 text-white`}>
      {openTextBox && <div className="absolute z-10 w-full h-screen bg-black bg-opacity-35"></div>}   
      <div className="flex flex-col items-center justify-center gap-20">
        <div className="flex pt-[6%]  w-full justify-center">
          <input
            type="text"
            className="w-4/12 px-5 py-2 bg-transparent border-2 rounded-md shadow-md outline-none border-sky-600 "
            placeholder="Write your note here"
            onClick={handleTextField}
            disabled={openTextBox}
          />
          {openTextBox && <UserTextField updateTodoData={updateTodoData} handleOpenTextBox={handleOpenTextBox} />}
        </div>
        <div className="flex flex-wrap justify-center w-8/12 gap-5 ">
          {newData.map((data,index)=>(<div key={index}>
            <div className="px-2 py-2 overflow-y-hidden border-[1px] border-slate-400 rounded h-28 w-80 shadow-md bg-sky-900">
              <div className="flex justify-between">
              <div>{data.title}</div>
                <div onClick={()=>{setNewData(newData => newData.filter((d,i)=> i!==index))}} className="cursor-pointer"><MdDelete/></div>
              </div>
              <div>{data.description}</div>
            </div>
          </div>))}
        </div>
      </div>
    </div>
  );
}

export default App;

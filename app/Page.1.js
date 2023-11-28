"use client";
import React, { useState } from "react";

export const Page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  let renderTask = <h2>No Task Available</h2>;
  renderTask = mainTask.map((t, i) => {
    return (
      <div>
        <h5>{t.title}</h5>
        <h6>{t.desc}</h6>
      </div>
    );
  });
  return (
    <>
      <h1 className="bg-blue-600 p-10 font-bold text-center text-4xl text-white">
        My To Do App
      </h1>
      <form className="mt-5" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
          className="text-2xl border-zinc-500 border-2 m-5 px-4 py-2"
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
          className="text-2xl border-zinc-500 border-2 m-5 px-4 py-2"
        />
        <button className="text-2xl text-white px-4 py-2 font-bold rounded m-5 bg-red-500">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-5 bg-blue-600 text-white">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

import React from "react";

const Status = ({ tasks }) => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h3 className="text-2xl font-bold text-purple-800">Your List</h3>
        <div className="flex items-center bg-purple-700 text-white px-3 rounded-full text-sm py-1">
          Done ({" "}
          <span id="doneCount">{tasks.filter((el) => el.isDone === true).length}</span>{" "}
          /<span id="listCount">{tasks.length}</span> )
        </div>
      </div>
    </div>
  );
};

export default Status;

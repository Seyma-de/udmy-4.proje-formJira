import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

const TaskShow = ({ task, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="görevler-kutusu">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} />
      ) : (
        <div>
          <h3>Göreviniz</h3>
          <p>{task.title}</p>
          <h3>yapilacaklar</h3>
          <p>{task.taskDesc}</p>
          <div className="buton">
            <button onClick={handleDeleteClick}>Sil</button>
            <button onClick={handleEditClick}>Güncelle</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskShow;

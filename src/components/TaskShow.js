import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

const TaskShow = ({ task, onDelete, onUpdate }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };
  return (
    <div className="görevler-kutusu">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
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

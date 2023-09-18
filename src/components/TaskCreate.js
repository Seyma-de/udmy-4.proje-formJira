import React, { useState } from "react";

const TaskCreate = ({ onCreate, task, taskformUpdate }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };
  return (
    <div>
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taski Güncelleyiniz</h3>
          <form className="task-form">
            <label>Basligi Düzenleyiniz</label>
            <input value={title} onChange={handleChange} />
            <label>Taski Düzenleyiniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              cols="30"
              rows="10"
            ></textarea>
            <button className="buton-update" onClick={handleSubmit}>
              Güncelle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz</h3>
          <form className="task-form">
            <label>Baslik</label>
            <input value={title} onChange={handleChange} />
            <label>Task Giriniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              cols="30"
              rows="10"
            ></textarea>
            <button onClick={handleSubmit}>Olustur</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskCreate;

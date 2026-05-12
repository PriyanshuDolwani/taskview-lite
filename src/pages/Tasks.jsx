import React, { useEffect, useState } from "react";
import API from "../api";


function Tasks() {
  const [tasks, setTasks] = useState([]);

  // TODO:
  // Use useEffect to fetch tasks
  // Use API.get("/todos")
  // Store response in state
  // Handle errors using try/catch

    useEffect(() => {
      const fetchTasks = async () => {
        try {
          const response = await API.get("/todos");
          setTasks(response.data);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      };

      fetchTasks();
    }, []); 

  return (
    <div>
      <h2>Tasks List</h2>

      {/* TODO: Display first 5 tasks (title only) */}
      <ul>
        {tasks.slice(0, 5).map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      {/* Hint: use task.id as key */}
      

    </div>
  );
}

export default Tasks;

import './App.css';
import Status from "./components/Status";
import {useState} from "react";

function App() {
  const [statuses, setStatuses] = useState(['Todo', 'Doing', 'Review', 'Done']);
  const all_tasks = {
    "Todo": [
      {
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations. Mapping postal_code_id cho bảng user, delivery_address,donation_informations.Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Todo",
        "assigned": "viendd",
        "description": "task desc"
      },
      {
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Todo",
        "assigned": "viendd1",
        "description": "task desc"
      },
      {
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Todo",
        "assigned": "viendd",
        "description": "task desc"
      },
    ],
    "Doing": [
      {
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Doing",
        "assigned": "viendd",
        "description": "task desc"
      },
      {
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations UAT + PROD",
        "status": "Doing",
        "assigned": "viendd1",
        "description": "task desc"
      }
    ],
    "Review": [
      {
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Review",
        "assigned": "viendd",
        "description": "task desc"
      },
      {
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Review",
        "assigned": "viendd1",
        "description": "task desc"
      }
    ],
    "Done": [
      {
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Done",
        "assigned": "viendd",
        "description": "task desc"
      },
      {
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Done",
        "assigned": "viendd1",
        "description": "task desc"
      }
    ],
  }
  const [allTasks, setAllTasks] = useState(all_tasks)

  const onAddTask = (status) => {
    allTasks[status].push({
      "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
      "status": "Review",
      "assigned": "viendd1",
      "description": "task desc"
    })
  }
  return (
    <div className="App">
      <div className="container content-manager">
        {statuses.map((status, index) => {
              let tasks_by_status = allTasks[status];
              return (
                  <Status tasks={tasks_by_status} onAddTask={onAddTask} status={status} key={index}></Status>
              )
        })}
      </div>
    </div>
  );
}

export default App;

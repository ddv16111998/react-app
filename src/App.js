import './App.css';
import Status from "./components/Status";
import {useEffect, useState} from "react";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [statuses] = useState(['Todo', 'Doing', 'Review', 'Done']);
  const [isAdding, setIsAdding] = useState(false);
  const [statusSelected, setStatusSelected] = useState(null);
  const all_tasks = {
    "Todo": [
      {
        "id": 'task_1',
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations. Mapping postal_code_id cho bảng user, delivery_address,donation_informations.Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Todo",
        "assigned": "viendd",
        "description": "task desc"
      },
      {
        "id": 'task_2',
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Todo",
        "assigned": "viendd1",
        "description": "task desc"
      },
      {
        "id": 'task_3',
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Todo",
        "assigned": "viendd",
        "description": "task desc"
      },
    ],
    "Doing": [
      {
        "id": 'task_4',
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Doing",
        "assigned": "viendd",
        "description": "task desc"
      },
      {
        "id": 'task_5',
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations UAT + PROD",
        "status": "Doing",
        "assigned": "viendd1",
        "description": "task desc"
      }
    ],
    "Review": [
      {
        "id": 'task_6',
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Review",
        "assigned": "viendd",
        "description": "task desc"
      },
      {
        "id": 'task_7',
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Review",
        "assigned": "viendd1",
        "description": "task desc"
      }
    ],
    "Done": [
      {
        "id":'task_8',
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Done",
        "assigned": "viendd",
        "description": "task desc"
      },
      {
        "id": 'task_9',
        "title": "Mapping postal_code_id cho bảng user, delivery_address,donation_informations",
        "status": "Done",
        "assigned": "viendd1",
        "description": "task desc"
      }
    ],
  }
  const [allTasks, setAllTasks] = useState(all_tasks)

  const deleteLatestIfNull = (newAllTasks) => {
    Object.keys(newAllTasks).forEach(function(key) {
      if (newAllTasks[key].length && newAllTasks[key].slice(-1)[0].title === ""){
        newAllTasks[key].pop()
      }
    });
    return newAllTasks
  }
  const onAddTask = (status) => {
    let newAllTasks = {...allTasks}
    newAllTasks = deleteLatestIfNull(newAllTasks)

    newAllTasks[status].push({
      "id": "task_" + ((Object.values(newAllTasks).flat().length) + 1).toString(),
      "title": "",
      "status": status,
      "assigned": "",
      "description": ""
    })
    setAllTasks(newAllTasks)
    setIsAdding(true)
    setStatusSelected(status)
  }

  const onSubmitTask = (status, data) => {
    const newAllTasks = {...allTasks}
    newAllTasks[status].pop()
    newAllTasks[status].push({
      "id": "task_" + ((Object.values(newAllTasks).flat().length) + 1).toString(),
      "title": data.title,
      "status": status,
      "assigned": "",
      "description": ""
    })
    setAllTasks(newAllTasks)
    setIsAdding(false)
    setStatusSelected(null)
  }

  const onCloseNewTask = (status) => {
    const newAllTasks = {...allTasks}
    newAllTasks[status].pop()
    setAllTasks(newAllTasks)
    setIsAdding(false)
    setStatusSelected(null)
  }


  const onDragEnd = (result) => {
    console.log('result', result)
    let startColumn = result.source.droppableId
    let endColumn = result.destination.droppableId
    if (startColumn === endColumn) {
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      let newAllTasks = {...allTasks};
      let cardStart = newAllTasks[startColumn][result.source.index]
      console.log('cardStart', cardStart)
      delete newAllTasks[startColumn][result.source.index]
      newAllTasks.splice(result.destination.index, 0, cardStart)
      console.log('newAllTasks', newAllTasks)
      setAllTasks(newAllTasks)
    }
  }

  return (
    <div className="App">
      <div className="container content-manager">
        <DragDropContext onDragEnd={onDragEnd}>
              {statuses.map((status, index) => {
                let tasks_by_status = allTasks[status];
                return (
                    <Status
                        tasks={tasks_by_status}
                        onAddTask={onAddTask}
                        status={status}
                        index={index}
                        onSubmitTask={onSubmitTask}
                        isAdding={isAdding}
                        statusSelected={statusSelected}
                        onCloseNewTask={onCloseNewTask}
                        key={index}
                    />
                )
              })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;

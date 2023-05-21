import './App.css';
import Status from "./components/Status";
import {useEffect, useState} from "react";
import { DragDropContext } from "react-beautiful-dnd";

function App(string, radix) {
  const [statuses] = useState(['Todo', 'Doing', 'Review', 'Done']);
  const [isAdding, setIsAdding] = useState(false);
  const [statusSelected, setStatusSelected] = useState(null);
  const all_tasks = {
    "Todo": [
      {
        "id": 'task_1',
        "title": "Task 1 Demo",
        "status": "Todo",
        "assigned": "viendd",
        "description": "task desc"
      },
      {
        "id": 'task_2',
        "title": "Task 2 Demo",
        "status": "Todo",
        "assigned": "viendd1",
        "description": "task desc"
      },
      {
        "id": 'task_3',
        "title": "Task 3 Demo",
        "status": "Todo",
        "assigned": "viendd",
        "description": "task desc"
      },
      {
        "id": 'task_4',
        "title": "Task 4 Demo",
        "status": "Todo",
        "assigned": "viendd",
        "description": "task desc"
      },
      {
        "id": 'task_5',
        "title": "Task 5 Demo",
        "status": "Todo",
        "assigned": "viendd",
        "description": "task desc"
      },
    ],
    "Doing": [
      {
        "id": 'task_6',
        "title": "Task 6 Demo",
        "status": "Doing",
        "assigned": "viendd",
        "description": "task desc"
      },
      {
        "id": 'task_7',
        "title": "Task 7 Demo",
        "status": "Doing",
        "assigned": "viendd1",
        "description": "task desc"
      },
      {
        "id": 'task_8',
        "title": "Task 8 Demo",
        "status": "Doing",
        "assigned": "viendd",
        "description": "task desc"
      },
      {
        "id": 'task_9',
        "title": "Task 9 Demo",
        "status": "Doing",
        "assigned": "viendd1",
        "description": "task desc"
      },
      {
        "id": 'task_10',
        "title": "Task 10 Demo",
        "status": "Doing",
        "assigned": "viendd1",
        "description": "task desc"
      },
    ],
    "Review": [
      {
        "id": 'task_11',
        "title": "Task 11 Demo",
        "status": "Review",
        "assigned": "viendd",
        "description": "task desc"
      },
      {
        "id": 'task_12',
        "title": "Task 12 Demo",
        "status": "Review",
        "assigned": "viendd1",
        "description": "task desc"
      },
      {
        "id": 'task_13',
        "title": "Task 13 Demo",
        "status": "Review",
        "assigned": "viendd1",
        "description": "task desc"
      },
      {
        "id": 'task_14',
        "title": "Task 14 Demo",
        "status": "Review",
        "assigned": "viendd1",
        "description": "task desc"
      },
      {
        "id": 'task_15',
        "title": "Task 15 Demo",
        "status": "Review",
        "assigned": "viendd1",
        "description": "task desc"
      }

    ],
    "Done": [
      {
        "id":'task_16',
        "title": "Task 16 Demo",
        "status": "Done",
        "assigned": "viendd",
        "description": "task desc"
      },
      {
        "id": 'task_17',
        "title": "Task 17 Demo",
        "status": "Done",
        "assigned": "viendd1",
        "description": "task desc"
      },
      {
        "id": 'task_18',
        "title": "Task 18 Demo",
        "status": "Done",
        "assigned": "viendd1",
        "description": "task desc"
      },
      {
        "id": 'task_19',
        "title": "Task 19 Demo",
        "status": "Done",
        "assigned": "viendd1",
        "description": "task desc"
      },
      {
        "id": 'task_20',
        "title": "Task 20 Demo",
        "status": "Done",
        "assigned": "viendd1",
        "description": "task desc"
      }
    ],
  }
  const [allTasks, setAllTasks] = useState(all_tasks)

  const deleteLatestIfNull = (newAllTasks) => {
    Object.keys(newAllTasks).forEach(function(key) {
      if (newAllTasks[key].length && newAllTasks[key].slice(-1)[0] && newAllTasks[key].slice(-1)[0].title === ""){
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
    let startColumn = result.source.droppableId
    let endColumn = result.destination.droppableId

    let startPosition = parseInt(result.source.index) -1
    console.log('start position', startPosition)
    let endPosition = parseInt(result.destination.index) - 1
    console.log('end position', endPosition)

    let newAllTasks = {...allTasks};
    let cardStart = newAllTasks[startColumn][startPosition]
    // let cardEnd = newAllTasks[endColumn][endPosition]
    delete newAllTasks[startColumn][startPosition]
    if (startColumn === endColumn){
      // modify
      if (startPosition < endPosition) {
        for (let i = startPosition + 1; i < endPosition; i ++){
          newAllTasks[i - 1] = newAllTasks[i]
          delete newAllTasks[i];
        }
      }else{
        //đúng
        for (let i = endPosition; i < startPosition; i ++){
          newAllTasks[i + 1] = newAllTasks[i]
          delete newAllTasks[i];
        }
      }
      newAllTasks[endColumn][endPosition] = cardStart
    }else{
      newAllTasks[endColumn].splice(endPosition, 0, cardStart);
    }
    setAllTasks(newAllTasks)
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

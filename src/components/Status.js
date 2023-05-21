import Task from "./Task";
import '../styles/status.css';
import { Plus } from "@styled-icons/bootstrap/Plus";
import {useState} from "react";
import {Droppable} from "react-beautiful-dnd";

function Status(props){
    let {status, tasks, onAddTask, onSubmitTask, isAdding, statusSelected, onCloseNewTask, index} = props;
    index = index + 1;
    let dropId = index.toString()
    const [titleNewTask, setTitleNewTask] = useState(null);

    function handleOnSubmitTask(status){
        if (titleNewTask){
            onSubmitTask(status, {"title" : titleNewTask});
            setTitleNewTask(null)
        }
    }

    function handleCloseNewTask(status){
        setTitleNewTask(null)
        onCloseNewTask(status)
    }

    const styleButtonAddCard = {
        background: '#0C66E4',
        color: 'white',
        width: '80px',
        height: '32px',
        borderRadius: '3px',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center'
    }

    const styleButtonCloseNewTask = {
        marginLeft: '10px',
        padding: '5px',
        fontSize: '20px',
        cursor: 'pointer'
    }


    const getListStyle = isDraggingOver => ({
    });

    return (
        <div className={'status ' + status}>
            <div className="title-status">{status}</div>
            <div className="cards-by-status">
                <Droppable key={dropId} index={index} droppableId={status}>
                    {(provided,snapshot) =>
                        (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={getListStyle(snapshot.isDraggingOver)}
                            >
                                {
                                    tasks && tasks.map((task, index) => {
                                        return (
                                            <Task key={index} data={task} index={index} status={status} handleOnSubmitTask={handleOnSubmitTask} setTitleNewTask={setTitleNewTask}></Task>
                                        )
                                    })
                                }
                                {provided.placeholder}
                            </div>
                        )
                    }
                </Droppable>
            </div>

            <div className="action__create-task">
                {
                    (isAdding && statusSelected === status) ?
                        (
                            <div className="submit-card" style={{display: "flex"}}>
                                <div onClick={() => handleOnSubmitTask(status)} style={styleButtonAddCard}>
                                    <span>Add card</span>
                                </div>
                                <span onClick={() => {handleCloseNewTask(status)}} style={styleButtonCloseNewTask}>X</span>
                            </div>
                        )
                        :
                        (<div onClick={() => onAddTask(status)} className="add-card">
                            <Plus size={28} />
                            <span>Add a card</span>
                        </div>)
                }
            </div>

        </div>
    )
}

export default Status;
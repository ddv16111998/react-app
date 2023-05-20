import Task from "./Task";
import '../styles/status.css';
import { Plus } from "@styled-icons/bootstrap/Plus";
import {useState} from "react";

function Status(props){
    let {status, tasks, onAddTask, onSubmitTask, isAdding, statusSelected, onCloseNewTask} = props;
    const [titleNewTask, setTitleNewTask] = useState(null);

    function handleOnSubmitTask(status){
        if (titleNewTask){
            onSubmitTask(status, {"title" : titleNewTask});
            setTitleNewTask(null)
        }
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
    return (
        <div className={'status ' + status}>
            <div className="title-status">{status}</div>
            <div className="cards-by-status">
            {
                tasks && tasks.map((task, index) => {
                    return (
                        <Task data={task} key={index} status={status} handleOnSubmitTask={handleOnSubmitTask} setTitleNewTask={setTitleNewTask}></Task>
                    )
                })
            }
            </div>

            <div className="action__create-task" onClick={ () => { (isAdding && statusSelected === status) ? handleOnSubmitTask(status) : onAddTask(status)} }>
                {
                    (isAdding && statusSelected === status) ?
                        (
                            <div style={{display: "flex"}}>
                                <div style={styleButtonAddCard}>
                                    <span>Add card</span>
                                </div>
                                <span onClick={() => {onCloseNewTask(status)}} style={styleButtonCloseNewTask}>X</span>
                            </div>
                        )
                        :
                        (<div>
                            <Plus size={28} />
                            <span>Add a card</span>
                        </div>)
                }
            </div>

        </div>
    )
}

export default Status;
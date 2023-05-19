import Task from "./Task";
import '../styles/status.css';
import { Plus } from "@styled-icons/bootstrap/Plus";

function Status(props){
    let {status, tasks, onAddTask} = props;

    return (
        <div className={'status ' + status}>
            <div className="title-status">{status}</div>
            <div className="cards-by-status">
            {
                tasks && tasks.map((task, index) => {
                    return (
                        <Task data={task} key={index} status={status}></Task>
                    )
                })
            }
            </div>

            <div className="action__create-task" onClick={ () => {onAddTask(status)} }>
                <Plus size={28} />
                <span>
                    Add a card
                </span>
            </div>
        </div>
    )
}

export default Status;
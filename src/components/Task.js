import '../styles/task.css';
import {Eye} from "@styled-icons/bootstrap/Eye";
import {CommentX} from "@styled-icons/boxicons-regular/CommentX"
import {Attachment} from "@styled-icons/entypo/Attachment"
function Task(props){
    let {data, status, setTitleNewTask, handleOnSubmitTask} = props;
    const onChangeTitleNewTask = (e) => {
        setTitleNewTask(e.target.value)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setTitleNewTask(event.target.value)
            handleOnSubmitTask(status)
        }
    }

    return (
        <div className="task-body">
            <div className={'task task_' + status}>
                {
                    data.title ?
                        <span>{data.title}</span> :
                        <input type="text" autoFocus={true} placeholder="Enter a title for this card..." className="input-title-new-task" onKeyDown={handleKeyDown} onChange={onChangeTitleNewTask}/>
                }
                {
                    data.title && <div className="actions">
                        <Eye size={15} />
                        <CommentX size={15} />
                        <Attachment size={15} />
                    </div>
                }

            </div>
        </div>
    )
}

export default Task;
import '../styles/task.css';
import {Eye} from "@styled-icons/bootstrap/Eye";
import {CommentX} from "@styled-icons/boxicons-regular/CommentX"
import {Attachment} from "@styled-icons/entypo/Attachment"
import {Draggable} from "react-beautiful-dnd";
function Task(props){
    let {data, status, setTitleNewTask, handleOnSubmitTask, index} = props;
    index = index + 1;
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
                <Draggable key={data.id} index={index} draggableId={data.id}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                           <div className="able-drag">
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
                    )}

                </Draggable>
            </div>
        </div>
    )
}

export default Task;
import '../styles/task.css';
import {Eye} from "@styled-icons/bootstrap/Eye";
import {CommentX} from "@styled-icons/boxicons-regular/CommentX"
import {Attachment} from "@styled-icons/entypo/Attachment"
function Task(props){
    let {data, status} = props;
    return (
        <div className="task-body">
            <div className={'task task_' + status}>
                <span>{data.title}</span>
                <div className="actions">
                    <Eye size={15} />
                    <CommentX size={15} />
                    <Attachment size={15} />
                </div>
            </div>
        </div>
    )
}

export default Task;
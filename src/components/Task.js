import '../styles/task.css';
function Task(props){
    let {data, status} = props;
    return (
        <div className="task-body">
            <div className={'task task_' + status}>{data.title}</div>
        </div>
    )
}

export default Task;
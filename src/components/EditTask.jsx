import TaskForm from './TaskForm';
import { useTask } from './TaskContext';

const EditTask = ({ task, setEdit }) => {
    const {updateTask} = useTask();

    const editData = {...task};

    const handleUpdate = (data) => {
        updateTask(data.id, data);
        task.title = data.title; // 状態更新の即時反映
        task.description = data.description; // 状態更新の即時反映
        setEdit(false);
    };

    const handleClose = () => {
        setEdit(false);
    }

    return (
        <>
            {/* フォーム */}
            <TaskForm
                onClose={handleClose}
                onSubmit={handleUpdate}
                initialData={editData}
            />
        </>
    )
}

export default EditTask;
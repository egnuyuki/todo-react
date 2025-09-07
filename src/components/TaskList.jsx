import TaskItem from './TaskItem';
import { useTask } from './TaskContext';

const TaskList = ({ tasks, searchQuery, setSelectedTask, setIsModalOpen, setDeleteConfirm}) => {

    // const {tasks} = useTask();

    const onSelect = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    }

    const onDelete = (task) => {
        setDeleteConfirm(task);
    }

    return (
        <div className="mx-4 space-y-2 pb-24">
            {tasks.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                    {searchQuery ? '該当するタスクが見つかりません' : 'タスクがありません'}
                </div>
            ) : (
                tasks.map(task => (
                    <TaskItem
                        onSelect={onSelect}
                        onDelete={onDelete}
                        key={task.id}
                        task={task}
                    />
                ))
            )}
        </div>
    );
};

export default TaskList;
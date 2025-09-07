import { useState } from "react";
import { X } from "lucide-react";
import { useTask } from "./TaskContext";
import TaskForm from "./TaskForm";

// タスク追加モーダル

const AddTask = ({ onClose }) => {
    const [newTask, setNewTask] = useState({ title: '', description: '' });

    const {addTask} = useTask();
    const handleAdd = (task) => {
        addTask(task);
        handleClose();
    };

    const handleClose = () => {
        setNewTask({ title: '', description: '' });
        onClose();
    }

    return (
        <>
            {/* ヘッダー */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">新しいタスク</h2>
                <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* フォーム */}
            <TaskForm
                onClose={handleClose}
                onSubmit={handleAdd}
                initialData={newTask}
            />
        </>
    );
};

export default AddTask;

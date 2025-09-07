import { useState, useMemo } from 'react';
import TaskList from "./TaskList";
import AddBtn from "./AddBtn";
import Modal from './Modal';
import DeleteConfirmModal from './DeleteConfirmModal';
import { useTask } from './TaskContext';
import Stats from './TaskStats';
import SearchBar from './SearchBar';

const TaskContainer = () => {
    const [selectedTask, setSelectedTask] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const { deleteTask, tasks } = useTask();

    // フィルタリング処理
    const filteredTasks = useMemo(() => {
        return tasks.filter(task =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [tasks, searchQuery]);


    return (
        <>
            <div className="max-w-md mx-auto">
                {/* 統計情報 */}
                <Stats />

                {/* 検索バー */}
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                
                {/* タスクリスト */}
                <TaskList
                    tasks={filteredTasks}
                    searchQuery={searchQuery}
                    setSelectedTask={setSelectedTask}
                    setIsAddingTask={setIsAddingTask}
                    setIsModalOpen={setIsModalOpen}
                    setDeleteConfirm={setDeleteConfirm}
                />
            </div>

            {/* 固定タスク追加ボタン */}
            <AddBtn
                setSelectedTask={setSelectedTask}
                setIsAddingTask={setIsAddingTask}
                setIsModalOpen={setIsModalOpen}
            />

            {/* モーダル */}
            {isModalOpen &&
                <Modal
                    isOpen={isModalOpen}
                    isAdd={isAddingTask}
                    selectedTask={selectedTask}
                    setIsAddingTask={setIsAddingTask}
                    setIsModalOpen={setIsModalOpen}
                    setDeleteConfirm={setDeleteConfirm}
                    setSelectedTask={setSelectedTask}
                />
            }

            {/* 削除確認モーダル */}
            {deleteConfirm && (
                <DeleteConfirmModal
                    task={deleteConfirm}
                    onConfirm={() => {
                        deleteTask(deleteConfirm.id)
                        setDeleteConfirm(null);
                    }}
                    onCancel={() => setDeleteConfirm(null)}
                />
            )}
        </>
    )
}

export default TaskContainer
import AddTask from "./AddTask";
import TaskModal from "./TaskModal";

const Modal = ({ isOpen, isAdd, setIsAddingTask, setIsModalOpen, selectedTask, setSelectedTask, setDeleteConfirm }) => {

    // モーダル閉じる
    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setIsAddingTask(false);
            setSelectedTask(null);
        }, 300);
    };

    return (
        <>
            {/* オーバーレイ */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${isOpen ? 'opacity-50' : 'opacity-0'}`}
                onClick={closeModal}
            />
            {/* モーダル */}
            <div
                className={`max-h-9/10 fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl transform transition-transform duration-300 max-w-md mx-auto z-50 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
            >
                <div className="p-6">
                    {/* モーダルハンドル */}
                    <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
                    {isAdd ? (
                        <AddTask
                            onClose={closeModal}
                        />
                    ) : selectedTask ? (
                        <TaskModal
                            task={selectedTask}
                            onClose={closeModal}
                            onDelete={setDeleteConfirm}
                        />
                    ) : (
                        <div>aaa</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Modal
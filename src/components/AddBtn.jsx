import { Plus } from "lucide-react";

const AddBtn = ({ setSelectedTask, setIsAddingTask, setIsModalOpen}) => {
    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
            <button
                onClick={() => {
                    setSelectedTask(null);
                    setIsAddingTask(true);
                    setIsModalOpen(true);
                }}
                className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors flex gap-3 items-center justify-center"
            >
                <Plus className="w-6 h-6" />
                タスクを追加
            </button>
        </div>
    )
}

export default AddBtn;
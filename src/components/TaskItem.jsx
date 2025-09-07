import { Check, Trash2, Calendar } from 'lucide-react';
import { formatDate } from '../utils/formatDate';
import { useTask } from './TaskContext';


// タスクアイテムコンポーネント
const TaskItem = ({ task, onSelect, onDelete }) => {
  
  const {deleteTask, taskComplete} = useTask();

  // タスク完了切り替え
  const onToggle = () => {
    taskComplete(task.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-start gap-3">
        <button
          onClick={onToggle}
          className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${task.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-500'
            }`}
        >
          {task.completed && <Check className="w-3 h-3" />}
        </button>

        <div className="flex-1 cursor-pointer" onClick={() => onSelect(task)}>
          <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
            {task.title}
          </h3>
          <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
            <Calendar className="w-3 h-3" />
            {formatDate(task.createdAt, 'YYYY/MM/DD HH:mm')}
          </div>
        </div>

        <button
          onClick={() => onDelete(task)}
          className="text-gray-400 hover:text-red-500 transition-colors p-1"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
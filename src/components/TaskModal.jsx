import React, { useState } from 'react';
import { Edit3, X } from 'lucide-react';
import EditTask from './EditTask';
import { useTask } from './TaskContext';
import { formatDate } from '../utils/formatDate';

// モーダルコンポーネント
const TaskModal = ({ task, onClose, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { updateTask } = useTask();

  const handleDelete = (task) => {
    onClose();
    onDelete(task);
  };

  const handleUpdate = (id, updatedData) => {
    updateTask(id, updatedData);
    setIsEditing(false);
    task.completed = updatedData.completed; // 状態更新の即時反映
  };

  return (
    <>
      {/* ヘッダー */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">タスク詳細</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-gray-500 hover:text-blue-500 transition-colors"
          >
            <Edit3 className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* コンテンツ */}
      {isEditing ? (
        <EditTask task={task} setEdit={setIsEditing} />
      ) : (
        <div className="space-y-4">
          <div className='flex flex-col gap-4 max-h-50'>
            <h3 className="text-lg font-medium text-gray-800 mb-2">{task.title}</h3>
            <di className="text-gray-700 overflow-y-scroll">
              {task.description && (
                <p className="text-gray-600 whitespace-pre-wrap">{task.description}</p>
              )}
            </di>
          </div>

          <div className="border-t pt-4 space-y-2 text-sm text-gray-500">
            <div className="flex justify-between">
              <span>作成日時:</span>
              <span>{formatDate(task.createdAt, 'YYYY/MM/DD HH:mm')}</span>
            </div>
            <div className="flex justify-between">
              <span>更新日時:</span>
              <span>{formatDate(task.updatedAt, 'YYYY/MM/DD HH:mm')}</span>
            </div>
            <div className="flex justify-between">
              <span>状態:</span>
              <span className={task.completed ? 'text-green-600' : 'text-orange-600'}>
                {task.completed ? '完了' : '未完了'}
              </span>
            </div>
          </div>

          <div className="pt-4 space-y-3">
            <button
              onClick={() => handleUpdate(task.id, { completed: !task.completed })}
              className={`w-full py-3 px-4 rounded-lg transition-colors ${task.completed
                ? 'bg-orange-500 text-white hover:bg-orange-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {task.completed ? '未完了に戻す' : '完了にする'}
            </button>

            <button
              onClick={() => handleDelete(task)}
              className="w-full py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              削除
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskModal
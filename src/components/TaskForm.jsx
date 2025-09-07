import React, { useState } from 'react';

const TaskForm = ({ onClose, onSubmit, initialData = {} }) => {

    const [formData, setFormData] = useState({
        id: initialData.id || null,
        title: initialData.title || '',
        description: initialData.description || ''
    });

    const handleSubmit = () => {
        if (!formData.title.trim()) return;
        console.log(formData);
        onSubmit(formData);
    }

    const handleCancel = () => {
        onClose();
    }

    return (
        <div className="space-y-4">
            <input
                type="text"
                placeholder="タスクタイトル"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
                placeholder="説明（任意）"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={4}
            />
            <div className="flex gap-3">
                <button
                    onClick={handleSubmit}
                    disabled={!formData.title.trim()}
                    className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    追加
                </button>
                <button
                    onClick={() => handleCancel()}
                    className="px-6 py-3 text-gray-500 hover:text-gray-700 transition-colors"
                >
                    キャンセル
                </button>
            </div>
        </div>
    );
}

export default TaskForm;
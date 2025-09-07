import { Trash2 } from "lucide-react";

// 削除確認モーダル
const DeleteConfirmModal = ({ task, onConfirm, onCancel }) => {
    return (
        <>
            {/* オーバーレイ */}
            <div className="fixed inset-0 bg-black opacity-50" onClick={onCancel} />

            {/* モーダル */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl w-10/12 mx-auto p-6">
                <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                        <Trash2 className="w-6 h-6 text-red-600" />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2">タスクを削除</h3>
                    <p className="text-gray-600 mb-6">
                        「{task.title}」を削除しますか？<br />
                        この操作は取り消せません。
                    </p>

                    <div className="flex gap-3">
                        <button
                            onClick={onCancel}
                            className="flex-1 py-3 px-4 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            キャンセル
                        </button>
                        <button
                            onClick={onConfirm}
                            className="flex-1 bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors"
                        >
                            削除
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteConfirmModal
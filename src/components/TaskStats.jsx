import { useTask } from "./TaskContext";

const Stats = ({}) => {

  // 統計情報
  const {tasks} = useTask();
  const stats = {
    total: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    pending: tasks.filter(task => !task.completed).length
  };


  return (
    <div className="bg-white m-4 p-4 rounded-lg shadow-sm">
        <div className="flex justify-between text-sm text-gray-600">
        <span>全て: {stats.total}</span>
        <span>完了: {stats.completed}</span>
        <span>未完了: {stats.pending}</span>
        </div>
    </div>
  );
}

export default Stats;
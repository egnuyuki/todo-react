import Header from './components/Header';
import { TaskProvider } from './components/TaskContext';
import TaskContainer from './components/TaskContainer';

const TodoApp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <Header />
      <TaskProvider>
        <TaskContainer/>
      </TaskProvider>
    </div>
  );
};

export default TodoApp;
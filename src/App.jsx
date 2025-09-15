import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './components/TaskContext';
import TaskContainer from './components/TaskContainer';
import Calendar from './components/Calendar';

const TodoApp = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* ヘッダー */}
        <Header />
        <TaskProvider>
          <Routes>
            <Route path="/" element={<TaskContainer />} />
            <Route path='/calendar' element={<Calendar/>}/>
          </Routes>
          {/* <TaskContainer/> */}
        </TaskProvider>
      </div>
    </Router>
  );
};

export default TodoApp;
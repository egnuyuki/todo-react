import { createContext, useContext, useState, useEffect, useCallback } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const generateId = useCallback(() => Date.now().toString() + Math.random().toString(36), []);

  const addTask = useCallback((task) => {
    const newTask = {
      ...task,
      id: generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      completed: false,
    };
    setTasks(prev => [newTask, ...prev]);
  }, [generateId]);


  const updateTask = useCallback((id, updatedData) => {
    setTasks(prev => prev.map(task =>
      task.id === id
        ? { ...task, ...updatedData, updatedAt: new Date() }
        : task
    ));
  }, []);

  // タスク削除
  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  // タスク完了切り替え
  const taskComplete = useCallback((id) => {
    setTasks(prev => prev.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed, updatedAt: new Date() }
        : task
    ));
  }, [])

  // ローカルストレージからデータを読み込み
  useEffect(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks);
        setTasks(parsedTasks.map(task => ({
          ...task,
          createdAt: new Date(task.createdAt),
          updatedAt: new Date(task.updatedAt)
        })));
      } catch (error) {
        console.error('Error loading tasks from localStorage:', error);
      }
    }
  }, []);

  // ローカルストレージにデータを保存
  useEffect(() => {
    if (tasks.length === 0) {
      localStorage.removeItem('todoTasks');
      return;
    } else if (tasks.length > 0) {
      localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <TaskContext.Provider value={{
      tasks,
      addTask,
      generateId,
      taskComplete,
      updateTask,
      deleteTask
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
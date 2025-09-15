import { useState, useEffect, useMemo } from 'react';
import { Calendar } from 'lucide-react';
import { formatDate } from '../utils/formatDate';

const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const Today = useMemo(() => {
    return formatDate(currentDate, 'M月D日(dd)')
  }, [currentDate]);

  return (
    <header className="bg-white shadow-sm border-b p-4 flex flex-row gap-5 sm:flex-row items-center justify-between">
        <div className="flex items-center sm:mb-0">
            <h1 className="text-2xl font-bold text-gray-800 text-center">ToDo App</h1>
            <nav>
                <ul className="flex space-x-4 ml-6 text-sm">
                    <li>
                        <a href="/" className="text-gray-600 hover:text-gray-800">ホーム</a>
                    </li>
                    <li>
                        <a href="/calendar" className="text-gray-600 hover:text-gray-800">カレンダー</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="flex items-center sm:mb-0">
            <Calendar className="mr-2 text-gray-500"/>
            <div className="text-gray-500">{Today}</div>
        </div>
    </header>
  );
}

export default Header;
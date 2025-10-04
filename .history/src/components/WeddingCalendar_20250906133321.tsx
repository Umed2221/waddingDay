import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const WeddingCalendar = () => {
  // Дата свадьбы - 14 октября 2025
  const weddingDate = new Date(2025, 9, 14);
  const currentMonth = weddingDate.getMonth();
  const currentYear = weddingDate.getFullYear();
  const weddingDay = weddingDate.getDate();

  // Настройки календаря
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const startingDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  const renderCalendarDays = () => {
    const days = [];
    
    // Пустые клетки до начала месяца
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    // Дни месяца
    for (let day = 1; day <= daysInMonth; day++) {
      const isWeddingDay = day === weddingDay;
      
      days.push(
        <div
          key={day}
          className={`h-10 w-10 flex items-center justify-center rounded-lg transition-all duration-200 ${
            isWeddingDay
              ? 'bg-gradient-to-br from-burgundy-600 to-burgundy-700 text-white shadow-lg transform scale-105 border-2 border-burgundy-300'
              : 'text-burgundy-700 hover:bg-burgundy-50'
          }`}
        >
          <span className={`font-medium ${isWeddingDay ? 'text-sm' : 'text-sm'}`}>
            {day}
          </span>
          {isWeddingDay && (
            <>
              <Heart className="absolute -top-1 -right-1 w-3 h-3 text-burgundy-200 animate-pulse" />
              <Sparkles className="absolute -bottom-1 -left-1 w-3 h-3 text-amber-200 animate-bounce" />
            </>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-burgundy-200 max-w-md mx-auto">
      <div className="text-center mb-4">
        <div className="flex items-center justify-center mb-2">
          <Sparkles className="w-5 h-5 text-amber-500 mr-2" />
          <h3 className="text-xl font-dancing text-burgundy-800">Календарь свадьбы</h3>
          <Sparkles className="w-5 h-5 text-amber-500 ml-2" />
        </div>
        <h4 className="text-lg text-burgundy-700 font-cormorant font-medium">
          {monthNames[currentMonth]} {currentYear}
        </h4>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="h-8 flex items-center justify-center text-burgundy-600 font-cormorant font-medium text-sm">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 mb-4">
        {renderCalendarDays()}
      </div>

      <div className="text-center">
        <div className="inline-flex items-center bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white px-5 py-2 rounded-full shadow-lg">
          <Heart className="w-5 h-5 mr-2 animate-pulse" />
          <span className="font-cormorant font-medium">14 октября 2025</span>
          <Heart className="w-5 h-5 ml-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default WeddingCalendar;
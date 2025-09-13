import React from 'react';

const Card = ({ title, description, icon, onClick }) => {
  return (
    <div 
      className="flex items-center bg-white rounded-lg shadow-sm p-6 w-72 mx-1 my-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer active:scale-[0.98]"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      <div className="text-2xl text-indigo-600 mr-4">
        {icon}
      </div>
      <div className="text-center flex-1">
        <h3 className="text-md font-semibold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
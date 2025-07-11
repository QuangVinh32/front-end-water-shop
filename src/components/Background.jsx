import { useEffect, useState } from 'react';

export default function Background() {
  const [position, setPosition] = useState({ top: '20%', left: '20%' });
  const [message, setMessage] = useState('');
  const messages = [
    "Xin chào, tôi là AI 🍃",
    "Bạn cần hỗ trợ gì không?",
    "Hôm nay bạn muốn uống gì?",
    "Gợi ý đồ uống siêu ngon nè!",
    "Hãy thư giãn và tận hưởng 🌈"
  ];

  // Di chuyển và đổi tin nhắn mỗi vài giây
  useEffect(() => {
    const interval = setInterval(() => {
      const newTop = Math.random() * 80 + '%';
      const newLeft = Math.random() * 80 + '%';
      const newMessage = messages[Math.floor(Math.random() * messages.length)];

      setPosition({ top: newTop, left: newLeft });
      setMessage(newMessage);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute z-[-9999] inset-0 overflow-hidden">
      {/* Gradient background */}
      <div className="w-full h-full bg-gradient-to-br from-white via-green-300 to-blue-300"></div>

      {/* Trợ lý AI mini di chuyển */}
      <div
        className="absolute transition-all duration-1000 ease-in-out "
        style={{
          top: position.top,
          left: position.left,
          width: 'auto',
          height: 'auto',
        }}
      >
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-xl px-4 py-2 rounded-full border border-white ">
          {/* Icon Bot */}
          <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white text-lg shadow z-[100]">
            🤖
          </div>

          {/* Bong bóng lời thoại */}
          <div className="text-sm text-gray-800 font-medium animate-fadeIn">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}

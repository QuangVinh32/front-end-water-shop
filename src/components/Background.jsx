import { useEffect, useState, useRef } from "react";

export default function Background() {
  const [position, setPosition] = useState({ top: "20%", left: "20%" });
  const [message, setMessage] = useState("");
  const [expression, setExpression] = useState("🤖");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const botRef = useRef(null);
  
  const messages = [
    "Xin chào, tôi là Robot Bot 🤖",
    "Bạn cần hỗ trợ gì không?",
    "Hôm nay bạn muốn uống gì?",
    "Gợi ý đồ uống siêu ngon nè!",
    "Hãy thư giãn và tận hưởng 🌈",
    "Mình có thể giúp gì cho bạn?",
    "Chúc bạn một ngày tốt lành! ☀️",
    "Đừng quên uống đủ nước nhé 💧",
    "Bạn có muốn nghe một câu đố vui?",
    "Cùng khám phá menu mới nào! 🍹"
  ];
  
  const expressions = {
    default: "🤖",
    happy: "😊",
    excited: "🤩",
    thinking: "🤔",
    surprised: "😲",
    idea: "💡",
    love: "🥰",
    cool: "😎"
  };

  // Tạo hiệu ứng nền động
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-9999';
    document.body.appendChild(canvas);
    
    const particles = [];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 2,
        color: `rgba(${Math.floor(Math.random() * 100 + 155)}, 
                ${Math.floor(Math.random() * 200 + 55)}, 
                ${Math.floor(Math.random() * 100 + 155)}, 
                ${Math.random() * 0.4 + 0.1})`,
        speed: Math.random() * 0.5 + 0.1,
        angle: Math.random() * Math.PI * 2
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Gradient nền
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.5, 'rgba(200, 255, 200, 0.5)');
      gradient.addColorStop(1, 'rgba(173, 216, 230, 0.7)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Vẽ các hạt
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Di chuyển hạt
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;
        
        // Xử lý va chạm với cạnh
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.angle = Math.PI - particle.angle;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.angle = -particle.angle;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      document.body.removeChild(canvas);
    };
  }, []);

  // Di chuyển bot ngẫu nhiên
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      const newTop = Math.random() * 70 + 10 + "%";
      const newLeft = Math.random() * 70 + 10 + "%";
      
      // Thay đổi biểu cảm khi di chuyển
      const moveExpressions = ["🤖", "😊", "🤔", "😎"];
      const randomExpression = moveExpressions[Math.floor(Math.random() * moveExpressions.length)];
      setExpression(randomExpression);
      
      setPosition({ top: newTop, left: newLeft });
      
      // Nói một tin nhắn ngẫu nhiên
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setIsSpeaking(true);
      setMessage(randomMessage);
      
      // Reset trạng thái nói sau 3 giây
      setTimeout(() => {
        setIsSpeaking(false);
        setExpression(expressions.default);
      }, 3000);
      
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  // Xử lý click vào bot
  const handleBotClick = () => {
    // Tạm dừng di chuyển
    setIsPaused(!isPaused);
    
    // Hiệu ứng khi click
    if (botRef.current) {
      botRef.current.style.transform = 'scale(0.95)';
      setTimeout(() => {
        if (botRef.current) botRef.current.style.transform = 'scale(1)';
      }, 200);
    }
    
    // Biểu cảm khi click
    setExpression(isPaused ? expressions.happy : expressions.thinking);
    
    // Tin nhắn khi click
    if (isPaused) {
      setMessage("Yay, mình được di chuyển lại rồi! 🎉");
    } else {
      setMessage("Mình sẽ ở đây một lát... 😊");
    }
    
    setIsSpeaking(true);
    setTimeout(() => setIsSpeaking(false), 3000);
  };

  return (
    <>
      {/* Bot nổi lên trên tất cả */}
      <div
        ref={botRef}
        className="fixed transition-all duration-1000 ease-in-out z-[9999] cursor-pointer"
        style={{ 
          top: position.top, 
          left: position.left,
          transform: 'scale(1)',
          transition: 'top 1.5s cubic-bezier(0.25, 0.1, 0.25, 1), left 1.5s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.2s ease'
        }}
        onClick={handleBotClick}
      >
        {/* <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm shadow-xl px-4 py-2 rounded-full border-2 border-white relative">
          <div className="relative w-14 h-14 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center text-2xl shadow-inner">
            {expression}
            <div className={`absolute top-[30%] left-[25%] w-2 h-2 bg-black rounded-full ${isSpeaking ? 'animate-ping' : ''}`} />
            <div className={`absolute top-[30%] right-[25%] w-2 h-2 bg-black rounded-full ${isSpeaking ? 'animate-ping' : ''}`} />
            
            {isPaused && (
              <div className="absolute -bottom-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2 py-1 animate-pulse">
                ⏸️
              </div>
            )}
          </div>

          <div className="relative text-sm text-gray-800 font-medium animate-fadeIn bg-white rounded-lg py-2 px-3 shadow-md max-w-xs">
            {message}
            <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
          </div>
        </div> */}
      </div>
      
      {/* Chỉ dẫn cho người dùng */}
      {/* <div className="fixed bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-2 rounded-lg z-[9999]">
        👆 Click vào bot để tương tác!
      </div> */}
    </>
  );
}
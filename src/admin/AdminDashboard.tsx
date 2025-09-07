import React, { useState, useEffect } from "react";
import { 
  FiHome, FiUsers, FiShoppingCart, FiPieChart, 
  FiSettings, FiBell, FiMenu, FiX, FiLogOut,
  FiDollarSign, FiPackage, FiTrendingUp, FiActivity
} from "react-icons/fi";

import { getUserInfo, removeUserInfo } from "../helpers/Common";
import { useNavigate } from "react-router-dom";

// Định nghĩa interface cho Notification
interface Notification {
  id: number;
  message: string;
  time: string;
  read: boolean;
}

// Định nghĩa interface cho Stats
interface Stats {
  totalSales: number;
  totalOrders: number;
  totalCustomers: number;
  totalRevenue: number;
}

// Định nghĩa props cho các component
interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  onClick: () => void;
  sidebarOpen: boolean;
}

interface NotificationBellProps {
  notifications: Notification[];
  onMarkAsRead: (id: number) => void;
}

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

interface DashboardPageProps {
  stats: Stats;
}

const AdminDashboard = () => {
   const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalSales: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalRevenue: 0,
  });
  const [user, setUser] = useState<any>(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Lấy thông tin user từ localStorage
    const u = getUserInfo();
    setUser(u);

    // Mock stats
    setStats({
      totalSales: 1245,
      totalOrders: 324,
      totalCustomers: 128,
      totalRevenue: 45892,
    });

    // Mock notifications
    setNotifications([
      { id: 1, message: "Đơn hàng mới #1234", time: "10 phút trước", read: false },
      { id: 2, message: "Người dùng mới đăng ký", time: "1 giờ trước", read: false },
      { id: 3, message: "Sản phẩm sắp hết hàng", time: "2 giờ trước", read: true },
    ]);
  }, []);

  const handleLogout = () => {
    removeUserInfo();
    setUser(null);
    navigate("/auth");
  };

  const markNotificationAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? {...notif, read: true} : notif
    ));
  };

  const renderPageContent = () => {
    switch(activePage) {
      case "dashboard":
        return <DashboardPage stats={stats} />;
      case "users":
        return <UsersPage />;
      case "products":
        return <ProductsPage />;
      case "orders":
        return <OrdersPage />;
      case "analytics":
        return <AnalyticsPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <DashboardPage stats={stats} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-blue-800 text-white transition-all duration-300 relative`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-xl font-bold">Admin Panel</h1>}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-full hover:bg-blue-700"
          >
            {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
        
        <nav className="mt-6">
          <NavItem 
            icon={<FiHome size={20} />} 
            text="Dashboard" 
            active={activePage === "dashboard"}
            onClick={() => setActivePage("dashboard")}
            sidebarOpen={sidebarOpen}
          />
          <NavItem 
            icon={<FiUsers size={20} />} 
            text="Người dùng" 
            active={activePage === "users"}
            onClick={() => setActivePage("users")}
            sidebarOpen={sidebarOpen}
          />
          <NavItem 
            icon={<FiPackage size={20} />} 
            text="Sản phẩm" 
            active={activePage === "products"}
            onClick={() => setActivePage("products")}
            sidebarOpen={sidebarOpen}
          />
          <NavItem 
            icon={<FiShoppingCart size={20} />} 
            text="Đơn hàng" 
            active={activePage === "orders"}
            onClick={() => setActivePage("orders")}
            sidebarOpen={sidebarOpen}
          />
          <NavItem 
            icon={<FiTrendingUp size={20} />} 
            text="Phân tích" 
            active={activePage === "analytics"}
            onClick={() => setActivePage("analytics")}
            sidebarOpen={sidebarOpen}
          />
          <NavItem 
            icon={<FiSettings size={20} />} 
            text="Cài đặt" 
            active={activePage === "settings"}
            onClick={() => setActivePage("settings")}
            sidebarOpen={sidebarOpen}
          />
        </nav>
        
        <div className="absolute bottom-0 w-full p-4">
          <button className="flex items-center w-full p-2 text-white rounded-lg hover:bg-blue-700">
            <FiLogOut size={20} />
            {sidebarOpen && <span className="ml-3">Đăng xuất</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl font-semibold text-gray-800 capitalize">
              {activePage === "dashboard" ? "Tổng quan" : 
               activePage === "users" ? "Quản lý người dùng" :
               activePage === "products" ? "Quản lý sản phẩm" :
               activePage === "orders" ? "Quản lý đơn hàng" :
               activePage === "analytics" ? "Phân tích & Báo cáo" :
               "Cài đặt hệ thống"}
            </h2>
            
            <div className="flex items-center space-x-4">
              <NotificationBell 
                notifications={notifications} 
                onMarkAsRead={markNotificationAsRead}
              />
 {user ? (
                <div className="flex items-center">
                  <img
                    src={user.image || "https://eric.edu.vn/upload/2025/03/meo-okkk-1-2.webp"}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border"
                  />
                  <div className="ml-2">
                    <p className="text-sm font-medium">{user.fullName || user.username}</p>
                    <p className="text-xs text-gray-500">{user.role || "Người dùng"}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="guest"
                    className="w-10 h-10 rounded-full border"
                  />
                  <div className="ml-2">
                    <p className="text-sm font-medium">Khách</p>
                    <p className="text-xs text-gray-500">Chưa đăng nhập</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4">
          {renderPageContent()}
        </main>
      </div>
    </div>
  );
};

// Navigation Item Component
const NavItem: React.FC<NavItemProps> = ({ icon, text, active, onClick, sidebarOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full p-3 mt-2 rounded-lg ${active ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
    >
      {icon}
      {sidebarOpen && <span className="ml-3">{text}</span>}
    </button>
  );
};

// Notification Bell Component
const NotificationBell: React.FC<NotificationBellProps> = ({ notifications, onMarkAsRead }) => {
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <button 
        className="p-2 rounded-full hover:bg-gray-100 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiBell size={20} />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-10">
          <div className="p-3 border-b">
            <h3 className="font-semibold">Thông báo</h3>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="p-3 text-center text-gray-500">Không có thông báo</p>
            ) : (
              notifications.map(notif => (
                <div 
                  key={notif.id} 
                  className={`p-3 border-b hover:bg-gray-50 cursor-pointer ${!notif.read ? 'bg-blue-50' : ''}`}
                  onClick={() => onMarkAsRead(notif.id)}
                >
                  <p className="text-sm">{notif.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                </div>
              ))
            )}
          </div>
          <div className="p-2 border-t text-center">
            <button className="text-sm text-blue-600 hover:underline">
              Xem tất cả
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Dashboard Page Component
const DashboardPage: React.FC<DashboardPageProps> = ({ stats }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="Tổng doanh thu" 
          value={`${stats.totalRevenue.toLocaleString()}đ`} 
          icon={<FiDollarSign size={24} />}
          color="bg-blue-500"
        />
        <StatCard 
          title="Đơn hàng" 
          value={stats.totalOrders} 
          icon={<FiShoppingCart size={24} />}
          color="bg-green-500"
        />
        <StatCard 
          title="Khách hàng" 
          value={stats.totalCustomers} 
          icon={<FiUsers size={24} />}
          color="bg-purple-500"
        />
        <StatCard 
          title="Sản phẩm đã bán" 
          value={stats.totalSales} 
          icon={<FiPackage size={24} />}
          color="bg-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Doanh thu theo tháng</h3>
          <div className="h-64 flex items-end justify-between p-4">
            {[40, 60, 75, 55, 80, 65, 90].map((height, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="bg-blue-500 w-8 rounded-t-lg" 
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs mt-2">T{index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Đơn hàng gần đây</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500">
                  <th className="pb-2">Mã đơn</th>
                  <th className="pb-2">Khách hàng</th>
                  <th className="pb-2">Số tiền</th>
                  <th className="pb-2">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "#1234", customer: "Nguyễn Văn A", amount: "500.000đ", status: "Thành công" },
                  { id: "#1235", customer: "Trần Thị B", amount: "750.000đ", status: "Đang xử lý" },
                  { id: "#1236", customer: "Lê Văn C", amount: "1.200.000đ", status: "Thành công" },
                  { id: "#1237", customer: "Phạm Thị D", amount: "300.000đ", status: "Hủy bỏ" }
                ].map((order, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-3">{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === "Thành công" ? "bg-green-100 text-green-800" :
                        order.status === "Đang xử lý" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className={`${color} p-3 rounded-full text-white`}>
        {icon}
      </div>
    </div>
  );
};

// Placeholder Components for other pages
const UsersPage = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Quản lý người dùng</h2>
    <p>Nội dung quản lý người dùng sẽ được hiển thị ở đây.</p>
  </div>
);

const ProductsPage = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Quản lý sản phẩm</h2>
    <p>Nội dung quản lý sản phẩm sẽ được hiển thị ở đây.</p>
  </div>
);

const OrdersPage = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Quản lý đơn hàng</h2>
    <p>Nội dung quản lý đơn hàng sẽ được hiển thị ở đây.</p>
  </div>
);

const AnalyticsPage = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Phân tích và báo cáo</h2>
    <p>Nội dung phân tích và báo cáo sẽ được hiển thị ở đây.</p>
  </div>
);

const SettingsPage = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Cài đặt hệ thống</h2>
    <p>Nội dung cài đặt hệ thống sẽ được hiển thị ở đây.</p>
  </div>
);

export default AdminDashboard;
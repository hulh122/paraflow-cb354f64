import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation: FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页', icon: 'fas fa-house' },
    { path: '/discover', label: '发现', icon: 'fas fa-compass' },
    { path: '/my-music', label: '我的音乐', icon: 'fas fa-user' }
  ];

  return (
    <div className="flex flex-col">
      {/* Current Playing - Fixed at bottom above navigation */}
      <div style={{backgroundColor: 'rgba(44, 42, 49, 1)'}} className="flex items-center gap-y-3 gap-x-3 mr-6 mb-3 ml-6 pt-3 pr-3 pb-3 pl-3 rounded-lg">
        <img className="w-10 h-10 rounded-md object-cover" style={{filter: 'brightness(0.9) contrast(0.9)'}} src="https://static-dev.paraflowcontent.com/public/resource/image/90d2c76e-ec35-40ae-9fd8-74d35e0445bc.jpeg" alt="Currently playing song album cover" />
        <div style={{flexBasis: '0%'}} className="grow shrink">
          <h3 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-sm mb-1 font-medium">夜的钢琴曲</h3>
          <p style={{color: 'rgba(169, 165, 179, 1)'}} className="text-xs">石进</p>
        </div>
        <div className="flex items-center gap-y-4 gap-x-4">
          <div className="bg-transparent flex justify-center items-center w-8 h-8">
            <i className="fas fa-pause text-sm" style={{color: 'rgba(164, 147, 255, 1)'}}></i>
          </div>
          <div className="bg-transparent flex justify-center items-center w-8 h-8">
            <i className="fas fa-forward text-sm" style={{color: 'rgba(169, 165, 179, 1)'}}></i>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav style={{backgroundColor: 'rgba(26, 24, 29, 1)'}} className="flex justify-around items-center pt-6 pr-6 pb-6 pl-6">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path}
              to={item.path}
              style={{flexBasis: '0%'}} 
              className="flex flex-col grow shrink items-center gap-y-1 gap-x-1"
            >
              <div className="bg-transparent flex justify-center items-center w-6 h-6">
                <i 
                  className={`${item.icon} text-lg`} 
                  style={{color: isActive ? 'rgba(164, 147, 255, 1)' : 'rgba(106, 102, 117, 1)'}}
                ></i>
              </div>
              <span 
                style={{color: isActive ? 'rgba(164, 147, 255, 1)' : 'rgba(106, 102, 117, 1)'}} 
                className="text-xs font-medium"
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Home Indicator */}
      <div style={{backgroundColor: 'rgba(26, 24, 29, 1)'}} className="flex justify-center items-center h-[34px]">
        <div style={{backgroundColor: 'rgba(77, 73, 87, 1)'}} className="w-[134px] h-[5px] rounded-[3px]"></div>
      </div>
    </div>
  );
};

export default BottomNavigation;
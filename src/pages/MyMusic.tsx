import type { FC } from 'react';

interface Playlist {
  id: number;
  title: string;
  songCount: number;
  cover: string;
}

interface RecentSong {
  id: number;
  title: string;
  artist: string;
  cover: string;
  playTime: string;
}

const MyMusic: FC = () => {
  const myPlaylists: Playlist[] = [
    {
      id: 1,
      title: "我喜欢的音乐",
      songCount: 127,
      cover: "https://static-dev.paraflowcontent.com/public/resource/image/b6c25475-6e08-4f15-bad0-a9bb8117380a.jpeg"
    },
    {
      id: 2,
      title: "深夜听歌",
      songCount: 43,
      cover: "https://static-dev.paraflowcontent.com/public/resource/image/ad92eb10-7a87-4467-936b-de3be7d70909.jpeg"
    },
    {
      id: 3,
      title: "运动音乐",
      songCount: 25,
      cover: "https://static-dev.paraflowcontent.com/public/resource/image/f609eecf-2f65-48b7-8009-1b93f3b02605.jpeg"
    }
  ];

  const recentSongs: RecentSong[] = [
    {
      id: 1,
      title: "夜的钢琴曲",
      artist: "石进",
      cover: "https://static-dev.paraflowcontent.com/public/resource/image/f609eecf-2f65-48b7-8009-1b93f3b02605.jpeg",
      playTime: "2分钟前"
    },
    {
      id: 2,
      title: "青花瓷",
      artist: "周杰伦",
      cover: "https://static-dev.paraflowcontent.com/public/resource/image/0834b2a0-c108-4750-8bec-8c97282831eb.jpeg",
      playTime: "今天"
    },
    {
      id: 3,
      title: "告白气球",
      artist: "周杰伦",
      cover: "https://static-dev.paraflowcontent.com/public/resource/image/ac99b6c0-4fa4-40e4-95b4-e701460aa76a.jpeg",
      playTime: "昨天"
    }
  ];

  const stats = [
    { label: "播放时长", value: "126小时", icon: "fas fa-clock" },
    { label: "收藏歌曲", value: "237首", icon: "fas fa-heart" },
    { label: "创建歌单", value: "8个", icon: "fas fa-list-music" }
  ];

  return (
    <div className="font-[-apple-system,BlinkMacSystemFont,'Segoe UI'] flex relative flex-col w-[390px] min-h-[844px]" style={{backgroundColor: 'rgba(26, 24, 29, 1)', lineHeight: 1.4}}>
      {/* Status Bar */}
      <div style={{backgroundColor: 'rgba(26, 24, 29, 1)', color: 'rgba(245, 244, 247, 1)'}} className="text-sm flex justify-between items-center h-11 pr-6 pl-6 font-medium">
        <div className="time">9:41</div>
        <div style={{rowGap: '0.375rem', columnGap: '0.375rem'}} className="text-xs flex">
          <i className="fas fa-signal-perfect"></i>
          <i className="fas fa-wifi-strong"></i>
          <i className="fas fa-battery-three-quarters"></i>
        </div>
      </div>

      {/* Header */}
      <header style={{backgroundColor: 'rgba(26, 24, 29, 1)', paddingTop: '0.375rem', paddingBottom: '0.375rem'}} className="flex justify-between items-center h-14 pr-6 pl-6">
        <div className="flex items-center gap-y-3 gap-x-3">
          <div className="bg-transparent flex justify-center items-center w-8 h-8">
            <i className="fas fa-user text-lg" style={{color: 'rgba(164, 147, 255, 1)'}}></i>
          </div>
          <h1 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-xl font-medium">我的音乐</h1>
        </div>
        <div className="flex items-center gap-y-3 gap-x-3">
          <div style={{backgroundColor: 'rgba(77, 73, 87, 1)'}} className="flex justify-center items-center w-8 h-8 rounded-md">
            <i className="fas fa-cog text-sm" style={{color: 'rgba(169, 165, 179, 1)'}}></i>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pr-6 pl-6 flex-1">
        {/* User Profile Section */}
        <section className="mb-6">
          <div style={{backgroundColor: 'rgba(44, 42, 49, 1)'}} className="pt-6 pr-4 pb-6 pl-4 rounded-lg">
            <div className="flex items-center gap-y-4 gap-x-4 mb-4">
              <img className="w-16 h-16 rounded-full object-cover" src="https://static-dev.paraflowcontent.com/public/resource/image/806fee6a-1459-483d-a454-0b4b7cf4fa69.jpeg" alt="User profile" />
              <div style={{flexBasis: '0%'}} className="grow shrink">
                <h3 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-base mb-1 font-semibold">音乐爱好者</h3>
                <p style={{color: 'rgba(169, 165, 179, 1)'}} className="text-sm">等级 Lv.12</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-y-4 gap-x-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-transparent flex justify-center items-center w-8 h-8 mx-auto mb-2">
                    <i className={`${stat.icon} text-sm`} style={{color: 'rgba(164, 147, 255, 1)'}}></i>
                  </div>
                  <p style={{color: 'rgba(245, 244, 247, 1)'}} className="text-sm font-medium mb-1">{stat.value}</p>
                  <p style={{color: 'rgba(169, 165, 179, 1)'}} className="text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Playlists Section */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-lg font-medium">我的歌单</h2>
            <span style={{color: 'rgba(169, 165, 179, 1)'}} className="text-xs">管理</span>
          </div>
          
          <div>
            {myPlaylists.map((playlist, index) => (
              <div key={playlist.id} style={{backgroundColor: 'rgba(44, 42, 49, 1)', marginTop: index === 0 ? '0' : undefined}} className="flex items-center gap-y-3 gap-x-3 mb-3 pt-3 pr-3 pb-3 pl-3 rounded-lg">
                <img className="w-12 h-12 rounded-md object-cover" style={{filter: 'brightness(0.9) contrast(0.9)'}} src={playlist.cover} alt={playlist.title} />
                <div style={{flexBasis: '0%'}} className="grow shrink">
                  <h3 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-sm mb-1 font-medium">{playlist.title}</h3>
                  <p style={{color: 'rgba(169, 165, 179, 1)'}} className="text-xs">{playlist.songCount}首歌曲</p>
                </div>
                <div className="bg-transparent flex justify-center items-center w-6 h-6">
                  <i className="fas fa-chevron-right text-xs" style={{color: 'rgba(106, 102, 117, 1)'}}></i>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recently Played Section */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-lg font-medium">最近播放</h2>
            <span style={{color: 'rgba(169, 165, 179, 1)'}} className="text-xs">清空</span>
          </div>
          
          <div>
            {recentSongs.map((song, index) => (
              <div key={song.id} style={{backgroundColor: 'rgba(44, 42, 49, 1)', marginTop: index === 0 ? '0' : undefined}} className="flex items-center gap-y-3 gap-x-3 mb-3 pt-3 pr-3 pb-3 pl-3 rounded-lg">
                <img className="w-12 h-12 rounded-md object-cover" style={{filter: 'brightness(0.9) contrast(0.9)'}} src={song.cover} alt={song.title} />
                <div style={{flexBasis: '0%'}} className="grow shrink">
                  <h3 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-sm mb-1 font-medium">{song.title}</h3>
                  <p style={{color: 'rgba(169, 165, 179, 1)'}} className="text-xs">{song.artist} · {song.playTime}</p>
                </div>
                <div className="bg-transparent flex justify-center items-center w-6 h-6">
                  <i className="fas fa-play text-xs" style={{color: 'rgba(169, 165, 179, 1)'}}></i>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-6">
          <div className="grid grid-cols-2 gap-y-3 gap-x-3">
            <div style={{backgroundColor: 'rgba(44, 42, 49, 1)'}} className="pt-4 pr-4 pb-4 pl-4 rounded-lg">
              <div className="flex items-center gap-y-3 gap-x-3">
                <div style={{backgroundColor: 'rgba(52, 199, 89, 1)'}} className="flex justify-center items-center w-10 h-10 rounded-md">
                  <i className="fas fa-download text-sm" style={{color: 'rgba(26, 24, 29, 1)'}}></i>
                </div>
                <div style={{flexBasis: '0%'}} className="grow shrink">
                  <h3 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-sm font-medium">本地音乐</h3>
                </div>
              </div>
            </div>
            
            <div style={{backgroundColor: 'rgba(44, 42, 49, 1)'}} className="pt-4 pr-4 pb-4 pl-4 rounded-lg">
              <div className="flex items-center gap-y-3 gap-x-3">
                <div style={{backgroundColor: 'rgba(255, 105, 180, 1)'}} className="flex justify-center items-center w-10 h-10 rounded-md">
                  <i className="fas fa-history text-sm" style={{color: 'rgba(26, 24, 29, 1)'}}></i>
                </div>
                <div style={{flexBasis: '0%'}} className="grow shrink">
                  <h3 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-sm font-medium">播放记录</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyMusic;
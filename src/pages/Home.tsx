import type { FC } from 'react';

interface Song {
  id: number;
  title: string;
  artist: string;
  cover: string;
}

interface Playlist {
  id: number;
  title: string;
  description: string;
  cover: string;
}

const Home: FC = () => {
  // Mock data for demonstration
  const playlists: Playlist[] = [
    {
      id: 1,
      title: "热门精选",
      description: "最受欢迎的歌曲",
      cover: "https://static-dev.paraflowcontent.com/public/resource/image/b6c25475-6e08-4f15-bad0-a9bb8117380a.jpeg"
    },
    {
      id: 2,
      title: "放松时光",
      description: "轻松惬意的音乐",
      cover: "https://static-dev.paraflowcontent.com/public/resource/image/ad92eb10-7a87-4467-936b-de3be7d70909.jpeg"
    }
  ];

  const songs: Song[] = [
    {
      id: 1,
      title: "夜的钢琴曲",
      artist: "石进",
      cover: "https://static-dev.paraflowcontent.com/public/resource/image/f609eecf-2f65-48b7-8009-1b93f3b02605.jpeg"
    },
    {
      id: 2,
      title: "青花瓷",
      artist: "周杰伦",
      cover: "https://static-dev.paraflowcontent.com/public/resource/image/0834b2a0-c108-4750-8bec-8c97282831eb.jpeg"
    },
    {
      id: 3,
      title: "告白气球",
      artist: "周杰伦",
      cover: "https://static-dev.paraflowcontent.com/public/resource/image/ac99b6c0-4fa4-40e4-95b4-e701460aa76a.jpeg"
    }
  ];

  const categories = ["热门歌曲", "新歌榜", "分类歌单", "歌手"];

  return (
    <div className="font-[-apple-system,BlinkMacSystemFont,'Segue UI'] w-[390px]" style={{backgroundColor: 'rgba(26, 24, 29, 1)', lineHeight: 1.4}}>
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
            <i className="fas fa-music text-lg" style={{color: 'rgba(164, 147, 255, 1)'}}></i>
          </div>
          <h1 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-xl font-medium">音乐</h1>
        </div>
        <div className="flex items-center gap-y-3 gap-x-3">
          <div style={{backgroundColor: 'rgba(77, 73, 87, 1)'}} className="flex justify-center items-center w-8 h-8 rounded-md">
            <i className="fas fa-search text-sm" style={{color: 'rgba(169, 165, 179, 1)'}}></i>
          </div>
          <img className="w-8 h-8 rounded-full object-cover" src="https://static-dev.paraflowcontent.com/public/resource/image/806fee6a-1459-483d-a454-0b4b7cf4fa69.jpeg" alt="User avatar" />
        </div>
      </header>

      {/* Main Content */}
      <main className="pr-6 pl-6 pb-6">
          {/* Recommendations Section */}
          <section className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-lg font-medium">为你推荐</h2>
              <span style={{color: 'rgba(169, 165, 179, 1)'}} className="text-xs">更多</span>
            </div>
            
            {/* Daily Recommendation */}
            <div style={{backgroundColor: 'rgba(44, 42, 49, 1)'}} className="mb-3 pt-4 pr-4 pb-4 pl-4 rounded-lg">
              <div className="flex items-center gap-y-3 gap-x-3">
                <div style={{backgroundColor: 'rgba(164, 147, 255, 1)'}} className="flex justify-center items-center w-12 h-12 rounded-md">
                  <i className="fas fa-calendar-day text-lg" style={{color: 'rgba(26, 24, 29, 1)'}}></i>
                </div>
                <div style={{flexBasis: '0%'}} className="grow shrink">
                  <h3 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-sm mb-1 font-medium">每日歌曲推荐</h3>
                  <p style={{color: 'rgba(169, 165, 179, 1)'}} className="text-xs">根据你的音乐品味</p>
                </div>
                <div className="bg-transparent flex justify-center items-center w-6 h-6">
                  <i className="fas fa-chevron-right text-xs" style={{color: 'rgba(106, 102, 117, 1)'}}></i>
                </div>
              </div>
            </div>

            {/* Playlist Grid */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-3">
              {playlists.map((playlist) => (
                <div key={playlist.id} style={{backgroundColor: 'rgba(44, 42, 49, 1)'}} className="pt-3 pr-3 pb-3 pl-3 rounded-lg">
                  <img className="w-full mb-2 aspect-square rounded-md object-cover" style={{filter: 'brightness(0.9) contrast(0.9)'}} src={playlist.cover} alt={playlist.title} />
                  <h3 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-sm mb-1 font-medium">{playlist.title}</h3>
                  <p style={{color: 'rgba(169, 165, 179, 1)'}} className="text-xs">{playlist.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Music Categories Section */}
          <section className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-lg font-medium">音乐分类</h2>
              <span style={{color: 'rgba(169, 165, 179, 1)'}} className="text-xs">全部</span>
            </div>
            
            {/* Category Pills */}
            <div className="mb-4" style={{overflowX: 'auto', overflowY: 'hidden'}}>
              <div className="flex gap-y-2 gap-x-2 pb-2">
                {categories.map((category, index) => (
                  <div key={category} style={{backgroundColor: index === 0 ? 'rgba(164, 147, 255, 1)' : 'rgba(77, 73, 87, 1)'}} className="shrink-0 pt-2 pr-4 pb-2 pl-4 rounded-md">
                    <span style={{color: index === 0 ? 'rgba(26, 24, 29, 1)' : 'rgba(245, 244, 247, 1)'}} className="text-xs font-medium">{category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Song List */}
            <div>
              {songs.map((song, index) => (
                <div key={song.id} style={{backgroundColor: 'rgba(44, 42, 49, 1)', marginTop: index === 0 ? '0' : undefined}} className="flex items-center gap-y-3 gap-x-3 mb-3 pt-3 pr-3 pb-3 pl-3 rounded-lg">
                  <img className="w-12 h-12 rounded-md object-cover" style={{filter: 'brightness(0.9) contrast(0.9)'}} src={song.cover} alt={song.title} />
                  <div style={{flexBasis: '0%'}} className="grow shrink">
                    <h3 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-sm mb-1 font-medium">{song.title}</h3>
                    <p style={{color: 'rgba(169, 165, 179, 1)'}} className="text-xs">{song.artist}</p>
                  </div>
                  <div className="bg-transparent flex justify-center items-center w-6 h-6">
                    <i className="fas fa-play text-xs" style={{color: 'rgba(169, 165, 179, 1)'}}></i>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
    </div>
  );
};

export default Home;
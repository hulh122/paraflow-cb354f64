import type { FC } from 'react';

interface Chart {
  id: number;
  title: string;
  description: string;
  cover: string;
}

interface Genre {
  id: number;
  name: string;
  color: string;
  textColor: string;
}

const Discover: FC = () => {
  const charts: Chart[] = [
    {
      id: 1,
      title: "流行榜",
      description: "最热门的流行歌曲",
      cover: "https://static-dev.paraflowcontent.com/public/resource/image/b6c25475-6e08-4f15-bad0-a9bb8117380a.jpeg"
    },
    {
      id: 2,
      title: "新歌榜", 
      description: "最新发布的音乐",
      cover: "https://static-dev.paraflowcontent.com/public/resource/image/ad92eb10-7a87-4467-936b-de3be7d70909.jpeg"
    },
    {
      id: 3,
      title: "经典榜",
      description: "永不过时的经典",
      cover: "https://static-dev.paraflowcontent.com/public/resource/image/f609eecf-2f65-48b7-8009-1b93f3b02605.jpeg"
    },
    {
      id: 4,
      title: "电音榜",
      description: "动感电子音乐",
      cover: "https://static-dev.paraflowcontent.com/public/resource/image/ac99b6c0-4fa4-40e4-95b4-e701460aa76a.jpeg"
    }
  ];

  const genres: Genre[] = [
    { id: 1, name: "流行", color: "rgba(255, 105, 180, 1)", textColor: "rgba(26, 24, 29, 1)" },
    { id: 2, name: "摇滚", color: "rgba(255, 69, 58, 1)", textColor: "rgba(26, 24, 29, 1)" },
    { id: 3, name: "民谣", color: "rgba(52, 199, 89, 1)", textColor: "rgba(26, 24, 29, 1)" },
    { id: 4, name: "古典", color: "rgba(90, 200, 250, 1)", textColor: "rgba(26, 24, 29, 1)" },
    { id: 5, name: "电音", color: "rgba(191, 90, 242, 1)", textColor: "rgba(26, 24, 29, 1)" },
    { id: 6, name: "爵士", color: "rgba(255, 159, 10, 1)", textColor: "rgba(26, 24, 29, 1)" }
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
            <i className="fas fa-compass text-lg" style={{color: 'rgba(164, 147, 255, 1)'}}></i>
          </div>
          <h1 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-xl font-medium">发现</h1>
        </div>
        <div className="flex items-center gap-y-3 gap-x-3">
          <div style={{backgroundColor: 'rgba(77, 73, 87, 1)'}} className="flex justify-center items-center w-8 h-8 rounded-md">
            <i className="fas fa-search text-sm" style={{color: 'rgba(169, 165, 179, 1)'}}></i>
          </div>
          <img className="w-8 h-8 rounded-full object-cover" src="https://static-dev.paraflowcontent.com/public/resource/image/806fee6a-1459-483d-a454-0b4b7cf4fa69.jpeg" alt="User avatar" />
        </div>
      </header>

      {/* Main Content */}
      <main className="pr-6 pl-6 flex-1">
        {/* Music Charts Section */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-lg font-medium">音乐排行榜</h2>
            <span style={{color: 'rgba(169, 165, 179, 1)'}} className="text-xs">更多</span>
          </div>
          
          <div className="grid grid-cols-2 gap-y-3 gap-x-3">
            {charts.map((chart) => (
              <div key={chart.id} style={{backgroundColor: 'rgba(44, 42, 49, 1)'}} className="pt-3 pr-3 pb-3 pl-3 rounded-lg">
                <img className="w-full mb-2 aspect-square rounded-md object-cover" style={{filter: 'brightness(0.9) contrast(0.9)'}} src={chart.cover} alt={chart.title} />
                <h3 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-sm mb-1 font-medium">{chart.title}</h3>
                <p style={{color: 'rgba(169, 165, 179, 1)'}} className="text-xs">{chart.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Music Genres Section */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-lg font-medium">音乐类型</h2>
            <span style={{color: 'rgba(169, 165, 179, 1)'}} className="text-xs">全部</span>
          </div>
          
          <div className="grid grid-cols-2 gap-y-3 gap-x-3">
            {genres.map((genre) => (
              <div key={genre.id} style={{backgroundColor: genre.color}} className="pt-8 pr-4 pb-8 pl-4 rounded-lg flex items-center justify-center">
                <span style={{color: genre.textColor}} className="text-base font-semibold">{genre.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Section */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-lg font-medium">热门话题</h2>
          </div>
          
          <div style={{backgroundColor: 'rgba(44, 42, 49, 1)'}} className="pt-4 pr-4 pb-4 pl-4 rounded-lg">
            <div className="flex items-center gap-y-3 gap-x-3">
              <div style={{backgroundColor: 'rgba(255, 159, 10, 1)'}} className="flex justify-center items-center w-12 h-12 rounded-md">
                <i className="fas fa-fire text-lg" style={{color: 'rgba(26, 24, 29, 1)'}}></i>
              </div>
              <div style={{flexBasis: '0%'}} className="grow shrink">
                <h3 style={{color: 'rgba(245, 244, 247, 1)'}} className="text-sm mb-1 font-medium"># 夏日音乐节</h3>
                <p style={{color: 'rgba(169, 165, 179, 1)'}} className="text-xs">12.5万人正在讨论</p>
              </div>
              <div className="bg-transparent flex justify-center items-center w-6 h-6">
                <i className="fas fa-chevron-right text-xs" style={{color: 'rgba(106, 102, 117, 1)'}}></i>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Discover;
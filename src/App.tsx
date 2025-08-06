import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Discover from './pages/Discover';
import MyMusic from './pages/MyMusic';

// 获取基础路径，处理生产环境的子路径
// 在生成应用时，这个值会被替换为实际的仓库名
const basename = import.meta.env.PROD ? '/paraflow-cb354f64' : '';

function App() {
  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/my-music" element={<MyMusic />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
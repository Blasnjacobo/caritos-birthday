import { Route, Routes } from 'react-router-dom';
import {
  Dashboard,
  Memories,
  Felicitaciones,
  BetweenUs,
  HuntingTreasure,
  Story
} from './pages/index';
import HeaderHomeLayout from './layout/HeaderHomeLayout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HeaderHomeLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='/memories' element={<Memories />} />
        <Route path='/felicitaciones' element={<Felicitaciones />} />
        <Route path='/betweenUs' element={<BetweenUs />} />
        <Route path='/hunting-treasure' element={<HuntingTreasure />} />
        <Route path='/story' element={<Story />} />
      </Route>
    </Routes>
  );
};

export default App;
import {Route, Routes } from 'react-router-dom';
import {
  Dashboard,
  Memories,
  Felicitaciones,
  BetweenUs,
  HuntingTreasure
} from './pages/index';
import HeaderHomeLayout from './layout/HeaderHomeLayout';

const App = () => {
  return (
      <Routes>
        <Route path='/caritos-birthday' element={<HeaderHomeLayout />}>
          <Route path="/caritos-birthday" element={<Dashboard />} />
          <Route path='/caritos-birthday/memories' element={<Memories />} />
          <Route path='/caritos-birthday/felicitaciones' element={<Felicitaciones />} />
          <Route path='/caritos-birthday/betweenUs' element={<BetweenUs />} />
          <Route path='/caritos-birthday/betweenUs/huntingTreasure' element={<HuntingTreasure />} />
        </Route>
      </Routes>
  );
};

export default App;
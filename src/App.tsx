import { Navigate, Route, Routes } from 'react-router-dom';

import { Home } from './pages';

import { Info }  from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/home/*' element={<Home />} />
        {/* if the router not matching */}
        <Route path='*' element={<Navigate to={'./home'} />} />
        <Route path='/info/*' element={<  Info />} />
      </Routes>
    </>
  );
}

export default App;

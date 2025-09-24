import { Navigate, Route, Routes } from 'react-router-dom';

import { Home, Info } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/home/*' element={<Home />} />
        <Route path='/info/*' element={<Info />} />
        {/* if the router not matching */}
        <Route path='*' element={<Navigate to={'/home'} replace />} />
      </Routes>
    </>
  );
}

export default App;

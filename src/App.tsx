import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserDetailPage from './pages/UserDetailPage';
import AddUserPage from './pages/AddUserPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users/:id' element={<UserDetailPage />} />
          <Route path='/users/add' element={<AddUserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

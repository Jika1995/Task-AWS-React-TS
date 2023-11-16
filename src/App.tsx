import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserDetailPage from './pages/UserDetailPage';
import AddUserPage from './pages/AddUserPage';
import Navbar from './components/Navbar/Navbar';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/users/:id' element={<UserDetailPage />} />
            <Route path='/users/add' element={<AddUserPage />} />
          </Routes>
        </>
      </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;

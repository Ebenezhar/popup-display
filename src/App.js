import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Popup from './component/Popup';
import PopupPage from './Pages/PopupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/popup" element={<PopupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
import ChatProvider from "./context/chatProvider";

function App() {
  return (
    <div className="App">
      <ChatProvider>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
      </ChatProvider>
    </div>
  );
}

export default App;

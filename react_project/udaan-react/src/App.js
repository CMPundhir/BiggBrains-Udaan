import logo from "./logo.svg";
import "./App.css";
import { Task } from "./views/Task";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import ChatView from "./views/ChatView";
import NavView from "./views/NavView";

function App() {
  return (
    <div className="App container">
      <NavView />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="task" element={<Task />} />
            <Route path="chat" element={<ChatView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}

      <div className="app__body">
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;

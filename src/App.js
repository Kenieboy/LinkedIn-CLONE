import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed";
import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  useEffect(() => {
    async function postData() {
      await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
      });
    }
    postData();
  }, []);
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

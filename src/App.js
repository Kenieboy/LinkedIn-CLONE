import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed";
import { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  useEffect(() => {
    async function newCollection() {
      await addDoc(collection(db, "cities"), {
        name: "Herra",
        country: "Miral",
      });
    }

    newCollection();
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

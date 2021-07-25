import React from 'react';
import '../styles/App.css';
import AddNoteInput from "./AddNoteInput";
import Header from "./Header";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <AddNoteInput/>
            <Footer/>
        </div>
    );
}

export default App;

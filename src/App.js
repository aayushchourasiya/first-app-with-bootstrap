import './App.css';
import Navbar from './Components/Navbar';
import MainBody from './Components/MainBody';

function App() {
  return (
    <>
      <Navbar/>
      <div className = "container">
        <MainBody heading="Enter your text in Textbox!"/>
      </div>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import VideoApp from './component/VideoApp';
import MainRoute from './component/Routes/MainRoute';

function App() {
  return (
    <div className="App">
     <VideoApp />
      <MainRoute />
    </div>
  );
}

export default App;

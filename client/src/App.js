import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Newspost from './components/Newspost';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Newspost />
    </div>
  );
}

export default App;

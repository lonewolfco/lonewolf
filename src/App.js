
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import ProjectCards from './components/projectCards';
// import ScrollUp from './components/ScrollUp.js';



function App() {
  return (

        <div >
          <Navbar />
          <Header />
          <ProjectCards />
        </div>

  );
}

export default App;


import './App.scss';
import Layout from './Components/Layout';
import{Routes,Route} from 'react-router-dom'
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';

function App() {
  return (
 <Routes>
 <Route path="/" element={<Layout/>}>
 <Route index element={<Home/>}/>
 <Route path="about" element={<About/>}/>
 <Route path="contact" element={<Contact/>}/>
 </Route>
 </Routes>
  );
}

export default App;

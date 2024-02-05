
import './App.scss';
import Layout from './Components/Layout';
import{Routes,Route} from 'react-router-dom'
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

function App() {
  return (
 <Routes>
 <Route path="/" element={<Layout/>}>
 <Route index element={<Home/>}/>
 <Route path="about" element={<About/>}/>
 <Route path="contact" element={<Contact/>}/>
 <Route path="skills" element={<Skills/>}/>
 </Route>
 </Routes>
/* <>
<Layout/>
<div className='container home-page'>
<Home/>
</div>
<div className='container about-page'>
<About/>
</div>
<div className='container skills-page'>
<Skills/>
</div>
<div className='container contact-page'>
<Contact/>
</div>
</> */
  );
}

export default App;


import './App.scss';
import Layout from './Components/Layout';
import{Routes,Route} from 'react-router-dom'

function App() {
  return (
 <Routes>
 <Route path="/" element={<Layout/>}/>
 </Routes>
  );
}

export default App;

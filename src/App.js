import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Page from './components/Page'
import Main from './components/Main'

import About from './routes/About'
import Projects from './routes/Projects'

import './Styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page/>}>
          <Route index element={<Main/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='projects' element={<Projects/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

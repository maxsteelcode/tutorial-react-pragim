import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './layout/Menu';
import ClassComponent from './aulas/ClassCompoments/ClassComponents';
import IntroToState from './aulas/IntroToState/IntroToState';
import ComponentePai from './aulas/EventCallback/ComponentePai';
import ComponentePaiContext from './aulas/Context/ComponentePai';
import ComponentePaiContextEvento from './aulas/ContextEvents/ComponentePai';
import Employess from './aulas/RenderList/Employess';
import ConsumingAPI from './aulas/ConsumingAPI/ComponentePai';

function App() {
  return (
    <div className="App">
      <h1>Tutorial Pragim</h1>
      <Router>
        <Menu/>
        <Routes>          
          <Route path="ClassComponent" element={<ClassComponent Id="hjahjd" Name="Lo" Location="Rio" Salary="50000" DptName="Dpt do steel" HeadName="Steel" />} > </Route>
          <Route path="IntroToState" element={<IntroToState />} > </Route>
          <Route path="EventCallback" element={<ComponentePai/>}></Route>
          <Route path="Context" element={<ComponentePaiContext/>}></Route>
          <Route path="ContextEvento" element={<ComponentePaiContextEvento/>}></Route>
          <Route path="IterationList" element={<Employess/>}></Route>
          <Route path="ConsumingAPI" element={<ConsumingAPI/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

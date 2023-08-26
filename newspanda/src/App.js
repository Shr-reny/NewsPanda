import './App.css';
import React, { useState} from 'react'
import NavBar from './Components/navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
const pageSize=5;
const [progress, setProgress] = useState(0)
const[mode,setMode]=useState('light');

const toggle=(cls)=>
  {
    removebg();
    document.body.classList.add('bg-'+cls);
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
    else 
    {
      setMode('dark')
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
    }
  }
  const removebg=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
  }
// export default class App extends Component {
  

    return (
      <div>       
        <Router> 
        <NavBar mode={mode} toggle={toggle}/>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={progress}
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/></Route>
          <Route exact path="/business"><News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/></Route>
          <Route exact path="/entertaintment"> <News setProgress={setProgress} key="entertaintment" pageSize={pageSize} country="in" category="entertaintment"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/></Route>
          <Route exact path="/science"> <News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/></Route>
          <Route exact path="/sports"> <News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/></Route>
          <Route exact path="/technology"> <News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/></Route>
        </Switch>       
        </Router>
      </div>
    )
  }

  export default App;

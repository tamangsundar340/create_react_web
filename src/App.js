import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './Components/Home'
import Service from './Components/Service'
import Contact from './Components/Contact'
import About from './Components/About'
import Navbar from './Components/Navbar'


function App(){
    return(
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component= {Home} />
                <Route exact path="/about" component= {About} />
                <Route exact path="/contact" component= {Contact} />
                <Route exact path="/service" component= {Service} />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}
export default App




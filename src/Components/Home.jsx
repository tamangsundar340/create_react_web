import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import web from '../images/cat.jpeg'
import CommonComponent from './CommonComponent'


class Home extends React.Component{
    render(){
        return(
            <div>
                <CommonComponent 
                    name="Grow your business with"
                    visit="/service"
                    btnName="Get Started"
                    imgsrc={web}
                />
            </div>
        )
    }
}
export default Home




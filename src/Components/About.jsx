import React,{Component} from 'react'
import web from '../images/cat.jpeg'
import CommonComponent from './CommonComponent'

class About extends React.Component{
    render(){
        return(
            <div>
                <CommonComponent 
                    name="Welcome to about page"
                    visit="/contact"
                    btnName="Contact Now"
                    imgsrc={web}
                />
            </div>
        )
    }
}
export default About




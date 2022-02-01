import React,{Component} from 'react'
import web from '../images/img.jpg'
import {NavLink} from 'react-router-dom'

class CardComponent extends React.Component{
    render(props){
        return(
    
            <div className="col-md-4 col-10 max-auto mb-4">
                <div className="card">
                    <img src={this.props.imgsrc} className="card-img-top" alt={this.props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">Some quick example text to build on the.</p>
                        <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardComponent




import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
class CommonComponent extends React.Component{
    render(props){
        return(
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        {this.props.name}
                                        <strong className="brand-name"> TamTechnical</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are the leading company in Nepal.
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={this.props.visit} className="btn-get-started">
                                            {this.props.btnName}</NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 header-img">
                                    <img src={this.props.imgsrc} className="img-fluid animated" alt="" 
                                    style={{borderRadius:"50%"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default CommonComponent




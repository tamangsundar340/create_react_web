import React,{Component} from 'react'
import CardComponent from './CardComponent'
import Carddata from './Carddata'

class Service extends React.Component{
    render(){
        return(
            <div>
                <div className="my-5">
                    <h1 className="text-center">Our Services</h1>
                </div>
                <div className="container-fluid mb-4" >
                    <div className="row">
                        <div className="col-10 mx-auto" >
                            <div className="row mb-3">
                                {
                                    // here we are using {} beacuse 
                                    //we have to srite javascript cod here
                                    Carddata.map((value,index) =>{
                                        return(
                                            <CardComponent 
                                                key={index}
                                                imgsrc={value.imgsrc}
                                                title={value.title}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Service




import React,{Component} from 'react'
import { useState } from 'react'
// function component state vs class state

const Contact = () =>{
    const[data,setData] = useState({
        fullname:"",
        phonenumber:"",
        email:"",
        message:""
    })
    const handleChange = (event) =>{
        const {name,value} = event.target
        setData((preVal) => {
            return{
                ...preVal,
                [name]:value
            }
        })
    }
    const handleSubmit =(event) =>{
        event.preventDefault()
        alert(
            `My name is ${data.fullname}.
            phone number is ${data.phonenumber}
            email is is ${data.email}.
            My message is ${data.message} `
        )
        console.log("Submited data")
    }
    return(
        <div>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="contianer contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">
                                    FullName
                                </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={handleChange}
                                    placeholder="full name.." 
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">
                                    Phone
                                </label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="phonenumber"
                                    value={data.phonenumber}
                                    onChange={handleChange}
                                    placeholder="Mobile number.." 
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    placeholder="your email.." 
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">
                                    Message
                                </label>
                                <textarea 
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="3"
                                    name="message"
                                    value={data.message}
                                    onChange={handleChange}
                                    ></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary px-4" 
                                    type="submit">Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact





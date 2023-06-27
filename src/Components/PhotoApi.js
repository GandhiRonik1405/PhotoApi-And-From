import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const PhotoApi = () => {


    const [Users, setUsers] = useState([])


    const getUsers = async () => {
        axios.get("https://jsonplaceholder.typicode.com/albums/1/photos").then(async (response) => {

            setUsers(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }


    useEffect(() => {
        getUsers();
    }, []);



    return (
        <div className="Container  ">
                 

            <h1 className="text-center mt-5 text-white ">Photo</h1>
            <h1 className="text-center"> <Link to="/Form ">Form</Link></h1>
            
            <div className="Container-fluid  ">
                <div className="row text-center">
                    {
                        Users?.map((curEle) => {
                            return (
                                <div className=" col col-12 col-sm-6 col-md-4 col-lg-3 mt-5 " key={curEle.id}>

                                    <div className="card p-4 ">


                                        <div className={curEle.title} >
                                            <img src={curEle.url} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{curEle.title}</h5>

                            

                                                <div className="ml-6 w-10">
                                                    <h4 className=" mb-0 mt-0 text-left">{}</h4>
                                                    <span></span>

                                                    {/* <div className="btn btn-sm btn-primary">Go somewhere</div> */}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}


export default PhotoApi

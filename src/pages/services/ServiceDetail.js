import React from "react"
import {useParams, useHistory} from "react-router-dom"

import serviceData from "./serviceData"

function ServiceDetail() {
    const {serviceId} = useParams()
    const history = useHistory()
    const thisService = serviceData.find(service => service._id === serviceId)

    
    function handleClick() {
        console.log("Submitting...")
        setTimeout(() => {
            history.push("/services")
        }, 2000)
     //   history.go()
    }
    
    return (
        <div>
            <h1>Service Detail Page</h1>
            <h3>{thisService.name} - ${thisService.price}</h3>
            <p>{thisService.description}</p>
            <button onClick={handleClick}>Go back to all services</button>
        </div>
    )
}

export default ServiceDetail
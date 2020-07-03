import React from "react"
import serviceData from "./serviceData"
import{Link} from 'react-router-dom'

function ServicesList() {
const map1 = serviceData.map(ser =>
     <li key={ser._id}><Link to={`/services/${ser._id}`}>{ser.name}</Link> - ${ser.price}</li>
     )
    
    return (
        <div>
            <h1>Services List Page</h1>
            {map1}
        </div>
    )
}

export default ServicesList
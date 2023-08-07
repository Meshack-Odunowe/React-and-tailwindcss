import React from 'react'
import { Link } from 'react-router-dom' // Import the Link component from react-router-dom

const Dashboard = () => {
    return (
        <div>
            <p>This is a dashboard</p>
            <Link to="/products" className="underline">
                Go to products
            </Link>
        </div>
    )
}

export default Dashboard

// import React from 'react'
// import Layout from './components/shared/Layout'
// import Invoice from './components/shared/Invoice'
// import Dashboard from './components/shared/Dashboard'
// import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
// import Products from './components/shared/Products'
// const App = () => {
//     return (
//         <BrowserRouter>
//             <Layout />
//             <Routes>
//                 <Route path="/" element={<Layout />}></Route>
//                 <Route path="/invoices" element={<Invoice />} />
//                 <Route index element={<Dashboard />} />
//                 <Route path="/products" element={<Products />} />
//                 <Route path="login" element={<div>This is the login page</div>} />
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './components/shared/Dashboard'
import Products from './components/shared/Products'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                </Route>
                {/* <Route path="/register" element={<Register />} /> */}
            </Routes>
        </Router>
    )
}

export default App

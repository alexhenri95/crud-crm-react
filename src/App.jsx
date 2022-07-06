import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import CreateCustomer from "./pages/CreateCustomer"
import DetailCustomer from "./pages/DetailCustomer"
import EditCustomer from "./pages/EditCustomer"
import Home from "./pages/Home"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/clientes" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="nuevo" element={<CreateCustomer />} />
                    <Route path="editar/:id" element={<EditCustomer />} />
                    <Route path=":id" element={<DetailCustomer />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
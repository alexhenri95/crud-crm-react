import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import Formulario from "../components/Formulario"
import Spinner from "../components/Spinner";

const EditCustomer = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(true);

    useEffect( () => {
        const obtenerClienteAPI = async() => {
            try {
                const url = `http://localhost:4000/clientes/${id}`;
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                setCliente(resultado);
            } catch (error) {
                console.log(error);
            }
            setTimeout(() => {
                setCargando(false);
            }, 800);
        }

        obtenerClienteAPI();
    }, [] );

    return (

        cargando ? <Spinner/> :  Object.keys(cliente).length === 0 ? (
            <main className="md:h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
                <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
                <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
                <button className="mt-5">
                <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                    <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span onClick={ () => navigate(`/clientes`) } className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                        Inicio  
                    </span>
                </a>
                </button>
            </main>
        ) : (
            <div className="">
                <h1 className="font-black text-4xl text-gray-800 md:text-center">Editar Cliente</h1>
                <p className="italic text-blue-500 text-sm md:text-center">(*) Completa los siguintes campos para actualizar un cliente</p>

                <Formulario 
                    cliente={cliente} 
                />
            </div>
        )
    )
}

export default EditCustomer
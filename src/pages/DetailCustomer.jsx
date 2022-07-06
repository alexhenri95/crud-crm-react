import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner";

const DetailCustomer = () => {

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
                <h1 className="font-black text-4xl text-gray-800 md:text-center">Detalle de Cliente</h1>
                <p className="italic text-blue-500 text-sm md:text-center">(*) Información completa de cliente registrado en la base de datos.</p>

                <div className="md:w-3/4 mx-auto bg-white shadow overflow-hidden sm:rounded-lg mt-10">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Información de Cliente</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Detalle personal</p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Nombre</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{cliente.nombre}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Empresa</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{cliente.empresa}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{cliente.email}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Teléfono</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {
                                        cliente.telefono ? cliente.telefono : 'No tiene'
                                    }
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Notas</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {
                                        cliente.notas ? cliente.notas : 'S/N'
                                    }
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        )
    )
}

export default DetailCustomer
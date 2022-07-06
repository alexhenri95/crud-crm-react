import { useEffect, useState } from "react"
import Cliente from "../components/Cliente";
import Spinner from "../components/Spinner";

const Home = () => {

    const [clientes, setClientes] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        setCargando(true);
        const obtenerClientesAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes`;
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                setClientes(resultado)
            } catch (error) {
                console.log(error);
            }
            setTimeout(() => {
                setCargando(false);
            }, 800);
        }

        obtenerClientesAPI();
    }, []);

    const handleEliminar = async(id) => {
        const confirmar = confirm('¿Deseas elimnar este cliente?');

        if (confirmar) {
            try {
                const url = `http://localhost:4000/clientes/${id}`;
                const respuesta = await fetch(url, {
                    method: 'DELETE'
                });
                await respuesta.json();
                const arrayClientes = clientes.filter(cliente => cliente.id !== id);
                setClientes(arrayClientes);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="">
            { cargando ? <Spinner/> : (
            <>
            <h1 className="font-black text-4xl text-gray-800 md:text-center">Listado de Clientes</h1>
            <p className="italic text-blue-500 text-sm md:text-center">(*) Listado de los clientes registrados en nuestra base de datos.</p>

            <div className="mt-5">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-4 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        Nombre
                                    </th>
                                    <th
                                        className="px-5 py-4 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        Empresa
                                    </th>
                                    <th
                                        className="px-5 py-4 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        Contacto
                                    </th>
                                    <th
                                        className="px-5 py-4 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    clientes.map( cliente => (
                                        <Cliente
                                            key={cliente.id}
                                            cliente={cliente}
                                            handleEliminar={handleEliminar}
                                        />
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </> )}
        </div>
    )
}

export default Home
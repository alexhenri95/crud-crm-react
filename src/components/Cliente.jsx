import { useNavigate } from "react-router-dom";

const Cliente = ({cliente, handleEliminar}) => {

    const navigate = useNavigate();

    const {nombre, empresa, email, telefono, notas, id} = cliente;

    return (
        <tr className='border-b hover:bg-gray-50'>
            <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {nombre}
                </p>
            </td>
            <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {empresa}
                </p>
            </td>
            <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {email}
                </p>
                <p className="text-gray-900 whitespace-no-wrap">
                    <span className='font-semibold'>Cel.:</span> {telefono ? telefono : 'No registrado'}
                </p>
            </td>
            <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                <button onClick={ () => navigate(`/clientes/${id}`) } className="px-2 py-2 bg-transparent outline-none border-2 border-yellow-400 rounded text-yellow-500 font-medium active:scale-95 hover:bg-yellow-600 hover:text-white hover:border-transparent focus:bg-yellow-600 focus:text-white focus:border-transparent focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200 mr-2 uppercase text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </button>
                
                <button onClick={ () => navigate(`/clientes/editar/${id}`) } className="px-2 py-2 bg-transparent outline-none border-2 border-indigo-400 rounded text-indigo-500 font-medium active:scale-95 hover:bg-indigo-600 hover:text-white hover:border-transparent focus:bg-indigo-600 focus:text-white focus:border-transparent focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200 mr-2 uppercase text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </button>

                <button onClick={ () => handleEliminar(id) } className="px-2 py-2 bg-transparent outline-none border-2 border-red-400 rounded text-red-500 font-medium active:scale-95 hover:bg-red-600 hover:text-white hover:border-transparent focus:bg-red-600 focus:text-white focus:border-transparent focus:ring-2 focus:ring-red-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200 uppercase text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </td>
        </tr>
    )
}

export default Cliente
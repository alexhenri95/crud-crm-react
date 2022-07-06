import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {

    const location = useLocation();
    const URLActual = location.pathname;

    return (
        <div className='md:flex md:min-h-screen'>
            <div className='md:w-1/4 bg-gray-900 px-5 py-10'>
                <div className='flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                </div>
                <h2 className='text-4xl text-white font-black text-center'>CRM</h2>

                <nav className='mt-10'>

                    <Link to="/clientes" className={`flex items-center text-xl block mt-2 font-semibold hover:bg-gray-700 hover:text-yellow-400 ${URLActual === '/clientes' ? 'bg-gray-700 text-yellow-400':'text-white'}  py-2 px-4 rounded-lg`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Clientes
                    </Link>

                    <Link to="/clientes/nuevo" className={`flex items-center text-xl block mt-2 font-semibold hover:bg-gray-700 hover:text-yellow-400 ${URLActual === '/clientes/nuevo' ? 'bg-gray-700 text-yellow-400':'text-white'}  py-2 px-4 rounded-lg`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Nuevo Cliente
                    </Link>

                </nav>
            </div>

            <div className='md:w-3/4 p-8 bg-gray-100 md:h-screen overflow-scroll'>
                <Outlet/>
            </div>      
        </div>
    )
}

export default Layout
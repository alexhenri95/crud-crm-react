import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import Alerta from './Alerta';

const Formulario = ({cliente}) => {

    const navigate = useNavigate();

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
                    .min(5, 'El nombre es demasiado corto.')
                    .max(25, 'El nombre es demasiado largo.')
                    .required('El campo nombre es requerido.'),
        empresa: Yup.string()
                    .required('El campo empresa es requerido.'),
        email: Yup.string()
                    .email('Email no válido.')
                    .required('El campo email es requerido.'),
        telefono: Yup.number()
                    .positive('Número no válido.')
                    .integer('Número no válido.')
                    .typeError('Número no válido.'),
    })

    const handleSubmit = async(valores) => {
        try {
            let respuesta;
            if (cliente.id) {
                //editando
                const url = `http://localhost:4000/clientes/${cliente.id}`;
                respuesta = await fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }else{
                //guardando
                const url = `http://localhost:4000/clientes`;
                respuesta = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }
            await respuesta.json();
            navigate('/clientes');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="md:w-3/4 mx-auto bg-white rounded-lg mt-10 px-5 py-10 shadow-lg">
            <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
                { cliente?.id ? 'Editar Cliente' : 'Agregar Cliente' }
            </h1>

            <Formik 
                initialValues={{
                    nombre: cliente?.nombre ?? '',
                    empresa: cliente?.empresa ?? '',
                    email: cliente?.email ?? '',
                    telefono: cliente?.telefono ?? '',
                    notas: cliente?.notas ?? ''
                }}

                enableReinitialize = {true}

                onSubmit={ async(values, {resetForm}) => {
                    await handleSubmit(values);
                    resetForm();
                } }

                validationSchema={nuevoClienteSchema}
            >

                { ({errors, touched}) => (   
                    <Form className='mt-5'>
                        <div className='mb-4'>
                            <label htmlFor="nombre" className='block mb-2 font-medium text-gray-900'>Nombre</label>
                            <Field 
                                type="text" 
                                id="nombre" 
                                name="nombre"
                                className={`bg-gray-50 border ${errors.nombre  && touched.nombre ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`} 
                                placeholder="Nombre del cliente"
                            />
                            { errors.nombre && touched.nombre  ? (
                                <Alerta>{errors.nombre}</Alerta>
                            ) : null}
                        </div>

                        <div className='mb-4'>
                            <label htmlFor="empresa" className='block mb-2 font-medium text-gray-900'>Empresa</label>
                            <Field 
                                type="text" 
                                id="empresa" 
                                name="empresa"
                                className={`bg-gray-50 border ${errors.empresa  && touched.empresa ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`} 
                                placeholder="Empresa del cliente"
                            />
                            { errors.empresa && touched.empresa  ? (
                                <Alerta>{errors.empresa}</Alerta>
                            ) : null}
                        </div>

                        <div className='mb-4'>
                            <label htmlFor="email" className='block mb-2 font-medium text-gray-900'>Email</label>
                            <Field 
                                type="email" 
                                id="email" 
                                name="email"
                                className={`bg-gray-50 border ${errors.email  && touched.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`} 
                                placeholder="Email del cliente"
                            />
                            { errors.email && touched.email  ? (
                                <Alerta>{errors.email}</Alerta>
                            ) : null}
                        </div>

                        <div className='mb-4'>
                            <label htmlFor="telefono" className='block mb-2 font-medium text-gray-900'>Teléfono</label>
                            <Field 
                                type="tel" 
                                id="telefono" 
                                name="telefono"
                                className={`bg-gray-50 border ${errors.telefono ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`} 
                                placeholder="Teléfono del cliente"
                            />
                            { errors.telefono && touched.telefono  ? (
                                <Alerta>{errors.telefono}</Alerta>
                            ) : null}
                        </div>

                        <div className='mb-4'>
                            <label htmlFor="notas" className='block mb-2 font-medium text-gray-900'>Notas</label>
                            <Field 
                                as="textarea"
                                type="text" 
                                id="notas" 
                                name="notas"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-24" 
                                placeholder="Notas del cliente"
                            />
                        </div>

                        <input 
                            type="submit" 
                            value={ cliente?.id ? 'Actualizar Cliente' : 'Agregar Cliente' }
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center cursor-pointer"
                        />
                    </Form>    
                ) }

            </Formik>
        </div>
    )
}

Formulario.defaultProps = {
    cliente: {}
}

export default Formulario
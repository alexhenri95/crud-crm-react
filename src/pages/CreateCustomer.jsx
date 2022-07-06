import Formulario from "../components/Formulario"

const CreateCustomer = () => {
    return (
        <div className="">
            <h1 className="font-black text-4xl text-gray-800 md:text-center">Nuevo Cliente</h1>
            <p className="italic text-blue-500 text-sm md:text-center">(*) Completa los siguintes campos para registrar un cliente</p>

            <Formulario/>
        </div>
    )
}

export default CreateCustomer
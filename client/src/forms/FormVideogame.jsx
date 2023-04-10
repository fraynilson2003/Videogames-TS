import React from 'react'
import { useFormik } from "formik"
import { BarraEleccion } from './BarraEleccion';


export default function FormVideogame() {

  let submitForm = (e)=>{

  }

  const {
    values,
    setValues,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
      released: "",
      background_image: "",
      genders: "",
    },
    onSubmit: (values, { resetForm }) => {
      //dispatch(createService(values));
      resetForm();
    },
  });


  return (
    <div className='flex justify-center w-full min-w-full h-auto  mt-4'>
      <div className='mx-3 w-full h-auto max-w-[500px] py-3 px-5 rounded-lg bg-gris'>
 
          <form onSubmit={handleSubmit} className='flex flex-col h-auto mx-auto'>
              <h2 className='text-xl text-blanco my-3 font-primary font-bold text-center 
              md:text-3xl  '>Create Videogame</h2>

              {/* Name */}
              <div className="mb-6">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input name="name" type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="gta" required/>
              </div>

              {/* Description */}
              <div className="mb-6">
                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea name="description" type="text" as="textarea" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..." required/>
              </div>

              {/* released */}
              <div className="mb-6">
                <label for="released" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">released</label>
                <input name="released" type="date" id="released" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
              </div>

              {/* genders */}
              <div className="mb-6">
                
                
                <BarraEleccion
                buttonGroup={"genders"}/>

              </div>

              {/*background_image  */}
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  for="background_image"
                >
                  Ingrese imagen del servicio (opcional):
                </label>
                <input
                  className="w-full text-blanco bg-verde/90 text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                  id="background_image"
                  type="file"
                  name="background_image"
                />
              </div>

              <div className=' flex w-full justify-center mt-10'>
                <button type="submit" className="text-white w-auto  py-1.5 bg-verde hover:bg-verde/60 border text-oscuro font-bold text-base hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg   px-5  text-center">
                  Create
                </button>
              </div>

          </form>

      </div>
    </div>
  )
}

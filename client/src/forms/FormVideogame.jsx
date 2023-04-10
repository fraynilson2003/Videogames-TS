import React from 'react'
import { useFormik } from "formik"
import { BarraEleccion } from './BarraEleccion';
import { SchemaCreateVideogame } from './videogame/SchemaCreateVideogame';
import { useSelector } from 'react-redux';


export default function FormVideogame() {
  let genders = useSelector(state => state.allGenders)

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
      //background_image: "",
      genders: [],
    },
    validationSchema: SchemaCreateVideogame(genders),
    onSubmit: (values, { resetForm }) => {
      //dispatch(createService(values));
      console.log("*******************");
      console.log(values);
      console.log("*******************");
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
              <div className="mb-2 min-h-[95px]">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input 
                  name="name" 
                  type="text" 
                  id="name" 
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="gta"/>
                {errors.name && touched.name ? (
                <p className="text-amarillo text-md font-semibold font-primary">{errors.name}</p>
                ) : null}
              </div>
 

              {/* Description */}
              <div className="mb-2 min-h-[115px]">
                <label for="description"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea 
                  name="description" 
                  type="text" as="textarea" 
                  id="description" 
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..."/>
                {errors.description && touched.description ? (
                <p className="text-amarillo text-md font-semibold font-primary">{errors.description}</p>
                ) : null}                  
              </div>

              {/* released */}
              <div className="mb-2 min-h-[95px]">
                <label for="released"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Released</label>
                <input 
                  name="released" 
                  type="date" 
                  id="released" 
                  value={values.released}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                {errors.released && touched.released ? (
                <p className="text-amarillo text-md font-semibold font-primary">{errors.released}</p>
                ) : null}
              </div>

              {/* genders */}
              <div className="mb-2 min-h-[95px]">

                <BarraEleccion
                values={values}
                setValues={setValues}
                errors={errors}
                touched={touched}/>

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
                <button 
                  type="submit" 
                  className={`text-white w-auto  py-1.5 bg-verde  border text-oscuro font-bold text-base  rounded-lg   px-5  text-center ${isValid? 'bg-verde hover:bg-verde/80 ':'bg-verde/40'}`}
                  >
                    Create
                </button>

              </div>

          </form>

      </div>
    </div>
  )
}

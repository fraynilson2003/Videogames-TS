import * as Yup from "yup";

export const SchemaCreateVideogame = (genders)=>{

  let newGenders = genders.map((e)=>e.id) 
  const Schema = Yup.object({
    name: Yup.string().min(3).max(100).required("Please enter a name"),
    description: Yup.string().min(30, "please, enter more than 30 characters").required("Please enter a description of the job"),
    released: Yup.date().required(),
    genders: Yup.array().min(1, 'Select at least one gender').max(5, "the limit is 5 genres")
    .of(
      Yup.number().oneOf(newGenders)
    )
    .required("Select at least one gender"),
  })
  return Schema
}



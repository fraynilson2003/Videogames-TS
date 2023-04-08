import ContainerVideogames from './ContainerVideogames/ContainerVideogames'

export default function Videogames({isLoadingVideogame, setIsLoadingVideogame}) {


  return (
    <div className='flex flex-col rounded-none flex-1 bg-oscuro  h-auto mar-vid  
    md:rounded-md  md:mr-3 md:ml-2 xl:ml-2 xl:mx-auto'>
        <ContainerVideogames
        isLoadingVideogame={isLoadingVideogame}
        setIsLoadingVideogame={setIsLoadingVideogame}/>

    </div>
  )
}

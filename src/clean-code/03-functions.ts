(() => {

  // función para obtener información de una película por Id
  function getMovieById( movieId: string ) {
      console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById( id: string ) {
      console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorByID( ActorId: string ) {
      console.log({ ActorId });
  }
  
  // Crear una película

  interface Movie{
    cast : string [],
    description : string,
    rating : string,
    title : string
  }

  function createMovie({cast, description, rating , title} : Movie) {
      console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor( fullName: string, birthDate: Date ): boolean {
      
      // tarea asincrona para verificar nombre
      // ..
      // ..
      if ( fullName === 'fernando' ) return false;

      console.log('Crear actor');
      return true;        

  }

  


})();






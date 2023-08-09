# MiBookieLanding
//Es una aplicación web de deportes donde el usuario puede comentar y votar acerca de un partido.

//Secciones
Cuenta con varias secciones:
* Panel principal donde puedes ver los partidos del dá en curso revisar información acerca de el,
   comentar y votar acerca de quien sera el ganador. ( En caso de que el deporte cuente con empate tambien podras votar por este resultado)
* Secciones de equipo donde podras consultar las ligas, temporadas y partidos que esten disponibles,
* Sección de noticias donde podras consultar las noticias acerca de tu deporte favorito.
* Sección de perfil donde podrás consultar votos de partido (jugados y no jugados), podras ver quien te sigue y a quien estás siguiendo
  y podrás ver las selecciones de terceros.
* Sección de estadísticas donde cada que tu colocas un voto y el resultado es correcto se va registrado como acierto o fallo dependiendo el resultado.

//Tecnologías
* La aplicacion fue creada con React Js + Vite
* React-Router-Dom para eel enrutador dinámicos para evitar la carga del navegador.
* TanStack y Axios como librerias para el fetching de datos y el estadios de ellos en el caché,
  esto remplazando de mayor manera useEffect y fetch.
* Formik para el estado de los componentes del form remplazando al useState para controlar el estado de dichos componentes,
  un facilitar los eventos de formularios ligados a funciones de validaciond de campos(helpers).
* Zustand para la persistencia de datos en LocalStorage, en este caso un JWT.
* Los estilos eran brindados por Boostrap,  avanzó y migró a FlowBite taildwindCSS,
  para tener un poco mas clases de CSS sin meternos de lleno, ademas que FlowBite proporciona varios componnetes usados en esta.

  Esta aplicacion esta desplegada en vercel bajo el dominio de www.mibookie.app para vista previa
  Nota: toda esta información es generada por un panel de control y un backend creado en Node Js framework Express con mas de daros en MongoDb.

 Panel de control disponible en https://github.com/glezalonso/MiBookie-2 desplegada en vercel.
 Backedn disponible https://github.com/glezalonso/My-Bookie-Server desplegada en railway.
  
  
  
  


const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Agregamos 
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //agregamos Async
  try{  //Agregamos try y catch
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //Agregamos
  console.log(response); //cambié a response
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;//Se corrigen las comillas
  $l.textContent = `${data.location}`;
  
  }catch(err){
    handleError(err)
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
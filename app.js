let tasks = [
  {
    id: 0,
    owner: "Pelado Cáceres",
    name: "Wash the car",
    description: "Wash the car before crash it 💥🚗",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSynqaOG2CBeapwLA8A7W3C8kmHhNnNraWl7c2rz1eykm_dY_cjB9erHZawnIFOIo3MbcAts4L7N8W7otPrEPvFmzg9UJo7LONUpVhyPpz1gjDfbMOcetAy52k0YdDDoNaZSQ&usqp=CAc",
  },
  {
    id: 1,
    owner: "Developer #432",
    name: "Take humans out of Earth",
    description: "Looking for a new planet to destroy 🌎",
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg",
  },
  {
    id: 2,
    owner: "Another big fish",
    name: "Testing in Production",
    description: `We don't worry about testing, we test in production 🤪`,
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  },
  {
    id: 3,
    owner: "The return of the Pug",
    name: "Thinking about all the mankind problems",
    description: "Eat, Sleep and wear a jedi robe in order to solve it 🐶",
    imgUrl:
      "https://w0.peakpx.com/wallpaper/381/236/HD-wallpaper-pug-dog-pet-funny-sad.jpg",
  },
  {
    id: 4,
    owner: "Mark Zuckerberg",
    name: "Destroy the entire planet earth",
    description: "Encourage people to live in a metaverse🌈",
    imgUrl: "https://pbs.twimg.com/media/Ew2_PGEWgAE3V5-.jpg",
  },
];

let currentIdNumber = tasks.length;

// 0 - Bajar repo, todos los ejercicios seran parte
// del mismo proyecto js-dom-manipulation-essentials
// Hacer una funcion que cree dinamicamente las task
function createTaskComponent(task) {
  task.forEach(element => {
/*     let id = element.id
    let owner = element.owner
    let name = element.name
    let description = element.description
    let imgUrl = element.imgUrl */
    
    
    //loadTasks()
    loadTasks(element.id, element.owner, element.name, element.description, element.imgUrl);
    
  });


}

function loadTasks(id, owner, name, description, imgUrl) {
  const taskTemplate = `
  <div class = "template-element"> 
    <h4>ID: ${id}</h4>
    <h4>Owner: ${owner}</h4>
    <h4>Name: ${name}</h4>
    <h5>Description: ${description}</h5>
    <img src="${imgUrl}" alt="">

  </div>
  `
  const ul = document.getElementById('ul')

  const li = document.createElement('li');
  li.innerHTML = taskTemplate;

  li.onclick = deleteTaskHandler;

  ul.appendChild(li)
}

createTaskComponent(tasks)
// 1 - Funcion
// Mostrar en un mensaje de alerta los valores del form
function addTaskAlert(newTask) {
  
  let id = currentIdNumber
  let owner = document.getElementById('ownerInput').value
  let name = document.getElementById('nameInput').value
  let description = document.getElementById('descriptionInput').value
  let imgUrl = document.getElementById('imgUrlInput').value
  alert(`id: ${id} owner: ${owner} name: ${name} description: ${description} img: ${imgUrl}`)
}

// 2 - Funcion
// Agregar elemento en la lista al llenar el formulario

function addTaskHandler(event) {

  let id = currentIdNumber ++
  let owner = document.getElementById('ownerInput').value
  let name = document.getElementById('nameInput').value
  let description = document.getElementById('descriptionInput').value
  let imgUrl = document.getElementById('imgUrlInput').value

  tasks.push({
    id: id,
    owner: owner,
    name: name,
    description: description,
    imgUrl: imgUrl
  });
  console.log(tasks)
  loadTasks(id, owner, name, description, imgUrl);
}

function handleButtonClick(event) {
  event.preventDefault(); 
  addTaskAlert(); 
  addTaskHandler(); 
}

// 3 - Funcion
// Eliminar elemento en la lista al hacer click sobre el elemento
function deleteTaskHandler(taskElement) {
  const li = event.target.closest('li');
  const taskId = parseInt(li.querySelector('h4').innerText.split(': ')[1]);

  tasks = tasks.filter(task => task.id !== taskId);
  li.remove();

  redirectWhenNoTask();
}

// 4 - Funcion
// Crear un boton para vaciar/eliminar todas las tareas
function deleteAllTaskHandler() {
  tasks = []; 
  const ul = document.getElementById('ul');
  ul.innerHTML = ''; 

  redirectWhenNoTask();
}

// 5 - Funcion
// Si ya no quedan tareas navegar programaticamente
// a www.youtube.com
function redirectWhenNoTask() {
  if (tasks.length === 0) {
    window.location.href = 'https://www.youtube.com';
  }
}

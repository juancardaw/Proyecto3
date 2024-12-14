import './style.css';
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

 //Con este comando lo que hacemso es que la clave del printerest no se vea para el publico, ocultando. Lo que hacemso es añadir un archivo .env y poner los parametros y la clave que aparecen en ese archivo. Despues lo importamos aqui y lo ponemos en el enlace de la web mas abajo despues del client_id
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

const buildWebsite = () => {
  Header();
  Main();
  Footer();
  getPhotos("dogs"); //Palabra clave para que pinte fotos
};

const getPhotos = async (keyword, photoNum = 10, order = 'lastest') => {
  const data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=${photoNum}&order_by=${order}&client_id=${CLIENT_ID}`
  );

  const results = await data.json();
  const photos = results.results;
  printPhotos(photos);
};

const printPhotos = (photos) => {
  const container = document.querySelector("#results");
  

  if(photos.length === 0){
    container.innerHTML = "";
    const message = document.querySelector("#message");
    message.textContent = "Search another thing...";
  } else {
    container.innerHTML = "";
    message.textContent = "He encontrado " + photos.length + " fotos";
    for (const photo of photos) {
      const li = document.createElement("li");
      li.innerHTML = `
      <img src="${photo.urls.regular}" alt="${photo.alt_description}" />
      `
      container.appendChild(li);
    }
  }
};
//Primero pintamos otda la web
buildWebsite();


document.querySelector("#searchBtn").addEventListener("click", () => {
  const value = document.querySelector("#searchInput").value;
  const photoNumValue = document.querySelector("#countInput").value;
  const orderPag = document.querySelector("#orderPag").value;
  getPhotos(value, photoNumValue, orderPag);
});

//Este es el evento para que con el boton del "enter" podamos tambien hacer la busqueda
document.querySelector("#searchInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const value = document.querySelector("#searchInput").value;
    const photoNumValue = document.querySelector("#countInput").value;
    const orderPag = document.querySelector("#orderPag").value;
    getPhotos(value, photoNumValue, orderPag);
  }
});

//Esto es para poner el modo noche o modo dia
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'night') {
    document.body.classList.add('night');
    themeToggle.textContent = 'Cambiar a Modo Día';
  }

  themeToggle.addEventListener('click', () => {
    const isNight = document.body.classList.toggle('night');
    themeToggle.textContent = isNight ? 'Cambiar a Modo Día' : 'Cambiar a Modo Noche';
    localStorage.setItem('theme', isNight ? 'night' : 'day');
  });
});
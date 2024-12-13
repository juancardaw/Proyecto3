import "./Main.css";

const template = () => `
    <h2 id="message"></h2>
    <ul id="results"></ul>
`;

const listeners = () => { //Esto es simplemente para saber que el HTML del documento existe a traves del inspeccionador del navegador
    console.log(document.querySelector("#message"))
};

const Main = () => {
    document.querySelector("main").innerHTML = template();
};

export default Main;


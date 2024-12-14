import "./Header.css";

const template = () => `
<h1>Pinterest</h1>
<input type="text" id="searchInput" placeholder="Ex: Cars" />
<select id="countInput">
    <option value="10">10</option>;
    <option value="15">15</option>;
    <option value="20">20</option>;
    <option value="30">30</option>;
</select>
<select id="orderPag">
    <option value="latest">Latest</option>;
    <option value="oldest">Oldest</option>;
    <option value="popular">Popular</option>;
    <option value="views">Views</option>;
    <option value="downloads">Downloads</option>;
</select>

<button id="searchBtn">Search</button>
<button id="themeToggle">🌛</button>

`;

const Header = () => {
    document.querySelector("header").innerHTML = template();
};

export default Header;
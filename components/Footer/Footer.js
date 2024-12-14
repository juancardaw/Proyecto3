import "./Footer.css";

const template = () => `
<p>Copyright 2025 - Pinterest JuanCar DAW</p>
`;

const Footer = () => {
    document.querySelector("footer").innerHTML = template();
};

export default Footer;
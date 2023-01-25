const premier = document.getElementById("premier");
const salut = document.getElementById("salut");

const onClick = () => {
    alert("okok");
};

premier.addEventListener("click", onClick);




const onChange = () => {
    console.log("okok");
};

salut.addEventListener("input", onChange);
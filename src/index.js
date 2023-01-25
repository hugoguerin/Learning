const myButton = document.getElementById("premier");
const myInput = document.getElementById("salut");
const myList = document.getElementById("liste");

const onClick = () => {

    const li = document.createElement("li");
    li.innerHTML = myInput.value;
    myList.appendChild(li);
    //Attacher le li au ul

};

myButton.addEventListener("click", onClick);

const onChange = () => {
    console.log("okok");
};

myInput.addEventListener("input", onChange);




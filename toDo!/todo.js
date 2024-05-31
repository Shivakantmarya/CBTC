const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const logo = document.querySelector(".logo");
const container = document.querySelector(".container");
const para = document.querySelector("p");

para.classList.add("hide");
container.classList.add("hide");
logo.classList.remove("hide");

setInterval(()=>{
  container.classList.remove("hide");
  logo.classList.add("hide");
},2000)


inputBox.addEventListener("keyup", (e)=>{
    if(e.keyCode === 13){
        addTask();
    }
})

function addTask(){
    if(inputBox.value === ''){
        para.classList.remove("hide");
    }else{
        para.classList.add("hide");
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}



listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
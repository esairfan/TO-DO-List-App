const input = document.getElementById("input-box");
const list = document.getElementById("list_container");

function addTaskInList(){
    if(input.value === ''){
        alert("You have to write Something");
    }
    else{
        let list = document.createElement("li");
        list.innerHTML = input.value;
        list_container.appendChild(list);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        list.appendChild(span);
    }
    input.value="";
    saveTasks()
}
list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTasks()
    }
}, false);
function saveTasks(){
    localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();
"use strict";

var list = document.getElementById("itemsList");

function Save(item){
    let id = document.getElementById("itemId").value;

    if(id.length > 0){
        EditInList(id);
        document.getElementById("itemId").value = "";
    } else {
        if(item !== undefined){
            AddToList(item);
        } else {
            let inputText = GetInputValue();
            item = {
                id: id.value,
                title: inputText.title,
                comment: inputText.comment
            }
            
            Discard();
            AddToList(item);
        }
    }
}

function AddToList(item){
    if(item.innerText === "" || item.title === "" || item.title.length < 2 ){
        alert("Please write task title");
        return;
    } else {
        let myList = list;

        let myLi = document.createElement("li");
        let myId = WriteId();
        let myText = document.createTextNode(item.title);
    
        myLi.setAttribute("id", myId);
        myLi.setAttribute("class", "active");

        SetControls(myLi, myId);
    
        if(item.nodeName === "LI"){
            myText = document.createTextNode(item.innerText);
            myLi.setAttribute("title", item.title);
        } else {
            myLi.setAttribute("title", item.comment);
        }

        myLi.appendChild(myText);
        
        myList.appendChild(myLi);
    }
}

function EditInList(id){
    let myLi = document.getElementById(id);
    let inputText = GetInputValue();
    let newTitle = inputText.title;
    let newComment = inputText.comment;

    myLi.innerText = newTitle;
    myLi.title = newComment;
    SetControls(myLi, id);
    Discard();
}

function DeleteAll(){
    let myList = list;
    while (myList.childNodes.length > 0){
        myList.removeChild(myList.childNodes[0]);
    }
}

function ToggleStatus(e){
    e.currentTarget.classList.toggle("active");
    e.currentTarget.classList.toggle("done");
}

function EditItem(e){
    e.stopPropagation();
    let item = e.currentTarget.parentElement;
    let id = document.getElementById("itemId");
    let inputText = GetInputValue();
    let title = inputText._title;
    let comment = inputText._comment;

    item.classList.add("edited");
    title.value = item.innerText;
    comment.value = item.title;
    id.value = item.id;
}

function CloneItem(e){
    e.stopPropagation();
    let item = e.currentTarget.parentElement;
    Save(item);
}

function DeleteItem(e){
    let item = e.currentTarget.parentElement;
    let myList = list;
    myList.removeChild(item);
}

function Discard(){
    let inputText = GetInputValue();
    let title = inputText._title;
    let comment = inputText._comment;
    let editedItems = document.getElementsByClassName("edited");
    for(let i = 0; i < editedItems.length; i++){
        editedItems[i].classList.remove("edited");
    }

    title.value = "";
    comment.value = "";
}

function UseFilter(cond){
    let myList = list;
    let activeList = myList.getElementsByClassName("active");
    let doneList = myList.getElementsByClassName("done");

    let activeItems = document.getElementById("filterActive");
    let doneItems = document.getElementById("filterDone");

    switch(cond){
        case "active":
            for(let i = 0; i < doneList.length; i++){
                doneList[i].setAttribute("hidden", "true");
            };
            for(let i = 0; i < activeList.length; i++){
                activeList[i].removeAttribute("hidden");
            };
            activeItems.setAttribute("class", "active");
            doneItems.classList.remove("active");

            break;
        case "done":
            for(let i = 0; i < activeList.length; i++){
                activeList[i].setAttribute("hidden", "true");
            };
            for(let i = 0; i < doneList.length; i++){
                doneList[i].removeAttribute("hidden");
            };
            doneItems.setAttribute("class", "active");
            activeItems.classList.remove("active");

            break;
        default:
            for(let i = 0; i < activeList.length; i++){
                activeList[i].removeAttribute("hidden");
            };
            for(let i = 0; i < doneList.length; i++){
                doneList[i].removeAttribute("hidden");
            };
            doneItems.classList.remove("active");
            activeItems.classList.remove("active");

            break;
    }
}

function Search(){
    let currentSearchCondition = document.getElementById("searcher");
    let myList = list;

    currentSearchCondition.value;
    for(let i = 0; i < myList.children.length; i++){
        let liText = myList.children[i].innerText;
        if(liText.includes(currentSearchCondition.value)){
            myList.children[i].removeAttribute("hidden");
        } else {
            myList.children[i].setAttribute("hidden", "true");
        }
    }
}

function SetControls(li){
    let trash = document.createElement("i");
    let clone = document.createElement("i");
    let pen = document.createElement("i");

    trash.setAttribute("class", "fas fa-trash");
    trash.addEventListener("click", DeleteItem, false);
    clone.setAttribute("class", "fas fa-clone");
    clone.addEventListener("click", CloneItem, false);
    pen.setAttribute("class", "fas fa-pen");
    pen.addEventListener("click", EditItem, false);

    li.appendChild(trash);
    li.appendChild(clone);
    li.appendChild(pen);
    li.addEventListener("click", ToggleStatus, false)
}

function WriteId(){
    let myId = "_";
    let idPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 7; i++){
        myId += idPool.charAt(Math.floor(Math.random() * idPool.length));
    }
  
    return myId;
}

function GetInputValue(){
    let item = {
        title: "",
        comment: "",
        _title: "",
        _comment: ""
    };
    item._title = document.getElementById("itemTitle");
    item._comment = document.getElementById("itemComment");
    item.title = document.getElementById("itemTitle").value;
    item.comment = document.getElementById("itemComment").value;

    return item;
}
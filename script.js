"use strict";

function Save(item){
    let id = document.getElementById("itemId").value;
    if(id.length > 0){
        EditInList(id);
        document.getElementById("itemId").value = "";
    } else {
        if(item !== undefined){
            AddToList(item);
        } else {
            let title = document.getElementById("itemTitle");
            let comment = document.getElementById("itemComment");
            item = {
                id: id.value,
                title: title.value,
                comment: comment.value
            }
            title.value = "";
            comment.value = "";
        
            AddToList(item);
        }
    }
}

function AddToList(item){
    if(item.innerText === "" || item.title === "" || item.title.length < 2 ){
        alert("Please write task title");
        return;
    } else {
        let myList = document.getElementById("itemsList");
        let myLi = document.createElement("li");
        let myId = WriteId(item);
        let myText = document.createTextNode(item.title);
    
        myLi.setAttribute("id", myId);
        myLi.setAttribute("class", "active");
        SetControls(myLi, myId);
        // myLi.setAttribute("onclick", "ToggleStatus(" + myId + ")");
    
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
    let newTitle = document.getElementById("itemTitle");
    let newComment = document.getElementById("itemComment");

    myLi.innerText = newTitle.value;
    myLi.title = newComment.value;
    SetControls(myLi, id);
    Discard();
}

function DeleteAll(){
    let myList = document.getElementById("itemsList");
    while (myList.childNodes.length > 0){
        myList.removeChild(myList.childNodes[0]);
    }
}

function ToggleStatus(item){
    if(item.currentTarget.classList.contains("active")){
        item.currentTarget.classList.remove("active");
        item.currentTarget.classList.add("done");
    } else {
        item.currentTarget.classList.remove("done");
        item.currentTarget.classList.add("active");
    }
}

function EditItem(e){
    e.stopPropagation();
    let item = e.currentTarget.parentElement;
    let id = document.getElementById("itemId");
    let title = document.getElementById("itemTitle");
    let comment = document.getElementById("itemComment");

    item.classList.add("edited");
    title.value = item.innerText;
    comment.value = item.title;
    id.value = item.id;
}

function CloneItem(e){
    e.stopPropagation();
    debugger;
    let item = e.currentTarget.parentElement;
    Save(item);
}

function DeleteItem(e){
    let item = e.currentTarget.parentElement;
    let myList = document.getElementById("itemsList");
    myList.removeChild(item);
}

function Discard(){
    let title = document.getElementById("itemTitle");
    let comment = document.getElementById("itemComment");
    let editedItems = document.getElementsByClassName("edited");
    for(let i = 0; i < editedItems.length; i++){
        editedItems[i].classList.remove("edited");
    }

    title.value = "";
    comment.value = "";
}

function UseFilter(cond){
    let myList = document.getElementById("itemsList");
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
    let myList = document.getElementById("itemsList");

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
    // trash.setAttribute("onclick", "DeleteItem(" + id + ");");
    clone.setAttribute("class", "fas fa-clone");
    clone.addEventListener("click", CloneItem, false);
    // clone.setAttribute("onclick", "CloneItem(" + id + ");");
    pen.setAttribute("class", "fas fa-pen");
    pen.addEventListener("click", EditItem, false);
    // pen.setAttribute("onclick", "EditItem(" + id + ");");

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

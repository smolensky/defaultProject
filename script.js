"use strict";

var list;

function Save(){
    let item;
    let title = document.getElementById("title");
    let comment = document.getElementById("comment");
    item = {
        title: title.value,
        comment: comment.value
    }
    title.value = "";
    comment.value = "";
    debugger;

    AddToList(item)
}

function AddToList(item){
    let myList = document.getElementById("itemsList");
    let myLi = document.createElement("li");
    let myId = WriteId(item);
    let trash = document.createElement("i");
    let clone = document.createElement("i");
    let pen = document.createElement("i");
    let myT = document.createElement("span");
    let myText = document.createTextNode(item.title);

    trash.setAttribute("class", "fas fa-trash");
    trash.setAttribute("onclick", "DeleteItem(" + myId + ")");
    clone.setAttribute("class", "fas fa-clone");
    clone.setAttribute("onclick", "CloneItem(" + myId + ")");
    pen.setAttribute("class", "fas fa-pen");
    pen.setAttribute("onclick", "EditItem(" + myId + ")");

    myT.appendChild(myText);
    myLi.appendChild(myT);
    myLi.appendChild(trash);
    myLi.appendChild(clone);
    myLi.appendChild(pen);

    myLi.setAttribute("id", myId);
    myLi.setAttribute("title", item.comment);
    myLi.setAttribute("onclick", "ToggleStatus(" + myId + ")")
    myList.appendChild(myLi);
}

function WriteId(item){
    let id = item.id;
    debugger;
    if(id === undefined){
        id = "_" + item.title;
        id = id.replace(/\s/g,'');
    } else {
        id = id;
    }

    return id;
}

function DeleteAll(){
    let myList = document.getElementById("itemsList");
    while (myList.childNodes.length > 0){
        myList.removeChild(myList.childNodes[0]);
    }
}

function ToggleStatus(item){
    item.classList.toggle("done");
}

function EditItem(item){
    debugger;
    item.classList.toggle("edited");
    let title = document.getElementById("title");
    let comment = document.getElementById("comment");

    title.value = item.innerText;
    comment.value = item.title;
}

function DeleteItem(item){
    let myList = document.getElementById("itemsList");
    myList.removeChild(item);
}
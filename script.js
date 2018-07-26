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
    let myText = document.createTextNode(item.title);

    trash.setAttribute("class", "fas fa-trash");
    trash.setAttribute("onclick", "DeleteItem()");
    clone.setAttribute("class", "fas fa-clone");
    clone.setAttribute("onclick", "CloneItem()");
    pen.setAttribute("class", "fas fa-pen");
    pen.setAttribute("onclick", "EditItem()");

    myLi.appendChild(myText);
    myLi.appendChild(trash);
    myLi.appendChild(clone);
    myLi.appendChild(pen);
    debugger;

    myLi.setAttribute("id", myId);
    myLi.setAttribute("title", item.comment);
    myList.appendChild(myLi);
}

function WriteId(item){
    let id = item.id;
    debugger;
    if(id === undefined){
        id = "_" + item.title;
        id = id.replace(/\s/g,'');
    } else {
        id = id + "n"
    }

    return id;
}
var list = document.querySelector('ul');
var item = { id: -1, task: "none", status: "none"};

function addItem() {
    var ul = document.getElementById("itemsList");
    var li = document.createElement("li");
    var a = document.getElementById("itemText");
    var itemText = a.value;
    var t = document.createTextNode(itemText);

    li.appendChild(t);
    ul.appendChild(li);

    //clear text input
    document.getElementById("itemText").value = "";
}

list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);
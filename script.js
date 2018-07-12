//document.writeln('hello');
var item = {
	title: 'none',
	description: 'none'
};
var itemList = [];

function addNewItem(){
	var title = this.itemTitle.value;
	var description = this.itemDescription.value;
	
	item.title = title;
	item.description = description;
	
	itemList.unshift(item);
	
	updateItemList(itemList);
}

function updateItemList(itemList) {
	var newItemContainer = document.getElementById('item');
	var itemLi = document.createElement('li');
	var itemTitle1 = document.createTextNode(item.title);
	var itemDescription1 = document.createTextNode(item.description);
	
	
	itemLi.appendChild(itemTitle1);
	itemLi.appendChild(itemDescription1);
	
	newItemContainer.appendChild(itemLi);
	debugger;
}
//document.writeln('hello');
var item = {
	id: 1,
	title: 'none',
	description: 'none',
	status: 'none'
};
var itemList = [];

function createItem(a){
	debugger;
	item.title = a.itemTitle.value;
	item.description = a.itemDescription.value;
	
	return item;
}

function setItemStatus(a){
	if(a !== ''){ 
		return item.status = a; 
	} else {
		return item.status = 'planned';
	}
}

function saveItem(){
	debugger;
	var draftItem = createItem(this);
	draftItem.status = setItemStatus('');
	
	itemList.push(draftItem);
}




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





function showArrayAsItemList(o){
	
}


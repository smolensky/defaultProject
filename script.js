//document.writeln('hello');
var item = {
	title: 'none',
	description: 'none'
};

function addNewItem(){
	var title = this.itemTitle.value;
	var description = this.itemDescription.value;
	
	item.title = title;
	item.description = description;
	
	var newItemContainer = document.getElementById('item');
	newItemContainer.innerHTML += 
	'<li>\
	<span>' + item.title + '</span>\
	</br>\
	<p>' + item.description + '</p>\
	</li>';
	
	debugger;
}
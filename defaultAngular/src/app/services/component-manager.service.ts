import { Injectable } from '@angular/core';
import { EditPanelComponent } from '../components/edit-panel/edit-panel.component';
import { TodoItem, TodoItems } from '../models/items-list';
import { ItemsPanelComponent } from '../components/items-panel/items-panel.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentManagerService {
  updateEditPanel(item: TodoItem) : void {
    this.editPanel.updateComponent(item);
  }

  updateItemsPanel(items: TodoItems) : void {
    this.itemsPanel.updateList(items);
  }

  constructor(private editPanel: EditPanelComponent, private itemsPanel: ItemsPanelComponent) { }
}

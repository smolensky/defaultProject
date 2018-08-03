import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { EditPanelComponent } from './edit-panel/edit-panel.component';
import { ItemsPanelComponent } from './items-panel/items-panel.component';
import { TodoItems } from './items-list';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RightMenuComponent,
    EditPanelComponent,
    ItemsPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoItems],
  bootstrap: [AppComponent]
})
export class AppModule { }

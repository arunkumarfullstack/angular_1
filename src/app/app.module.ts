import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdkDragDropConnectedSortingComponent } from './cdk-drag-drop-connected-sorting/cdk-drag-drop-connected-sorting.component';
import { MaterialModule } from './material-module/material.module';
import { SendEmailComponent } from './send-email/send-email.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CdkDragDropConnectedSortingComponent,
    SendEmailComponent,
    SendMessageComponent,
    PopupDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
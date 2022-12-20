import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdkDragDropConnectedSortingComponent } from './cdk-drag-drop-connected-sorting/cdk-drag-drop-connected-sorting.component';
import { MaterialModule } from './material-module/material.module';
import { BuildComponent } from './app-build/app-build.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CdkDragDropConnectedSortingComponent,
    BuildComponent,
    PopupDialogComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

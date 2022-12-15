import { Component } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cdk-drag-drop-connected-sorting',
  templateUrl: './cdk-drag-drop-connected-sorting.component.html',
  styleUrls: ['./cdk-drag-drop-connected-sorting.component.css']
})
export class CdkDragDropConnectedSortingComponent {
  menuGroup = ['Events', 'Actions'];
  menus = ['Events : User Subscribed', 'Actions : Send Email', 'Actions : Send SMS'];

  menusSelected = [];
  checkIfExists = (menu: string, groupMenu): boolean => {
    return menu.includes(groupMenu);
    // if (this.menus.find((x) => { return x.includes(menu) })?.length > 0) {
    //   return true;
    // }
    // return false;
  }

  // returnComponent = (menu: string): boolean => {
  //   return menu.includes(groupMenu);
  //   // if (this.menus.find((x) => { return x.includes(menu) })?.length > 0) {
  //   //   return true;
  //   // }
  //   // return false;
  // }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );    
    }
  }
}

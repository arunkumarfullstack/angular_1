import { Component } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Menu } from '../type';
import { AppSettingService } from '../services/AppSetting/app-setting.service';
import { MenuService } from '../services/menu/menu.service';


@Component({
  selector: 'app-cdk-drag-drop-connected-sorting',
  templateUrl: './cdk-drag-drop-connected-sorting.component.html',
  styleUrls: ['./cdk-drag-drop-connected-sorting.component.css']
})
export class CdkDragDropConnectedSortingComponent {
  menuGroup = ['event', 'action'];
  menus: Menu[] = [];
  menusSelected = [];
  constructor(private menuService: MenuService, private appSetting: AppSettingService) {

  }
  ngOnInit() {
    this.appSetting.getMenus().subscribe(menuValues => this.menus = menuValues);
    this.menuService.menuCast.subscribe(menuSelectedValues => this.menusSelected = menuSelectedValues);
  }

  checkIfExists = (menu: Menu, groupMenu): boolean => {
    return menu.type === groupMenu;
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

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(this.menusSelected);
    }
  }
}

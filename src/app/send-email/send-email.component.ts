import { Component, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';
import { MenuService } from '../services/menu/menu.service';
import { Menu } from '../type';

export interface SendEmail {
  email: string;
  message: string;
}

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})


export class SendEmailComponent {
  @Input() item: Menu;
  email: string;
  message: string;
  menusSelected: string[];
  constructor(public dialog: MatDialog, private menuService: MenuService) { }
  ngOnInit() {
    this.menuService.menuCast.subscribe(menuSelectedValues => this.menusSelected = menuSelectedValues);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupDialogComponent, {
      data: { email: this.email, message: this.message },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.email = result;
      this.message = result;
    });
  }
}

import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';
import { DialogErrorComponent } from '../components/dialog-error/dialog-error.component'; 

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }
  openConfirmDialog(){
    this.dialog.open(DialogComponent,{
      width: '250px',
       data: 'Guardado con exitos',
      panelClass: 'content-container',
      disableClose:true
    });
  };

  openErrorDialog(){
    this.dialog.open(DialogErrorComponent,{
      width: '250px',
      data: 'Error Intente de nuevo',
      panelClass: 'content-container',
      disableClose:true
    });
  };
}

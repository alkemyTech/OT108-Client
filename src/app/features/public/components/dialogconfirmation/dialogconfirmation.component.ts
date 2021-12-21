import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogconfirmation',
  templateUrl: './dialogconfirmation.component.html',
  styleUrls: ['./dialogconfirmation.component.scss']
})
export class DialogconfirmationComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DialogconfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public message:String
    ) { }

  ngOnInit(): void {
  }

}

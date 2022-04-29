import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = new User();
  allUsers = [];
  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'userId' })
      .subscribe((users: any) => {
        console.log('update from firestore', users);
        this.allUsers = users;
        console.log('allUsers', this.allUsers)
      });

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

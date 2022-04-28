import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  user: User;
  loading = false;
  birthDate: Date;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore:AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    console.log(this.user);
    this
      .firestore
      .collection('users')
      .doc(this.user.userId)
      .update(this.user.toJSON())
      .then((result: any) => {
        console.log('user has been updated ', result);
        this.loading = false;
        this.dialogRef.close();
      })
  }
}

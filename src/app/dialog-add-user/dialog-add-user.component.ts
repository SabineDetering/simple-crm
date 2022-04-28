import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate: Date;
  loading = false;

  constructor(private firestore: AngularFirestore,public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  ngOnInit(): void {
  }

  firstSaveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this
      .firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result: any) => {
        console.log('user has been added ', result);
        this.user.userId = result.id;
        console.log('this.user after getting id ', this.user);
        this.saveUserWithId();
        // this.loading = false;
        // this.dialogRef.close();
      })
  }


  saveUserWithId() {
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

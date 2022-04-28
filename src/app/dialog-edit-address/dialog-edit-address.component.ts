import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {
  user: User;
  loading = false;
  // userId = 'ljgpfZQRvzkG7CX3ASVc';

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>,private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }


  saveUser() {
    this.loading = true;
    console.log('user from dialog' ,this.user);
    this
      .firestore
      .collection('users')
      .doc('this.user.userId')
      .update(this.user.toJSON())
      .then((result: any) => {
        console.log('user has been updated ', result);
        this.loading = false;
        this.dialogRef.close();
      })
}

}

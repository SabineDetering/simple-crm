import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId: string;
  public user: User = new User;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('params ', params);
      this.userId = params['userId'];
      console.log('loaded id', this.userId);
      this.firestore
        .collection('users')
        .doc(this.userId)
        .valueChanges()
        .subscribe((user: any) => this.user = new User(user));
    });
  }

  openAddressDialog() {
    const dialogRef = this.dialog.open(DialogEditAddressComponent);
    //copy user 
    dialogRef.componentInstance.user = new User(this.user.toJSON());
    console.log('übergabe an dialoig ', dialogRef.componentInstance.user);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openUserDetailDialog() {
    const dialogRef = this.dialog.open(DialogEditUserComponent);
    //copy user
    dialogRef.componentInstance.user = new User(this.user.toJSON());

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}

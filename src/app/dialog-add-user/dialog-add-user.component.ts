import { Component, InjectionToken,OnInit } from '@angular/core';
import { User } from '../../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate: Date;
  loading = false;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this
      .firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result: any) => {
        console.log('user has been added ', result);
        this.loading = false;
      })
  }

}

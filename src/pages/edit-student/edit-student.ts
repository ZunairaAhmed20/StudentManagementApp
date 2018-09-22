import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentsService } from '../../services/students.service';
import { IStudent } from '../../models/student.model';

/**
 * Generated class for the EditSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-student',
  templateUrl: 'edit-student.html',
})
export class EditStudentPage {

  student: IStudent;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private students: StudentsService) {
  }

  ionViewWillLoad() {
   this.student = this.navParams.get('song');
  }

  saveSong(student: IStudent) {
    this.students.editStudent(student).then(() => {
  this.navCtrl.setRoot('HomePage');
  });
  }

  deleteSong(student: IStudent) {
    this.students.removeStudent(student).then(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }

}

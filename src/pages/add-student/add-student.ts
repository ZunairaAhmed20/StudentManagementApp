import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/song.model';
import { StudentsService } from '../../services/students.service';
import {  IStudent } from './../../models/student.model';
import * as moment from 'moment';
import {Guid} from 'guid-typescript';


/**
 * Generated class for the AddSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-student',
  templateUrl: 'add-student.html',
})
export class AddStudentPage {

  date1: string;
  date2: string;
  date3: string;  

  student: IStudent = {
    key: Guid.create().toString(),
    name:'',
    fname:'',
    currentClass:'',
    phNumber:'',
    date1:'',
    date2:'',
    date3:''    
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private songs: StudentsService) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSongPage');
  }

  addSong() {
    this.student.date1  = moment(this.date1, "YYYY-MM-DD").format("YYYY-MM-DD");
    this.student.date2  = moment(this.date2, "YYYY-MM-DD").format("YYYY-MM-DD");
    this.student.date3  = moment(this.date3, "YYYY-MM-DD").format("YYYY-MM-DD");

    this.songs.addStudent(this.student).then(ref => {
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    });
  }

  goAnOtherPage(navUrl:string) {
    this.navCtrl.setRoot(navUrl);
  }


}

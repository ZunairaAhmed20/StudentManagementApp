import { Injectable } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { IStudent } from './../models/student.model';


@Injectable()
export class StudentService {

    private studentsList: Array<IStudent> = []; // this.db.list<Student>('students-list');
    

    //constructor(private db: AngularFirestore) {}
    constructor() {}

    getStudentList() {
        return this.studentsList;
    }
     
    addStudent(student: IStudent) {
        debugger
        this.studentsList.push(student);
        return this.studentsList;
    }
        
    editStudent(student: IStudent) {

        for(let i=0; i < this.studentsList.length; i++){
            if(this.studentsList[i].key == student.key){
                this.studentsList[i] = student;
            }
        }

        //return this.studentsList.update(student.key, student);
        return this.studentsList;
    }
    removeSong(student: IStudent) {
        for(let i= this.studentsList.length - 1; i >= 0; i--){
            if(this.studentsList[i].key == student.key){
                this.studentsList.splice(i,0);
                break;
            }
        }
        //return this.studentsList.remove(student.key);
        return this.studentsList;
    }
}

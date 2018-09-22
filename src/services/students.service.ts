import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { IStudent } from './../models/student.model';

@Injectable()
export class StudentsService {

    private studentListRef = this.db.list<IStudent>('student-list');
    
    constructor(private db: AngularFireDatabase) {}

    getStudentList() {
        return this.studentListRef;
    }

    addStudent(song: IStudent) {
        return this.studentListRef.push(song);
    }
    
    editStudent(song: IStudent) {
        return this.studentListRef.update(song.key, song);
    }

    removeStudent(song: IStudent) {
        return this.studentListRef.remove(song.key);
    }
}

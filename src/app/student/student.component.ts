import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Student {
  constructor(
    public name: string,
    public email: string,
    public city: string,
    public steet: string
  ) { }
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  citys = ["Toronto", "London", "Kitchener"];

  student = new Student("Haytham", "aaa@ddd.com", this.citys[0],"");

  student_submited = new Student("", "", this.citys[0],"");

  constructor() { }

  showData() {
    return JSON.stringify(this.student);
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.student_submited.name = f.value.name;
    this.student_submited.email = f.value.email;
  }
}

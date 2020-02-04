import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  searchTerm;
  employees=[{id:1,name:"mark",gender:"male"},
{id:2,name:"mary",gender:"male"},
{id:3,name:"john",gender:"female"}]

changeName(){
  this.employees[0].name="jordan";
}
}

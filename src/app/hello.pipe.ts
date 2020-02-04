import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './Employee';

@Pipe({
  name: 'hello',
  pure:true
})
export class HelloPipe implements PipeTransform {

  transform(employees:Employee[],searchTerm:string): any {
    if(!employees||!searchTerm){
      return employees;
    }
    return employees.filter(employee => 
      employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
  }

}

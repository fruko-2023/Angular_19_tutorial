import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-structural-directive-ngfor-vs-for',
  imports: [CommonModule],
  templateUrl: './structural-directive-ngfor-vs-for.component.html',
  styleUrl: './structural-directive-ngfor-vs-for.component.scss'
})
export class StructuralDirectiveNgforVsForComponent {
  employees: any[] = [
    { id: 1, name: 'John Doe', position: 'Software Engineer' ,email:"john@gmail.com"},
    { id: 2, name: 'Jane Smith', position: 'UI/UX Designer' ,email:"jane@gmail.com"},
    { id: 3, name: 'Michael Johnson', position: 'Project Manager',email:"michael@gmail.com" },
    { id: 4, name: 'Emily Davis', position: 'Quality Assurance Analyst' ,email:"emily@gmail.com"},
    { id: 5, name: 'David Wilson', position: 'DevOps Engineer' ,email:"david@gmail.com"}
  ];

companyList: string[] = ['Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook',"Netflix", "Tesla", "IBM", "Intel", "Oracle"];
    // companyList: string[] = [];
}

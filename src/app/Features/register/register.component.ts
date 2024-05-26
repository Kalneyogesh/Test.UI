import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  UserName:String='';
  Password:String='';
  UserType:String='';
  register(){
    console.log(this.UserName);
    console.log(this.Password);
    console.log(this.UserType);

  }
}

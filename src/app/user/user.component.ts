import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private userdata:any;
  private selecteduser: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe((res)=>{
      console.log(res.json());
      this.userdata = res.json();
    },
    
    (err)=>{
      console.log(err);
    })

  }

  selectedData(user){
    this.selecteduser = user;
    console.log(user);
  }



}

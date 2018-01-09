import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selecteduser',
  templateUrl: './selecteduser.component.html',
  styleUrls: ['./selecteduser.component.css']
})
export class SelecteduserComponent implements OnInit {

private user:any;
private displayuser:any = {}

@Input()
selected:any;

  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.routes.snapshot.paramMap.get('id'));
  }


  ngOnChanges(change){
    console.log(change)
    this.displayuser = change.selected.currentValue;
  }

}

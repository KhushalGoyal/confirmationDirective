import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-messanger',
    templateUrl: './messanger.component.html',
    styleUrls: ['./messanger.component.scss']
})

export class MessangerComponent implements OnInit{
  variables = [{name : "Khushal", id : 1},{name : "Rahul", id : 2}]
  delete(x){
    console.log("Delete -- > ",x)
  }
  ngOnInit(){
      
  }

} 
import { Component, OnInit, Input } from '@angular/core';
import { square} from '../../models/square.model'
import {SquareService } from '../../square.service'
//import service
@Component({
  selector: 'app-square-details',
  templateUrl: './square-details.component.html',
  styleUrls: ['./square-details.component.scss']
})
export class SquareDetailsComponent implements OnInit {
  constructor(private squareService : SquareService) { }
  @Input() square : square
 
  id = null
 color = ""
  ngOnInit(): void {
    if(square) {
      this.color = this.square.color
      this.id = this.square.id

    }
    
   
  }

  onChangeColor() {

    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    this.color = color
    // let id = this.square.id
    
    
    this.squareService.updateSquare(this.id, color)


  }
 
}

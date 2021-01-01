import { Component, OnInit, Input } from '@angular/core';
import { square } from '../../models/square.model'
import { SquareService } from '../../square.service'

@Component({
  selector: 'app-square-details',
  templateUrl: './square-details.component.html',
  styleUrls: ['./square-details.component.scss']
})
export class SquareDetailsComponent implements OnInit {
  constructor(private squareService: SquareService) { }
  @Input() square: square

  id = null
  color = ""
  ngOnInit(): void {
    if (this.square) {
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
    this.square.color = color
    this.squareService.updateSquare(this.square)

  }

}

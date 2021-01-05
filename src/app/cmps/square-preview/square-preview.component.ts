import { Component, OnInit, Input } from '@angular/core';
import { Square } from 'src/app/models/square.model';
import { SquareService } from '../../services/square.service'

@Component({
  selector: 'app-square-preview',
  templateUrl: './square-preview.component.html',
  styleUrls: ['./square-preview.component.scss']
})
export class SquarePreviewComponent implements OnInit {

  constructor(private squareService: SquareService) { }
  @Input() square: Square

  squareId = null
  squareColor = null

  ngOnInit(): void {
    if (this.square) {   //if square has loaded into square-preview- write properties to local variables
      this.squareColor = this.square.color
      this.squareId = this.square.id
    }
  }

  private randomHex(): string {  //generate random hexidecimal color- new color for square
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  public onChangeColor() { //on click event- color change update
    this.squareColor = this.randomHex()   //write new color to local color variable
    this.square.color = this.squareColor  //write new color in local square variable
    this.squareService.updateSquare(this.square)  //send local square to service- update color in db
  }
}

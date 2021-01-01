import { Injectable } from '@angular/core';
import { square } from '../app/models/square.model'
//import http
@Injectable({
  providedIn: 'root'
})
export class SquareService {
  squares = []
  constructor() { } // importim

  createId() {
    let id = Math.floor(Math.random() * 300) + 100;
    return id
  }
  createColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color
  }
  createSquare(): square {

    let square = {
      color: this.createColor(),
      id: this.createId()
    }
    return square
  }

  public makeSquareArray() {
    let square = []
    for (let i = 0; i < 9; i++) {
      square.push(this.createSquare())
    }
    this.squares = square
    console.log(this.squares);

  }
  //query return squares
  public query(): square[] {
    this.makeSquareArray()
    return this.squares

  }
  public getIndexById(id) {
    let squares = this.squares
    let square = squares.find(square => square.id === id);
    let index = this.squares.indexOf(square)
    return index
  
    
  }
  public updateSquare(squareId, newColor) {
    let indexOfSquare = this.getIndexById(squareId)
    this.squares[indexOfSquare].color = newColor
  }
}




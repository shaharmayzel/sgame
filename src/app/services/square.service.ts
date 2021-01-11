import { Injectable } from '@angular/core';
import { Square } from '../models/square.model'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class SquareService {

  squaresCollection: AngularFirestoreCollection<Square>
  squares: Observable<any[]>
  renderers: any
  meshes: any

  constructor(public db: AngularFirestore) {
    this.squaresCollection = db.collection<Square>('squares')
    this.squares = this.squaresCollection.valueChanges()
    // this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderers = {}
    this.meshes = {}
  }

  public loadSquares(): any[] { //return squares array from db
    let squares = []
    this.squaresCollection.ref.get().then(data => {
      data.forEach(square => {
        squares.push(square.data())
      });

    })
    return squares
  }

  public updateSquare(square) { //find square to update by id and update it in db
    let dbid = null
    this.squaresCollection.ref.get().then(data => {
      data.forEach(dbsquare => {
        if (dbsquare.data().id === square.id) {
          dbid = dbsquare.id
          this.squaresCollection.doc(dbid).update(square)
        }
      });
    })


  }


  // If I ever want to create new squares:

  public saveSquare(squares) {
    squares.forEach(square => {
      this.squaresCollection.add(square)
    })
  }
  private createId(): number {
    let id = Math.floor(Math.random() * 300) + 100;
    return id
  }
  private createColor(): number {
    let color = Math.random() * 0xffffff
    return color
  }
  private createSquare(): Square {
    let square = {
      color: this.createColor(),
      id: this.createId()
    }
    return square
  }
  public createSquareArray() {
    for (let i = 0; i < 9; i++) {
      this.squaresCollection.add(this.createSquare())

    }
  }


}
import {
  Injectable
} from '@angular/core';
import {
  square
} from '../app/models/square.model'
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore'

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SquareService {

  squaresCollection: AngularFirestoreCollection<square>
  squares: Observable<any[]>

  private squareDoc: AngularFirestoreDocument<square>;

  constructor(public db: AngularFirestore) {
    this.squaresCollection = db.collection<square>('squares')
    this.squares = this.squaresCollection.valueChanges()
  }

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



  public createSquareArray() {

    for (let i = 0; i < 9; i++) {
      this.squaresCollection.add(this.createSquare())
      console.log(i);

    }

  }


  public loadSquares() {
    let squares = []
    this.squaresCollection.ref.get().then(data => {
      data.forEach(square => {
        squares.push(square.data())
      });

    })
    return squares
  }

  public saveSquares(squares) {
    squares.forEach(square => {
      this.squaresCollection.add(square)
    })
  }

  public updateSquare(square) {
    let dbid = null
    this.squaresCollection.ref.get().then(data => {
      data.forEach(dbsquare => {
        if (dbsquare.data().id === square.id) {
          dbid = dbsquare.id
          this.squaresCollection.doc(dbid).update(square)
          console.log(dbid, square);
        }
      });
    })


  }

  // public query(): any {
  //   let squares = []
  //   this.squaresCollection.ref.get().then(data => {
  //     data.forEach(square => {
  //       squares.push(square.data())
  //     });
  //   })
  //   return squares
  // }

}

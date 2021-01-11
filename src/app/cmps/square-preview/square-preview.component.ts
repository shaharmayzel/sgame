import { Component, OnInit, Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { Square } from 'src/app/models/square.model';
import { SquareService } from '../../services/square.service'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


@Component({
  selector: 'app-square-preview',
  templateUrl: './square-preview.component.html',
  styleUrls: ['./square-preview.component.scss']
})
export class SquarePreviewComponent implements OnInit {

  constructor(private squareService: SquareService) { }
  @Input() square: Square


  scene = new THREE.Scene();
  light = new THREE.PointLight(0xFFFFFF, 1, 500)
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  renderer = null
  geometry = null
  material = null
  mesh = null
  renderRequested = null



  ngOnInit(): void {
    const id = this.square.id
    let renderers = this.squareService.renderers
    if (renderers.hasOwnProperty(id)) {
      this.renderer = renderers[id]
    }
    else {
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.squareService.renderers[id] = this.renderer

      document.getElementsByClassName("square-wrap")[0].appendChild(this.renderer.domElement);
      this.renderer.domElement.addEventListener('click', this.onClickCube)
    }

    this.startScene()

  }

  startScene(): void {
    this.renderer.setClearColor("#fff")
    this.light.position.set(10, 0, 25)
    this.renderer.setSize(window.innerWidth / 3, window.innerHeight / 3)
    this.camera.position.z = 2

    window.addEventListener('resize', () => { //resize
      this.renderer.setSize(window.innerWidth / 3, window.innerHeight / 3);
      this.camera.aspect = (window.innerWidth / 3) / (window.innerHeight / 3)

      this.camera.updateProjectionMatrix();

    })

    this.addObject()
  }



  addObject(): void {
    const id = this.square.id
    let meshes = this.squareService.meshes
    if (meshes.hasOwnProperty(id)) {
      meshes[id].material = new THREE.MeshLambertMaterial({
        color: this.square.color
      })
      this.mesh = meshes[id]

    }
    else {
      this.geometry = new THREE.BoxGeometry(1, 1, 1);
      this.material = new THREE.MeshLambertMaterial({
        color: this.square.color
      })
      this.mesh = new THREE.Mesh(this.geometry, this.material)
      this.squareService.meshes[id] = this.mesh

    }
    this.light.position.set(10, 0, 25)
    this.scene.add(this.mesh);
    this.scene.add(this.light)
    this.render()


  }


  render = (): any => {

    requestAnimationFrame(this.render)
    this.mesh.rotation.x += 0.002 //get faster feature
    this.renderer.render(this.scene, this.camera)

  }


  onClickCube = (): void => {
    let meshes = this.squareService.meshes
    const id = this.square.id
    let color = Math.random() * 0xffffff
    if (meshes.hasOwnProperty(id)) {
      meshes[id].color = color
    }
    this.square.color = color
    this.squareService.updateSquare(this.square)
  }

}







import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  alertClass: string = 'alert-primary';
  loading: boolean = false;
  buttonText: string = 'Subir Archivo'
  objectClass: any = {
    willDanger: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  subirArchivo() {
    this.loading = true;
    this.buttonText = 'Cargando...'

    setTimeout( () => {
      this.loading = false;
      this.buttonText = 'Subir Archivo';
    }, 2500);
  }

}

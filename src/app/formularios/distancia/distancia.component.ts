import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent implements OnInit {
  formulario2!: FormGroup;
  resultado:number=0;

  constructor(){}
  ngOnInit(): void {
      this.formulario2=new FormGroup({
        numero1: new FormControl('',Validators.required),
        numero2: new FormControl('',Validators.required),
        numero3: new FormControl('',Validators.required),
        numero4: new FormControl('',Validators.required)
      });
  }
  calcularDistancia():void{
    const numero1=this.formulario2.get('numero1')?.value;
    const numero2=this.formulario2.get('numero2')?.value;
    const numero3=this.formulario2.get('numero3')?.value;
    const numero4=this.formulario2.get('numero4')?.value;

    
    this.resultado = Math.sqrt(Math.pow((numero3 - numero1), 2) + Math.pow((numero2 - numero4), 2));
  }
}

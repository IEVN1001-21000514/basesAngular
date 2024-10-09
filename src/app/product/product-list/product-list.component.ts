import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  imageWidth:number=200;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  mostrarImagen():void{
    this.muestraImg=!this.muestraImg
  }

  productos:IProductos[]=[ 
    {
    "ProductoId":1,
    "Modelo":"Sentra",
    "Descripcion":"2 puertas",
    "Year":"febrero 2 2020",
    "Precio":2000,
    "Marca":"Audi",
    "Color":"Azul",
    "ImagenUrl":"https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpgurl?sa=i&url=https%3A%2F%2Fwww.carwow.co.uk%2Fbest%2Fbest-supercars&psig=AOvVaw1m1fd6xquZl5B3SYeJKTLu&ust=1726886145569000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMizzru-0IgDFQAAAAAdAAAAABAE"
  }, 
  {
    "ProductoId":2,
    "Modelo":"Porsche",
    "Descripcion":"4 puertas",
    "Year":"marzo 12 2021",
    "Precio":12000,
    "Marca":"KIA",
    "Color":"Blanco",
    "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ283_sv05Lll5-pC5YU_FA70gM6lnR-jj1Kw&s"
  },
  {
    "ProductoId":3,
    "Modelo":"Coche",
    "Descripcion":"4 puertas",
    "Year":"octubre 22 2020",
    "Precio":7000,
    "Marca":"Mazda",
    "Color":"Verde",
    "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0z7ZGnj94BY6dU2VQrEPMt3dKube2psmSQ&s"


  }
]
}

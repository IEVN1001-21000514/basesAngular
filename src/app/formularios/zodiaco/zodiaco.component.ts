import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Signos } from '../zodiaco/signos';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent implements OnInit {
  formularioZodiaco!: FormGroup;
  resultado:string="";
  imagenUrl: string = ""; 
  
  constructor(){}
  ngOnInit(): void {
      this.formularioZodiaco=new FormGroup({
        nombre: new FormControl('',Validators.required),
        apellido1: new FormControl('',Validators.required),
        apellido2: new FormControl('',Validators.required),
        dia: new FormControl('',Validators.required),
        mes: new FormControl('',Validators.required),
        anio: new FormControl('',Validators.required),
        signo: new FormControl('',Validators.required),
      });
  }
  signo: Signos[] = [ //Array d
    {
      Nombre: "Rata",
      Anio: [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020],
      ImagenUrl: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Rata-768x657-1.jpg"
    },
    {
      Nombre: "Buey",
      Anio: [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
      ImagenUrl: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Buey-768x657-1.jpg"
    },
    {
      Nombre: "Tigre",
      Anio: [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
      ImagenUrl: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Tigre-768x657-1.jpg"
    },
    {
      Nombre: "Conejo",
      Anio: [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
      ImagenUrl: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Conejo-768x657-1.jpg"
    },
    {
      Nombre: "Dragón",
      Anio: [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
      ImagenUrl: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Dragon-768x657-1.jpg"
    },
    {
      Nombre: "Serpiente",
      Anio: [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
      ImagenUrl: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Serpiente-768x657-1.jpg"
    },
    {
      Nombre: "Caballo",
      Anio: [1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
      ImagenUrl: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Caballo-768x657-1.jpg"
    },
    {
      Nombre: "Cabra",
      Anio: [1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
      ImagenUrl: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cabra-768x657-1.jpg"
    },
    {
      Nombre: "Mono",
      Anio: [1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
      ImagenUrl: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Mono-768x657-1.jpg"
    },
    {
      Nombre: "Gallo",
      Anio: [1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
      ImagenUrl: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Gallo-768x657-1.jpg"
    },
    {
      Nombre: "Perro",
      Anio: [1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
      ImagenUrl: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Perro-768x657-1.jpg"
    },
    {
      Nombre: "Cerdo",
      Anio: [1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
      ImagenUrl: "https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cerdo-768x657-1.jpg"
    },

]

//------------------------------------------------------------------------------------------------------
calcularEdad(dia: number, mes: number, anio: number): number {
  const fechaActual = new Date();
  const anioActual = fechaActual.getFullYear();
  const mesActual = fechaActual.getMonth() + 1; // Los meses en JS van de 0 a 11
  const diaActual = fechaActual.getDate();

  let edad = anioActual - anio; // Diferencia de años

  
  if (mes > mesActual || (mes === mesActual && dia > diaActual)) {
    edad--; 
  }

  return edad;
}

//--------------------------------------------------------------------------------------------------------
ImprimirZodiaco(): void {
  const nombre = this.formularioZodiaco.get('nombre')?.value;
  const apellido1 = this.formularioZodiaco.get('apellido1')?.value;
  const apellido2 = this.formularioZodiaco.get('apellido2')?.value;
  const dia = parseInt(this.formularioZodiaco.get('dia')?.value);
  const mes = parseInt(this.formularioZodiaco.get('mes')?.value);
  const anio = parseInt(this.formularioZodiaco.get('anio')?.value);
  const edad = this.calcularEdad(dia, mes, anio);
  
  let signoEncontrado: Signos | null = null; //Busca si el anio esta en el arreglo de los signos disponibles y lo asigna a signoEncontrado
  for (const signo of this.signo) {
    if (signo.Anio.includes(anio)) {
      signoEncontrado = signo;
      break;
    }
  }


  /* for (let signo of this.signo) {
    if (signo.Anio.includes(anio)) { 
      signoEncontrado = signo;
      break;
    }
  } */

  if (signoEncontrado) {
    this.resultado = `Hola ${nombre} ${apellido1} ${apellido2}, tienes ${edad} años. Tu signo zodiacal es ${signoEncontrado.Nombre}.`;
    this.imagenUrl = signoEncontrado.ImagenUrl;
    
  } else {
    this.resultado = "O eres muy viejo o no has nacido, por eso no tienes signo zodiacal.";
    this.imagenUrl = "";
  }}}

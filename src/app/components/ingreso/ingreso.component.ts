import { Component } from '@angular/core';
import swal from 'sweetalert';
@Component({
    selector: 'app-ingreso',
    templateUrl: './ingreso.component.html',
    styleUrls: ['./ingreso.component.css']
})

export class IngresoComponent{
    imagen = 'assets/img/botella.png';

    validar(nombre,pass){
        var nom = localStorage.getItem('nombre');
        var cont = localStorage.getItem('password');
        if((nombre == nom)&&(pass == cont)){
            document.getElementById("nom").innerHTML= "";
            document.getElementById("con").innerHTML= "";
            swal({
                title : "bienvenido"
            })
        } else{
            swal({
                title: "Datos incorrectos"
            })
        }
    }
}
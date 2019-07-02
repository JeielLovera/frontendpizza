import { Local } from './local';
import { Cliente } from './cliente';

export class Venta {
    cventa:number;
    local:Local;
    cliente:Cliente;
    dfechaventa:string;
    mcostobruto:number;
    idv:number;
    qdescuento:number;
    mcostoneto:number;
    dhoraentrega:string;
    ftarjeta:boolean;
    fpagado:boolean;

}

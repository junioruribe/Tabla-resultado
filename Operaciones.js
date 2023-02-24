function calcular() {
    var cant,valor;
    nom=document.getElementById('txtNom').value;
    p=document.getElementById('txtValor').value;
    e=document.getElementById('txtEstatura').value;
    if (validar(nom,p,e)==true) {
        imc=getIMC(p,e);
    esta=getEstado(imc);
    document.getElementById('txtimc').value=imc;
    document.getElementById('resultado').value=esta;
    } else {
        alert('intentalo de nuevo')
    }
    
}

function descuento(params) {
    var descuento,cantidad;
    if (cantidad<4) {
        descuento=0.05;
    } else if (cantidad> 4-10) {
        descuento=0.10;
    } else if (cantidad>10 && cantidad<20) {
        descuento=0.15;
    }else if (cantidad> 20-50) {
        descuento=0.20;
    }else{
        descuento=0.25;
    }
    return descuento;
}
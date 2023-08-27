var PirmerRegistro=true;
function registrarPersona(){
    //primer paso
    var tipoDocumento=document.getElementById("TipoDocumento").value;
    var documento=document.getElementById("documento").value;
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var edad=document.getElementById("edad").value;
    var correo=document.getElementById("correo").value;
    //segundo paso crear los registros
    var tbody=document.getElementById("cuerpoTabla");
    var retorno="";
    retorno+="<tr>";
    retorno+="<td>";
    retorno+=tipoDocumento;
    retorno+="</td>"
    retorno+="<td>";
    retorno+=documento;
    retorno+="</td>"
    retorno+="<td>";
    retorno+=nombre;
    retorno+="</td>"
    retorno+="<td>";
    retorno+=apellido;
    retorno+="</td>"
    retorno+="<td>";
    retorno+=edad;
    retorno+="</td>"
    retorno+="<td>";
    retorno+=correo;
    retorno+="</td>"
    retorno+="</tr>";
    //se muestra los registros
    if(PirmerRegistro){
        tbody.innerHTML=retorno
        PirmerRegistro=false
    }else{
    tbody.innerHTML+=retorno
    }

}    
function eliminarElemento(){

}
    function registrarPersona2(){
    //primer paso
    var tipoDocumento=document.getElementById("TipoDocumento").value;
    var documento=document.getElementById("documento").value;
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var edad=document.getElementById("edad").value;
    var correo=document.getElementById("correo").value;
    //segundo paso crear los registros
    var tbody=document.getElementById("cuerpoTabla2");

    var tr = document.createElement("tr");
    tr.id="tr"+documento;
    //se crea un elemento html y se almacena en una variable
    var tr=document.createElement("tr");
    //se crea un td y se asigna un valor por cada campo a agregar
    var celdaTipoDocumento=document.createElement("td");
    celdaTipoDocumento.innerHTML=tipoDocumento;
    var celdaDocumento=document.createElement("td");
    celdaDocumento.innerHTML=documento;
    var celdaNombre=document.createElement("td");
    celdaNombre.innerHTML=nombre;
    var celdaApellido=document.createElement("td");
    celdaApellido.innerHTML=apellido;
    var celdaEdad=document.createElement("td");
    celdaEdad.innerHTML=edad;
    var celdaCorreo=document.createElement("td");
    celdaCorreo.innerHTML=correo;

    //se crea la celda accion
    var celdaAccion=document.createElement("td");
    // se crea el bptpn eliminar
    var btnEliminar=document.createElement("button");
    btnEliminar.value="tr"+documento;
    // se asigna el texto al boton eliminar
    btnEliminar.innerHTML="eliminar registro"
    btnEliminar.addEventListener("click",
    (e)=>{eliminarElemento(e.target.value);},
    false);
    celdaAccion.appendChild(btnEliminar);

    tr.appendChild(celdaTipoDocumento);
    tr.appendChild(celdaDocumento);
    tr.appendChild(celdaNombre);
    tr.appendChild(celdaApellido);
    tr.appendChild(celdaEdad);
    tr.appendChild(celdaCorreo);
    tbody.appendChild(tr);
    btnEliminar.addEventListener("click", eliminarElemento(tr.id), false )
    celdaAccion.appendChild(btnEliminar);
    tr.appendChild(celdaAccion);
    }

    function eliminarElemento(valor){
        //alert(valor)
        var tr=document.getElementById(valor);
        var tbody=document.getElementById("cuerpoTabla2");
        tbody.removeChild(tr);
    }
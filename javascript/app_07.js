
function compras() {

    const lista = [];

    if(confirm("¿Deseas crear una lista de compra?"))
    {
        lista.push(prompt("Ingresa el nombre del artículo: "));

        while(confirm("¿Deseas agregar otro artículo?"))
        {
            lista.push(prompt("Ingresa el nombre del artículo: "));
        }
        
        let impresion = "Lista de Compras:\n";
        
        for(let i in lista)
        {
            impresion = impresion + "* " + lista[i] + "\n";
        }

        alert(impresion);
    } 
    else
    {
        alert("No se agregó ningún elemento a la lista de compras...");
    }
}
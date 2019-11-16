window.addEventListener("load",()=>{

    document.getElementById("btnMasComida1").addEventListener("click",()=>{
            document.getElementById("numberComida1").value ++;
    });
    document.getElementById("btnMenosComida1").addEventListener("click",()=>{
            document.getElementById("numberComida1").value --;
    });

});
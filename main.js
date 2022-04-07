
     /*funciones y algoritmos*/
     

     function fejercicio1(){ 
      
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    var t = 0;
    var mayor = 0;

    n1 =parseInt(prompt("ingrese el valor 1"));
    n2 =parseInt(prompt("ingrese el valor 2"));
    n3 =parseInt(prompt("ingrese el valor 3"));

    if(n1 > n2){
        t = n1;
      document.write(prompt("el numero mayor es 1: "+mayor));
    }else{
        t =n2;
    }
    if(t>n3){
        mayor=t;
        document.write(prompt("el numero mayor es 2: "+mayor));  
    }else{
        mayor=n3;

    }
     document,write("el numero mayor es 3: "+mayor);
}
    
    function fejercicio2(){
        var num=0;
        var valor=0;
        
            alert("num=  "+1)
        
            do{
        
                valo;r=4*num
                document.write("4 * "+num+" = " +valor+"<br>");
                num++;
        
            }while(num<=5)
    }
       
    
    function ejercicio3(){
    var otoño =1;
    var verano =2;
    var primavera =3;
    var invierno =4;
    var codigo;
    
    codigo=parseInt(prompt("ingrese el codigo"));
    
    if(codigo==1){
          document.write("otoño");
    
    }
      else{
          if(codigo==2){
           document.write("verano")
          }
          else{
             if(codigo==3){
                 document.write("primavera")
             }
             else{
                 if(codigo==4){
                     document.write("invierno")
                 }
                 else{
                     document.write("la estacion no existe")
                 }
             }
          }
      }
}
    function ejercicio4(){
        var sueldo = 0;
        var antiguedad =0;
        var aumento = 0;
        
        
        sueldo=parseFloat(prompt("ingresa el sueldo actual: "));
        antiguedad=parseInt(prompt("ingresa los años de antiguedad: "));
        aumento=0;
        
        
        if(sueldo<900000 && antiguedad>=10){
            aumento=sueldo*0.2;
            sueldo=sueldo+aumento;
            alert ("usted tiene un aumento del 20% su nuevo sueldo es: "+sueldo)
        
        
        }
        else{
         if(sueldo<900000 && antiguedad<=10)
                aumento=sueldo*0.05;
                sueldo=sueldo+aumento;
                alert("usted tiene un aumento del 5% su nuevo sueldo es: "+sueldo)
        }
    }
        
    function ejercicio5(){
        var valorcompra = 0;
        var descuento = 0;
        var valorfinal = 0;
        
        valorcompra=parseInt(prompt("ingrese el valor de la compra:  "));
        document.write("elvalor de la compra es:  " +valorcompra);
        
        
        descuento= 0;
        valorfinal= valorcompra;
        
        if(valorcompra>=200000){
        
             descuento=valorcompra*0.5;
             valorfinal=valorcompra-descuento;
        
             document.write("se genero un descuento del 50% equivalente a:  " +descuento);
             
                 
        }
        else{
            descuento=valorcompra*0.1;
            valorfinal=valorcompra-descuento;
        
            document.write("se genero un descuento del 10% equivalente a:  " +descuento);
            
        }
            document.write("el total a pagar es:  " +valorfinal);
        
        
    }
    
    
    function ejercicio6(){
        var num;
        num=parseInt(prompt("ingresa un numero: "));
        
            if(num<0){
               num=num*-1;
        
            }
            else{
                num=num*1;
            }
            document.write("el numero es: "+num);
    }
    
    function ejercicio7(){
        var sueldobase = 0;
        var canthextras = 0;
        var sueldototal;
        var totalhextras;
        
        sueldobase=parseInt(prompt("el sueldo base es: "));
        document.write("el sueldo base de esta persona es: "+sueldobase)
        canthextras=parseInt(prompt("ingrese la cantidad de horas extras: "));
        document.write("la cantidad de horas extras trabajadas es: "+canthextras)
        
        totalhextras=canthextras*4500;
        sueldototal=sueldobase+totalhextras;
        
        document.write("el sueldo total de esta persona es: " +sueldototal);
    }
    
       
    function ejercicio8(){ 
        var nota1= 0;
        var nota2= 0;
        var nota3= 0;
        var nota4= 0;
        var nota5= 0;
        var promedio;
         nota1=parseInt(prompt("por favor ingrese la nota 1 "));
         document.write("nota1: "+nota1)
         nota2=parseInt(prompt("por favor ingrese la nota 2 "));
         document.write("nota2: "+nota2)
         nota3=parseInt(prompt("por favor ingrese la nota 3 "));
         document.write("nota3: "+nota3)
         nota4=parseInt(prompt("por favor ingrese la nota 4 "));
         document.write("nota4: "+nota4)
         nota5=parseInt(prompt("por favor ingrese la nota 5 "));
         document.write("nota5: "+nota5)
        
         promedio=(nota1+nota2+nota3+nota4+nota5)/5;
        
         alert("el promedio de las 5 notas es: "+promedio)
    }
    function ejercicio9(){
        var b = {
            sandra: { edad:0, velocidad:0, tono:0},
            dora: { edad:0, velocidad:0, tono:0},
            duglas: { edad:0, velocidad:0, tono:0},
            jimmy: { edad:0, velocidad:0, tono:0},
            resultado: function(){
        
                 if(b.sandra.tono > b.dora.tono &&
                    b.sandra.velocidad > b.duglas.velocidad &&
                    b.sandra.edad > b.duglas.edad &&
                    b.jimmy.velocidad > b.duglas.velocidad &&
                    b.sandra.edad > b.jimmy.edad &&
                    b.sandra.edad > b.dora.edad &&
                    b.jimmy.tono > b.dora.tono &&
                    b.dora.velocidad > b.duglas.velocidad &&
                    b.duglas.tono > b.dora.tono){
        
                        return true;
                    }
                        return false;
            },
            intervalo: setInterval(function(){
        
                b.sandra.edad = Math.ceil(Math.random() *2)
                b.sandra.velocidad = Math.ceil(Math.random() *2)
                b.sandra.tono = Math.ceil(Math.random() *2)
                
                b.dora.edad = Math.ceil(Math.random() *2)
                b.dora.velocidad = Math.ceil(Math.random() *2)
                b.dora.tono = Math.ceil(Math.random() *2)
                
                b.duglas.edad = Math.ceil(Math.random() *2)
                b.duglas.velocidad = Math.ceil(Math.random() *2)
                b.duglas.tono = Math.ceil(Math.random() *2)
        
                b.jimmy.edad = Math.ceil(Math.random() *2)
                b.jimmy.velocidad = Math.ceil(Math.random() *2)
                b.jimmy.tono = Math.ceil(Math.random() *2)
        
                if (a.resultado()){
        
                   clearInterval(a.intervalo);
                   console.log("el caballo de sandra es:", b.sandra)
                   console.log("el caballo de dora es:", b.dora)
                   console.log("el caballo de duglas es:", b.duglas)
                   console.log("el caballo de jimmy es:", b.jimmy)
        
        
            }
        
        
        
        },3)
        
        }
    }
    function ejercicio10(){
        var a = {
            A:0,
            B:0,
            C:0,
            D:0,
            resultado: function(){
        
                if(a.C > a.B &&
                   a.D > a.B &&
                   a.D > a.C &&
                   a.D <a.A){
        
                    return true;
                   }
                    return false;
            },
             intervalo: setInterval(function(){
        
                 a.A = Math.ceil(Math.random() *4)
                 a.B = Math.ceil(Math.random() *4)
                 a.C = Math.ceil(Math.random() *4)
                 a.D = Math.ceil(Math.random() *4)
        
                 if (a.resultado()){
        
                    clearInterval(a.intervalo);
                    console.log("LA POCICION DEL ATLETA A ES:", a.A)
                    console.log("LA POCICION DEL ATLETA B ES:", a.B)
                    console.log("LA POCICION DEL ATLETA C ES:", a.C)
                    console.log("LA POCICION DEL ATLETA D ES:", a.D)
                 }
             }
             ,10)
        }
    }
    

 
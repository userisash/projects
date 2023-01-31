function multiplicationTable() {
    let table;
    table='<table id="mtable">';
    let num1=document.getElementById("number1").value;
    let num2=document.getElementById("number2").value;
    if(num1==null || num1=="")
    num1=1;
    if(num2==null || num2=="")
    num2=10;
    for(i=1;i<=10;i++){
     table+='<tr>';
      for(num=num1;num<=num2;num++){
          table+='<td>'+num*i+'</td>';
       }
       table+='</tr>';
      }
    table+='</table>';
    document.getElementById("result").innerHTML = table;
    }
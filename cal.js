function display(v){

    document.getElementById('mycal').value += v

    return v

}
function equal(){

    let x = document.getElementById('mycal').value

    let y = eval(x);

    document.getElementById('mycal').value = y

    return y

}


function s() {
    let z = document.getElementById("mycal").value
    document.getElementById("mycal").value=Math.pow(z,2);
   }

 function t(){
    let z = document.getElementById("mycal").value
    document.getElementById("mycal").value=Math.tan(z)
 }
   
 function si(){
    let z = document.getElementById("mycal").value
    document.getElementById("mycal").value=Math.sin(z)
 }
 function co(){
    let z = document.getElementById("mycal").value
    document.getElementById("mycal").value=Math.cos(z)
 }

  function del() {
    document.getElementById('mycal').value = ''
  }
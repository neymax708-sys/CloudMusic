function convert(type){

  const url = document.getElementById("videoUrl").value;

  const status = document.getElementById("status");

  if(!url){
    status.innerHTML = "Cole um link";
    return;
  }

  status.innerHTML =
  "Conversão " + type.toUpperCase() + " iniciada";

}
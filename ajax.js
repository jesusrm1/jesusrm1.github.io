  let statesList = ['UNSET', 'OPENED', 'HEADERS_RECEIVED', 'LOADING', 'DONE'];
  let initialTime = 0;
  
  window.onload = function() {
    let source = document.getElementById('recurso');
    source.value = 'https://mindicador.cl/api/dolar';
    document.getElementById('enviar').onclick = loadContent;
  }
  
  function loadContent() {
    document.getElementById('contenidos').innerHTML = "";
    document.getElementById('estados').innerHTML = "";
    document.getElementById('codigo').innerHTML = "";
    document.getElementById('cabeceras').innerHTML = "";
    
    if(window.XMLHttpRequest) {
      request = new XMLHttpRequest();
    }
    
    request.onreadystatechange = showContent;
    
    initialTime = new Date();
    let source = document.getElementById('recurso').value;
    request.open('GET', source+'?nocache='+Math.random(), true);
    request.send(null);
  }

  function showContent() {
    let finalTime = new Date();
    let miliseconds = finalTime - initialTime;
    let states = document.getElementById('estados');
    states.innerHTML += request.readyState +" - [" + miliseconds + " ms.] " 
    + statesList[request.readyState] + "<br/>";
    
    if(request.readyState == 4 && request.status == 200) {
      let contents = document.getElementById('contenidos');
        contents.innerHTML = request.responseText
      showHeaders();
      showStateCodes();
    }
  }
  
  function showHeaders() {
    let headers = document.getElementById('cabeceras');
    headers.innerHTML = request.getAllResponseHeaders();
  }
  
  function showStateCodes() {
    let code = document.getElementById('codigo');
    code.innerHTML = request.status + " " + request.statusText;        
  }
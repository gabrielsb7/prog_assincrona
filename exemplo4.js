function retornaPromessa(token){
  return new Promise(
    function(resolve,reject) {
      if(token == 'X') 
        resolve('Ok'); 
      else 
        reject('Falha');
    }
  );  
}


  retornaPromessa('X')
    .then((value) => { alert(value); })
    .catch((erro) => { alert('erro:' + erro); });
  retornaPromessa('Y')
    .then((value) => { alert(value); })
    .catch((erro) => { alert('erro:' + erro); }); 


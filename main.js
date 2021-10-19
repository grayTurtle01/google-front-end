document.querySelector("#lucky-button").onclick = function(){
  input = document.querySelector("input[name=q]")
  
  if( input.value != ""){
    this.href = `http://www.google.com/search?hl=en&q=${input.value}&btnI=I`
  }
  else{
    this.href = `http://www.google.com/search?hl=en&q=&btnI=I`
  }
}


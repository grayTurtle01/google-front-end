document.querySelector("#search-icon-button").onclick = function(){
  value = document.querySelector("input[name=q]").value

  form = document.querySelector("form")
  form.action = `http://google.com/search?q=${value}`
  form.submit()

}

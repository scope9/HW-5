

let count = 0;


const addButton = function(e){
  e.preventDefault(); 
  count++; 
  const button = `<button class="new">${count}</button>`; 
  render(button); 
  render($(this).text()); 
}


const printNum = function(e){
  e.preventDefault();
  render($(this).text());
}


const render = function(htmlStr){
  $('#content').append(htmlStr)
  $('#content').append('<br />')
}


$('#more').on('click', addButton);


$('body').on('click', '.new', printNum);

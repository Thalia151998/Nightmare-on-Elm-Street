var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/thumb/3/3c/Nightmare_Elm_Street_1984.jpg/233px-Nightmare_Elm_Street_1984.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/0/0a/Nightmare_Elm_Street_2.jpg/230px-Nightmare_Elm_Street_2.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9d/Nightmare_Elm_Street_1987.jpg/235px-Nightmare_Elm_Street_1987.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/3/37/Nightmare_Elm_Street_1988.jpg/233px-Nightmare_Elm_Street_1988.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/c/ca/Nightmare5.jpg/250px-Nightmare5.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b0/Freddy%27s_Dead_The_Final_Nightmare.jpg/233px-Freddy%27s_Dead_The_Final_Nightmare.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/e/e5/Wes_Craven%27s_New_Nightmare.jpg/233px-Wes_Craven%27s_New_Nightmare.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/7/71/Freddy_vs_Jason_movie.jpg/250px-Freddy_vs_Jason_movie.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/e/ee/A_Nightmare_on_Elm_Street_2010_poster.jpg/200px-A_Nightmare_on_Elm_Street_2010_poster.jpg"]

var nomesFilmes = ["A Nightmare on Elm Street (A Hora do Pesadelo)", "A Nightmare on Elm Street 2: Freddy's Revenge (A Hora do Pesadelo 2: A Vingança de Freddy)", "A Nightmare on Elm Street 3: Dream Warriors (A Hora do Pesadelo 3: Guerreiros dos Sonhos)", "A Nightmare on Elm Street 4: The Dream Master (A Hora do Pesadelo 4: Mestre dos Sonhos)", "A Nightmare on Elm Street 5: The Dream Child (A Hora do Pesadelo 5)", "Freddy's Dead: The Final Nightmare (Pesadelo Final: A Morte de Freddy)", "Wes Craven's New Nightmare (O Novo Pesadelo)", "Freddy vs. Jason", "A Nightmare on Elm Street: Wes Craven's New Nightmare (A Hora do Pesadelo - O Novo Pesadelo, O Retorno de Freddy Krueger)"]

var i = 0
while(i < listaFilmes.length) {
  if(listaFilmes[i].endsWith('jpg')){
  document.write('<img src=' + listaFilmes[i] + '>' + '<p>' + nomesFilmes[i] + '<p>')
  }
  i++
}



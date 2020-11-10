// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// BONUS aggiungere un'immagine presa anch'essa da un data (url dell'immagine)


const app = new Vue ({

el: "#app",

data: {

  // creo array nei data che rappresenta l'elenco di elementi della lista
  todos: ["prova"],

   todo: '', //inizializzo item dell'array come stringa vuota

   
  
},

methods: {

  addTodo() { 
    this.todos.push(this.todo) //funzione che mi permette di pushare nell'array
    this.todo = '' //finisce con la stringa vuoto altrimenti il testo inserito rimane nell'input
  },

  deleteTodo(index) {

    this.todos.splice(index)
  
   }

   

},

 


})
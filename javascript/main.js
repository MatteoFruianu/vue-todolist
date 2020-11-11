


const app = new Vue ({

  el: "#app",
  
  data: {
  
    // creo array nei data che rappresenta l'elenco di elementi della lista
    todos: [],
  
     todo: '', //inizializzo item dell'array come stringa vuota
  
  },
  
  methods: {
  
    addTodo() { 

      if (this.todo.trim() !== '') {//validazione
      this.todos.push(this.todo); } //funzione che mi permette di pushare nell'array
      this.todo = '' //finisce con la stringa vuota altrimenti il testo inserito rimane nell'input
    },
  
    deleteTodo(index) {
  
      this.todos.splice(index, 1)
    
     },

     deleteAll(index) {
       alert("Sei sicuro di voler cancellare tutto?");
       this.todos.splice(index, this.todos.length);
     }
  
    
  },
  
  
  })
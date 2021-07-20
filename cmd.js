const {getTodos,setTodos} = require('./todos')

function displayTodos() {
    const todos = getTodos().map((task,index)=>{
        return (index+1)+') '+task;
    }).join('\r\n');
    console.log(todos)
}

function addTodo(task) {
    const todos = getTodos();
    todos.push(task);
    setTodos(todos);
    console.log('task added seccessfuly');
}


if(process.argv.length===2){
    displayTodos()  
}else{
    [_,__,...task]=process.argv;
    addTodo(task.join(' ')); 
}
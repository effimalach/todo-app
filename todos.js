const {readFileSync,writeFileSync} = require('fs');

function getTodos() {
    return readFileSync('./todos.txt')
    .toString()
    .split('\r\n')
    .filter(Boolean);
}

function setTodos(todos) {
     writeFileSync('./todos.txt',todos.join('\r\n'));

}
module.exports={
    getTodos,
    setTodos
}





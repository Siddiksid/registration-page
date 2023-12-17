// Getting Elements &&  Adding event Listener
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);

//  long way to call api's.short way in main file
//  Functions
// GET REQUEST
function getTodos() {
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos',
        params: { _limit: 5 }
    }).then((result) => showOutput(result))
        .catch((error) => console.error(error));
}

// POST REQUEST
function addTodo() {
    axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: "Maaz Danish",
            completed: false
        }
    }).then((result) => showOutput(result))
        .catch((error) => console.error(error));
}
// PUT/PATCH REQUEST
//  diff b/w put and patch
//  put changes the whole text while patch just update the text which text we change or edit.
// function updateTodo() {
//     axios({
//         method: 'put',
//         url: 'https://jsonplaceholder.typicode.com/todos/1',
//         data: {
//             title: "FARIHA KHANAM",
//             completed: true
//         }
//     }).then((result) => showOutput(result))
//         .catch((error) => console.error(error));
// }
// patch
function updateTodo() {
    axios({
        method: 'patch',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        data: {
            title: "FARIHA KHANAM",
            completed: true
        }
    }).then((result) => showOutput(result))
        .catch((error) => console.error(error));
}

// DELETE REQUEST
function removeTodo() {
    axios({
        method: 'delete',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
    }).then((result) => showOutput(result))
        .catch((error) => console.error(error));
}

// SIMULTANEOUS DATA
function getData() {
    console.log('Simultaneous Request');
}

// CUSTOM HEADERS
// function customHeaders() {
//     axios.all([
//         axios.get('https://jsonplaceholder.typicode.com/todos/1'),
//         axios.get("https://jsonplaceholder.typicode.com/posts/1")
//     ])
//         .then((result) =>{
//         // showOutput(result[1])
//         showOutput(result[0]) 
//     })
//         .catch((error) => console.error(error));
// }

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
    console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
    console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
    console.log('Cancel Token');
}

//    
// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);

// Global AXIOS
axios.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';


// GET REQUEST
function getTodos() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then((result) => showOutput(result)).catch((err) => showOutput(err));
}

// Post request
function addTodo() {
  axios
    .post('https://jsonplaceholder.typicode.com/todos', { title: "AFFAN WASIF", completed: true })
    .then((result) => showOutput(result))
    .catch((error) => console.error(error));
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios.put('https://jsonplaceholder.typicode.com/todos/1', { title: "ANJUM KHAN", completed: true })
    .then((result) => showOutput(result))
    .catch((error) => console.error(error));
}
// function updateTodo() {
//   axios.patch('https://jsonplaceholder.typicode.com/todos/2', { title: "ZAKIYA KHAN", completed: true })
//     .then((result) => showOutput(result))
//     .catch((error) => console.error(error));
// }

// DELETE REQUEST
function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then((result) => showOutput(result))
    .catch((error) => console.error(error));
}

// SIMULTANEOUS DATA  -->>>> getting data of all like posts and todos
function getData() {
  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos/5'),
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
  ])
    .then(axios.spread((todo, post) => showOutput(todo)))
    .catch((error) => console.error(error));
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'sometoken'
    }
  };

  axios
    .post(
      'https://jsonplaceholder.typicode.com/todos',
      {
        title: 'New Todo',
        completed: false
      },
      config
    )
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Hello World'
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data;
    })
  };

  axios(options).then(res => showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
  axios
    .get('https://jsonplaceholder.typicode.com/todoss')
    .then(result => showOutput(result))
    .catch(error => {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);

        if (error.response.status === 404) {
          alert('Error: Page Not Found');
        }
      } else if (error.request) {
        // Request was made but no response
        console.error(error.request);
      } else {
        console.error(error.message);
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  const source = axios.CancelToken.source();

  axios
    .get('https://jsonplaceholder.typicode.com/todos', {
      cancelToken: source.token
    })
    .then(result => showOutput(result))
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      }
    });

  if (true) {
    source.cancel('Request canceled!');
  }
}


// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(config => {
  console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);
  return config;
}, error => {
  return Promise.reject(error);
}
);

// AXIOS INSTANCES
const axiosInstance = axios.create({
  // Other custom settings
  baseURL: 'https://jsonplaceholder.typicode.com'
});
// axiosInstance.get('/comments').then(res => showOutput(res));

// Show output in browser

function showOutput(result) {
  document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${result.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(result.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(result.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(result.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

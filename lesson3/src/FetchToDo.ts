interface TodoResponse {
  items: Todo[];
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const getTodosByCount = (arr: Todo[]): void => {
  let count = 0;
  if (!Array.isArray(arr)) {
    console.log('Передайте массив в функцию!');
  }
  arr.forEach((i) => count++);
  console.log(count);
};

export function fetchTodo() {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((response) => {
      return response.text();
    })
    .then<TodoResponse>((responseText) => JSON.parse(responseText))
    .then((data) => getTodosByCount(data.items));
}

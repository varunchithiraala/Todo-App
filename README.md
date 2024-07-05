# Todo App

## Overview

This is a simple Todo application built with React and Redux. The application allows users to add, edit, update, delete, and mark tasks as completed. Todos can also be saved to local storage with a save button, ensuring that todos are only saved when explicitly requested by the user.

## Features

- **Add Todo**: Add new todo items.
- **Edit Todo**: Edit existing todo items inline.
- **Update Todo**: Update todo items after editing.
- **Delete Todo**: Delete individual todo items.
- **Mark Complete**: Mark todo items as completed.
- **Delete All**: Delete all todo items.
- **Save Todos**: Save all todo items to local storage.

## Tech Stack

- **Frontend**: React, Redux
- **Styling**: Bootstrap, CSS
- **Icons**: React Icons

## Installation

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
2. **Install Dependencies**
    ```bash
    npm install
3. **Start the Application**
    ```bash
    npm start
4. **Open in Browser**
    The application will be running at http://localhost:3000.

## Components

### Form.js

This component is responsible for adding new todos. It contains an input field and a submit button. When the form is submitted, a new todo is added to the list.

### Todos.js

This component manages the state of the todos and renders the Form and TodosList components. It also includes buttons for deleting all todos and saving todos to local storage.

### TodosList.js
This component renders the list of todos. Each todo item can be edited inline. It includes checkboxes to mark todos as completed and buttons to update or cancel edits.

# Redux Todo

## Actions

- **addTodo**: Action to add a new todo.
- **removeTodo**: Action to remove a todo.
- **updateCheckbox**: Action to mark a todo as completed.
- **updateTodo**: Action to update a todo after editing.
- **deleteAll**: Action to delete all todos.
- **saveTodos**: Action to save todos to local storage.

## Reducer

Manages the state of the todos, handling actions like adding, removing, updating, and saving todos.

## Usage

- **Add Todo**: Type in the input field and click the "ADD" button to add a new todo.
- **Edit Todo**: Click the edit icon beside a todo to make it editable. Update the text and click "Update" to save changes or "Cancel" to discard changes.
- **Delete Todo**: Click the trash icon beside a todo to delete it.
- **Mark Complete**: Check the checkbox beside a todo to mark it as completed.
- **Delete All**: Click the "DELETE ALL" button to remove all todos.
- **Save Todos**: Click the "Save Todos" button to save the current list of todos to local storage.

## Contributing

Contributions are welcome! Please create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

Thanks to the React and Redux communities for their amazing libraries and support.

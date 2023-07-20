# Contact List App

A simple contact list app built with React to manage contacts. It fetches contact data from the JSONPlaceholder API, and you can perform dummy POST, PUT, and DELETE calls to manage contacts within the app.

## Features

1. Fetch and show users from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).
2. Add a contact - This makes a dummy POST call to the API (Note: It won't add contacts to the server, but the request is valid and will update the React state).
3. Update a contact - This makes a dummy PUT call to the API (Note: It won't update contacts on the server, but the request is valid and will update the React state).
4. Delete a contact - This makes a dummy DELETE call to the API (Note: It won't delete contacts on the server, but the request is valid and will update the React state).

## Getting Started

To run the app locally on your machine, follow these steps:

1. Clone the repository: `git clone https://github.com/namangulati1/contact-list-app.git`
2. Change directory: `cd contact-list-app`
3. Install dependencies: `npm install`
4. Run the app: `npm start`

The app will be running at [http://localhost:3000](http://localhost:3000).

## Dependencies

This app is built using React and utilizes the Fetch API to interact with the JSONPlaceholder API. The major dependencies used in this project are:

- React: ^17.0.2
- React-dom: ^17.0.2

## Folder Structure

The folder structure of the project is as follows:

\```javascript
contact-list-app/
├── src/
│ ├── components/
│ │ ├── ContactList.js
│ │ └── ContactForm.js
│ ├── App.js
│ ├── index.js
│ └── index.css
├── public/
│ └── index.html
├── package.json
├── package-lock.json
└── README.md
\```


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to create a pull request or open an issue.



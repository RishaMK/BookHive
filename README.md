# BookHive

BookHive is a simple book management system built with the MERN stack, allowing users to manage their book collection efficiently. Users can 
- **Create Book**: Add new books to your collection with details such as title, author, and publication date.
- **View All Books**: Browse through your entire book collection at a glance.
- **View Book Details**: Access detailed information about each book, including title, author, and publication date.
- **Edit Book**: Modify existing book details to keep your collection up to date.
- **Delete Book**: Remove books from your collection as needed.

## Features

- **Real-time Book Management**: All changes to the book collection, including adding, editing, and deleting books, are reflected in real-time without the need for manual refreshing.
- **Dynamic Routing**: Utilizes React Router for dynamic routing, allowing users to navigate between different sections of the application smoothly.
- **Material-UI Styling**: Material-UI is employed for styling components, offering a modern and visually appealing user interface.
- **Error Handling**: Comprehensive error handling ensures smooth user experience and provides clear feedback in case of any issues during interaction.
- **Efficient CRUD Operations**: Allows users to perform Create, Read, Update, and Delete operations on their book collection efficiently, enhancing productivity and ease of use.


## Technologies Used

- **Frontend**: React.js, Vue.js, Material-UI for icons, Tailwind CSS for styling
- **Backend**: Express.js, Node.js
- **Database**: MongoDB Atlas
- **Other Tools**: Axios for API requests, React Router for navigation

## Setup

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/RishaMK/BookStore.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd BookStore
    ```

3. **Install dependencies for both frontend and backend:**
    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

4. **Create a `.env` file in the root directory and add your MongoDB connection URI:**
    ```plaintext
    URI="your_mongodb_connection_uri"
    ```

5. **Start the backend server:**
    ```bash
    npm start
    ```

6. **In a new terminal, start the frontend development server:**
    ```bash
    cd ../frontend
    npm start
    ```

### Environment Variables
- `URI`: MongoDB connection URI for the backend server. Make sure to replace `your_mongodb_connection_uri` with your actual MongoDB connection string.

### Additional Notes
- Ensure that your MongoDB database is running either locally or on MongoDB Atlas before starting the application.



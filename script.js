window.addEventListener('DOMContentLoaded', () => {
    fetch('/movies')
    .then(response => response.json())
    .then(movies => {
    const moviesList = document.getElementById('movies-list');
    movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.classList.add('sidebar-movie');
    
    movieElement.innerHTML = `
    <h2>${movie.title}</h2>
    <p>${movie.description}</p>
    <button onclick="bookTicket(${movie.id})">Book Ticket</button>
   
    `;
    moviesList.appendChild(movieElement);
    });
    })
    .catch(error => console.error('Error fetching movies:', error));
   });
   // Function to book a ticket
   function bookTicket(movieId) {
   }
   
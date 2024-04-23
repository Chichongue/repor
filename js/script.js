// Mock data for events
let eventsData = [
  { name: 'Evento 1', date: '2023-12-15', location: 'Auditório Principal', description: 'Lorem ipsum dolor sit amet.' },
  { name: 'Evento 2', date: '2023-12-20', location: 'Salão Nobre', description: 'Sed do eiusmod tempor incididunt.' }
];

// Function to display events on the page
function displayEvents() {
  const eventsContainer = document.getElementById('eventsContainer');
  eventsContainer.innerHTML = '';

  eventsData.forEach(event => {
      const eventDiv = document.createElement('div');
      eventDiv.classList.add('event');

      eventDiv.innerHTML = `
          <h2>${event.name}</h2>
          <p>Data: ${event.date}</p>
          <p>Local: ${event.location}</p>
          <p>Descrição: ${event.description}</p>
      `;

      eventsContainer.appendChild(eventDiv);
  });
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const eventName = document.getElementById('eventName').value;
  const eventDate = document.getElementById('eventDate').value;
  const eventLocation = document.getElementById('eventLocation').value;
  const eventDescription = document.getElementById('eventDescription').value;

  // Add the new event to the data
  eventsData.push({ name: eventName, date: eventDate, location: eventLocation, description: eventDescription });

  // Reset the form
  document.getElementById('eventForm').reset();

  // Display the updated events
  displayEvents();
}

// Event listener for form submission
document.getElementById('eventForm').addEventListener('submit', handleFormSubmit);

// Initial display of events
displayEvents();

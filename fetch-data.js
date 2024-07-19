// Define the asynchronous function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Selecting the container element

    try {
        // Fetching data from the API
        const response = await fetch(apiUrl);
        if (!response.ok) { // Check if the fetch was successful
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json(); // Converting the response to JSON

        // Clear the initial loading message
        dataContainer.innerHTML = '';

        // Create a list to display the user names
        const userList = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set text to user's name
            userList.appendChild(listItem); // Add the list item to the list
        });

        dataContainer.appendChild(userList); // Append the list to the container
    } catch (error) {
        // Handle errors in case of a failed fetch operation
        console.error('Failed to fetch user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.'; // Display error message
    }
}

// Add event listener to run fetchUserData after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);

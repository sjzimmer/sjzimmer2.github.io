// Add event listener to the form to handle form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get input elements and error message elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    // Clear previous error messages
    nameError.textContent = '';
    emailError.textContent = '';

    let valid = true; // Flag to track if the form is valid

    // Validate name field
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        valid = false;
    }

    // Validate email field
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) { // Simple email validation regex
        emailError.textContent = 'Invalid email';
        valid = false;
    }

    // If the form is valid, add the student to the list and clear the input fields
    if (valid) {
        addStudent(nameInput.value, emailInput.value);
        nameInput.value = '';
        emailInput.value = '';
    }
});

// Function to add a student to the list
function addStudent(name, email) {
    const studentsList = document.getElementById('studentsList'); // Get the list element
    const li = document.createElement('li'); // Create a new list item
    li.className = 'student'; // Add class for styling
    li.innerHTML = `
        <span>${name} - ${email}</span>
        <button onclick="deleteStudent(this)">Delete</button> <!-- Add delete button -->
    `;
    studentsList.appendChild(li); // Append the new student to the list
}

// Function to delete a student from the list
function deleteStudent(button) {
    const li = button.parentElement; // Get the parent list item of the button
    li.remove(); // Remove the list item from the DOM
}

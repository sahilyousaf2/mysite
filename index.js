// Get references to HTML elements
var emailForm = document.getElementById('emailForm');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');
// Create an observable for form submission
// const formSubmit$ = fromEvent(emailForm, 'submit');
// Handle form submission
// formSubmit$.pipe(
//   // Prevent default form submission behavior
//   tap((event: Event) => event.preventDefault()),
//   // Extract email and message values
//   map(() => ({
//     email: emailInput.value,
//     message: messageInput.value,
//   })),
//   // Send email using your preferred method (e.g., fetch, AJAX, or a library)
//   tap(({ email, message }) => {
//     // Replace with your email sending logic
//     sendEmail(email, message);
//   })
// ).subscribe();
// Function to send email (replace with your implementation)
function sendEmail(email, message) {
    // ... Your email sending logic here
    console.log('Sending email to:', email);
    console.log('Message:', message);
}

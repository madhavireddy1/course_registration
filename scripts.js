function submitForm() {
  // Collect form data
  const name = $('#name').val();
  const email = $('#email').val();
  const password = $('#password').val();
  const discipline = $('#discipline').val();
  const expertise = $('#expertise').val();
  const courses = $('#courses').val();
  const notes = $('#notes').val();

  // Validate form data
  if (!name || !email || !password || !discipline || !expertise) {
      $('#result').html('<p style="color: red;">Please fill in all required fields.</p>');
      return;
  }

  // Display the data as confirmation
  const resultHtml = `
      <h3>Registration Successful</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Discipline:</strong> ${discipline}</p>
      <p><strong>Expertise Level:</strong> ${expertise}</p>
      <p><strong>Preferred Courses:</strong> ${courses || 'N/A'}</p>
      <p><strong>Additional Notes:</strong> ${notes || 'N/A'}</p>
  `;
  $('#result').html(resultHtml);

  // Optional: Send data to a server
  /*
  $.ajax({
      url: '/submit-form', // Replace with your server endpoint
      type: 'POST',
      data: {
          name,
          email,
          password,
          discipline,
          expertise,
          courses,
          notes,
      },
      success: function(response) {
          $('#result').html('<p>Form submitted successfully!</p>');
      },
      error: function() {
          $('#result').html('<p style="color: red;">An error occurred. Please try again.</p>');
      }
  });
  */
}

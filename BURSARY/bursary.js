// Smooth Scrolling
$('a[href*="busrsary.html"]').on('click', function (e) {
    e.preventDefault();
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    );
  });
  
  // Form Validation
  const form =document.querySelector('form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const amountInput = document.querySelector('#amount');
  const messageInput = document.querySelector('#message');
  
  form.addEventListener('submit', (e) => {
  let messages = [];
  
  if (nameInput.value === '' || nameInput.value == null) {
  messages.push('Name is required');
  }
  
  if (emailInput.value === '' || emailInput.value == null) {
  messages.push('Email is required');
  }
  
  if (amountInput.value === '' || amountInput.value == null) {
  messages.push('Amount is required');
  } else if (isNaN(amountInput.value)) {
  messages.push('Amount must be a number');
  }
  
  if (messageInput.value === '' || messageInput.value == null) {
  messages.push('Message is required');
  }
  
  if (messages.length > 0) {
  e.preventDefault();
  alert(messages.join('\n'));
  }
  });
  
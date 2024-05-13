const form = document.getElementById('membershipForm');
const totalPriceWindow = document.getElementById('totalPriceWindow');

form.addEventListener('change', calculatePrice);

function calculatePrice(event) {
  let basePrice = 0;
  let discount = 0;

 
  const planType = document.querySelector('input[name="planType"]:checked').value;
  switch (planType) {
    case 'individual':
      basePrice = 30;
      break;
    case 'trainer':
      basePrice = 50;
      break;
    case 'group':
      basePrice = 20;
      break;
  }

 
  const membershipType = document.querySelector('input[name="membershipType"]:checked').value;
  if (membershipType === 'premium') {
    basePrice += 10; 
  }

  
  const duration = document.querySelector('input[name="duration"]:checked').value;
  switch (duration) {
    case '3':
      discount = 0.1;
      break;
    case '6':
      discount = 0.15;
      break;
    case '12':
      discount = 0.2;
      break;
  }

  
  const finalPrice = basePrice * (1 - discount);

  
  totalPriceWindow.textContent = `Total Price: $${finalPrice.toFixed(2)} per month`;
}

document.getElementById("PayButton").addEventListener("click", function() {
    window.location.href = "Membership.html";
  });


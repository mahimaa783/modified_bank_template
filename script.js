/*slide show js*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Automatically advance slides every 5 seconds
setInterval(() => {
  plusSlides(1);
}, 5000);

// Pause slideshow on hover
const slideshow = document.querySelector('.slideshow-container');
slideshow.addEventListener('mouseenter', () => {
  clearInterval(autoSlide);
});
slideshow.addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => {
    plusSlides(1);
  }, 5000);
});

//calculator js
function calculateLoan() {
    var amount = document.getElementById('loanAmount').value;
    var interestRate = document.getElementById('interestRate').value;
    var term = document.getElementById('loanTerm').value;

    if (amount && interestRate && term) {
        var monthlyRate = (interestRate / 100) / 12;
        var numberOfPayments = term * 12;
        var monthlyPayment = (amount * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -numberOfPayments));
        var totalPayment = monthlyPayment * numberOfPayments;

        document.getElementById('result').innerHTML = `
            <h4>Loan Details</h4>
            <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
            <p>Total Payment: $${totalPayment.toFixed(2)}</p>
        `;
    } else {
        document.getElementById('result').innerHTML = `<p>Please fill in all fields.</p>`;
    }
}

// investment-portfolio-tracker.component.js

document.addEventListener('DOMContentLoaded', function () {
    const investmentForm = document.getElementById('investment-form');
    const investmentList = document.getElementById('investment-list');
    
    investmentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const investmentType = document.getElementById('investmentType').value;
      const amount = document.getElementById('amount').value;
      
      addInvestment(investmentType, amount);
      
      // Clear the form fields
      document.getElementById('investmentType').value = '';
      document.getElementById('amount').value = '';
    });
    
    function addInvestment(type, amount) {
      const investmentItem = document.createElement('li');
      investmentItem.textContent = `Type: ${type}, Amount: ${amount}`;
      
      investmentList.appendChild(investmentItem);
    }
  });
  
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
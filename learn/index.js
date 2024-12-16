document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();  

    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your age is: ${age}`;
    resultElement.classList.remove('hidden');
});
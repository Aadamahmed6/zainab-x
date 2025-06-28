document.getElementById('startBtn').addEventListener('click', function() {
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
});

const answerButtons = document.querySelectorAll('.answerBtn');
answerButtons.forEach(button => {
  button.addEventListener('click', function() {
    // You can do something here, like tracking answers or showing animations
    console.log(button.textContent); // Just logs the answer for now
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
  });
});

var question = document.getElementById("question");
question.addEventListener('change', (e) => {
  var q = question.value;

  if (q[q.length - 1] != '?') {
    window.alert("This is not a valid question!");
    return;
  }

  var rnd = Math.random() * 2;
  if (rnd) {
    document.getElementById("8ball-answer").textContent = "Yes";
  } else {
    document.getElementById("8ball-answer").textContent = "No";
  }
});

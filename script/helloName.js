function helloName(name, studentId) {
  alert(`Hello, ${name}! 학번: ${studentId}`);
}

const inputName = document.getElementById("helloName");
const inputId = document.getElementById("studentId");
const helloBtn = document.getElementById("helloBtn");

helloBtn.addEventListener("click", () => {
  const name = inputName.value;
  const studentId = inputId.value;
  helloName(name, studentId);
});

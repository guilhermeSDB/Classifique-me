const opcao = document.querySelectorAll(".option");
const opcaoSpread = [...opcao];
const buttonSubmit = document.getElementById("submit");
const ratingElement = document.getElementById("rating");
const thanksElement = document.getElementById("thanks");
const classificationElement = document.getElementsByClassName("classification");
let erroElement = document.getElementsByClassName("error");
let valor = 0;

opcaoSpread.forEach(function (element) {
  element.addEventListener("click", function () {
    opcaoSpread.forEach(function (el) {
      el.classList.remove("active");
    });
    if (erroElement.length > 0) {
      erroElement[0].remove();
    }
    valor = element.dataset.value;
    element.classList.add("active");
  });
});

buttonSubmit.addEventListener("click", function () {
  if (valor > 0) {
    ratingElement.style.display = "none";
    const ilustrationElement = document.querySelector(".ilustration");
    let text = `Você selecionou ${valor} de 5`;
    createElement("div", text, "classification-result", ilustrationElement);

    thanksElement.style.display = "block";
  } else {
    if (erroElement.length == 0) {
      let text = "Selecione uma avaliação primeiro";
      createElement("div", text, "error", buttonSubmit);
    }
  }
});

function createElement(type, text, classes, elementToInsertAfter) {
  let divElement = document.createElement(type);
  divElement.innerText = text;
  divElement.classList.add(classes);
  elementToInsertAfter.after(divElement);
}

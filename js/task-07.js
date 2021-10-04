const textInput = document.querySelector("input#font-size-control");

textInput.addEventListener("input", (event) => {
  const spanText = document.querySelector("span#text");
  spanText.style.fontSize = textInput.value + "px";
});

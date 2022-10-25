const text = document.querySelector("#text");
const btn = document.querySelector("#convert-btn");

btn.addEventListener("click", function caseConverter() {
  let inputText = text.value;

  // CAMEL CASE
  const camelCase = (inputText) => {
    const [first, second] = inputText.split(" ");

    return (
      first.toLowerCase() +
      second[0].toUpperCase() +
      second.slice("1").toLowerCase()
    );
  };
  document.querySelector("#camel-case").textContent = camelCase(inputText);

  // PASCAL CASE
  const pascalCase = (inputText) => {
    const [first, second] = inputText.split(" ");

    return (
      first[0].toUpperCase() +
      first.slice("1").toLowerCase() +
      second[0].toUpperCase() +
      second.slice("1").toLowerCase()
    );
  };
  document.querySelector("#pascal-case").textContent = pascalCase(inputText);

  // SNAKE CASE
  const snakeCase = (inputText) => {
    const [first, second] = inputText.split(" ");

    return first.toLowerCase() + "_" + second.toLowerCase();
  };
  document.querySelector("#snake-case").textContent = snakeCase(inputText);

  // SCREAMING SNAKE CASE
  const screamingSnakeCase = (inputText) => {
    const [first, second] = inputText.split(" ");

    return first.toUpperCase() + "_" + second.toUpperCase();
  };
  document.querySelector("#screaming-snake-case").textContent =
    screamingSnakeCase(inputText);

  // KEBAB CASE
  const kebabCase = (inputText) => {
    const [first, second] = inputText.split(" ");

    return first.toLowerCase() + "-" + second.toLowerCase();
  };
  document.querySelector("#kebab-case").textContent = kebabCase(inputText);

  // SCREAMING KEBAB CASE
  const screamingKebabCase = (inputText) => {
    const [first, second] = inputText.split(" ");

    return first.toUpperCase() + "-" + second.toUpperCase();
  };
  document.querySelector("#screaming-kebab-case").textContent =
    screamingKebabCase(inputText);
});

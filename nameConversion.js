// Input Text Element
const inputTextEl = document.querySelector("#text");
// Case Converter Btn
const convertBtn = document.querySelector("#convert-btn");

// Output Case Elements
const camelCaseEl = document.querySelector("#camel-case");
const pascalCaseEl = document.querySelector("#pascal-case");
const snakeCaseEl = document.querySelector("#snake-case");
const screamingSnakeCaseEl = document.querySelector("#screaming-snake-case");
const kebabCaseEl = document.querySelector("#kebab-case");
const screamingKebabCaseEl = document.querySelector("#screaming-kebab-case");

// Event Listner on convert BTN to convert input text into multiple cases
convertBtn.addEventListener("click", () => {
  const inputText = inputTextEl.value;

  // Camel Case Converter
  const camelCaseConverter = (inputText) => {
    const [first, ...rest] = inputText.split(" ");
    const camels = rest.map(
      (word) => word[0].toUpperCase() + word.slice("1").toLowerCase()
    );
    return first.toLowerCase() + camels.join("");
  };
  camelCaseEl.textContent = camelCaseConverter(inputText);

  // Pascal Case Converter
  const pascalCaseConverter = (inputText) => {
    const [...rest] = inputText.split(" ");
    const pascals = rest.map(
      (word) => word[0].toUpperCase() + word.slice("1").toLowerCase()
    );
    return pascals.join("");
  };
  pascalCaseEl.textContent = pascalCaseConverter(inputText);

  // Snake Case Converter
  const snakeCaseConverter = (inputText) => {
    const [...rest] = inputText.split(" ");
    const snakes = rest.map((word) => word.toLowerCase());
    return snakes.join("_");
  };
  snakeCaseEl.textContent = snakeCaseConverter(inputText);

  // Screaming Snake Case Converter
  const screamingSnakeCaseConverter = (inputText) => {
    const [...rest] = inputText.split(" ");
    const screamingSnakes = rest.map((word) => word.toUpperCase());
    return screamingSnakes.join("_");
  };
  screamingSnakeCaseEl.textContent = screamingSnakeCaseConverter(inputText);

  // Kebab Case Converter
  const kebabCaseConverter = (inputText) => {
    const [...rest] = inputText.split(" ");
    const kebabs = rest.map(
      (word) => word[0].toUpperCase() + word.slice("1").toLowerCase()
    );
    return kebabs.join("-");
  };
  kebabCaseEl.textContent = kebabCaseConverter(inputText);

  // Screaming Kebab Case Converter
  const screamingKebabCaseConverter = (inputText) => {
    const [...rest] = inputText.split(" ");
    const screamingKebabs = rest.map((word) => word.toUpperCase());
    return screamingKebabs.join("-");
  };
  screamingKebabCaseEl.textContent = screamingKebabCaseConverter(inputText);
});

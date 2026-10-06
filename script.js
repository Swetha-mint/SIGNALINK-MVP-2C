const patterns = {
  HELLO: ["●","○","●"],
  YES: ["●","●"],
  STOP: ["●","○","○","●"]
};

const descriptions = {
  HELLO: "Three short pulses.",
  YES: "Two short pulses.",
  STOP: "A longer four-step pattern."
};

const token = document.getElementById("token");
const pattern = document.getElementById("pattern");
const pulse = document.getElementById("pulse");
const state = document.getElementById("state");
const description = document.getElementById("description");
const log = document.getElementById("log");
const clear = document.getElementById("clear");

function render(eventName){
  const selected = patterns[eventName];
  token.textContent = eventName;
  pattern.textContent = selected.join(" ");
  description.textContent = descriptions[eventName];
  state.textContent = "ACTIVE";

  pulse.classList.remove("active");
  void pulse.offsetWidth;
  pulse.classList.add("active");

  const item = document.createElement("li");
  item.textContent = eventName + " → " + selected.join("");
  log.prepend(item);
}

document.querySelectorAll("[data-event]").forEach(button => {
  button.addEventListener("click", () => render(button.dataset.event));
});

clear.addEventListener("click", () => {
  log.innerHTML = "";
  token.textContent = "—";
  pattern.textContent = "Select an event.";
  description.textContent = "This represents a future vibration-motor output.";
  state.textContent = "READY";
  pulse.classList.remove("active");
});

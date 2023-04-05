console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');
input.addEventListener("input", function () {
  this.value = this.value.toUpperCase();
});

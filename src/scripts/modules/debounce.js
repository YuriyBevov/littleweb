export let debounce = false;

export function setDebounce() {
  debounce = true;
  setTimeout(() => {
    debounce = false;
  }, 1000);
}

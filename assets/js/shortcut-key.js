// Keep the search toggle clean (icon only), regardless of platform.
document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    const shortcutKeyElement = document.querySelector("#search-toggle .nav-link");
    if (shortcutKeyElement) {
      shortcutKeyElement.innerHTML = '<i class="ti ti-search"></i>';
    }
  }
});

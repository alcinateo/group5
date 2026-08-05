// Tracks which of the 8 story pages this visitor has opened (localStorage)
// and updates the "N/8 Explored" badge in the header on every page.
(function () {
  const STORY_PAGES = [
    "story1.html", "story2.html", "story3.html", "story4.html",
    "story5.html", "story6.html", "story7.html", "story8.html"
  ];
  const STORAGE_KEY = "athenaeum-read-stories";

  function getReadSet() {
    try {
      return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
    } catch (e) {
      return new Set();
    }
  }

  const currentPage = window.location.pathname.split("/").pop();
  const readSet = getReadSet();

  if (STORY_PAGES.includes(currentPage) && !readSet.has(currentPage)) {
    readSet.add(currentPage);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...readSet]));
  }

  const countEl = document.getElementById("progressCount");
  if (countEl) {
    countEl.textContent = readSet.size + "/8";
  }
})();

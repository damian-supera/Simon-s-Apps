(function () {
    const buttons = Array.from(document.querySelectorAll("[data-lang-button]"));
    const sections = Array.from(document.querySelectorAll("[data-lang-section]"));
    const storageKey = "dateup-pages-lang";

    function applyLanguage(lang) {
        sections.forEach((section) => {
            section.classList.toggle("active", section.dataset.langSection === lang);
        });
        buttons.forEach((button) => {
            button.classList.toggle("active", button.dataset.langButton === lang);
            button.setAttribute("aria-pressed", button.dataset.langButton === lang ? "true" : "false");
        });
        document.documentElement.lang = lang === "en" ? "en" : "pl";
        localStorage.setItem(storageKey, lang);
    }

    const preferred = localStorage.getItem(storageKey);
    const browserLang = (navigator.language || "").toLowerCase().startsWith("pl") ? "pl" : "en";
    const initial = preferred || browserLang || "pl";

    buttons.forEach((button) => {
        button.addEventListener("click", () => applyLanguage(button.dataset.langButton));
    });

    applyLanguage(initial);
})();

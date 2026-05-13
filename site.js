(function () {
    const buttons = Array.from(document.querySelectorAll("[data-lang-button]"));
    const sections = Array.from(document.querySelectorAll("[data-lang-section]"));
    const storageKey = "simons-apps-lang";
    const config = window.SIMONS_APPS_CONFIG || { apps: {} };
    let preferred = null;

    function isAppVisible(appId) {
        if (!appId) {
            return true;
        }
        const appConfig = config.apps[appId];
        return !appConfig || appConfig.visible !== false;
    }

    function applyAppVisibility() {
        const appElements = Array.from(document.querySelectorAll("[data-app-id]"));
        appElements.forEach((element) => {
            const visible = isAppVisible(element.dataset.appId);
            element.hidden = !visible;
            element.setAttribute("aria-hidden", visible ? "false" : "true");
        });

        const pageAppId = document.body.dataset.appPage;
        if (pageAppId && !isAppVisible(pageAppId)) {
            window.location.replace("../index.html");
        }
    }

    function applyLanguage(lang) {
        sections.forEach((section) => {
            section.classList.toggle("active", section.dataset.langSection === lang);
        });
        buttons.forEach((button) => {
            button.classList.toggle("active", button.dataset.langButton === lang);
            button.setAttribute("aria-pressed", button.dataset.langButton === lang ? "true" : "false");
        });
        document.documentElement.lang = lang === "en" ? "en" : "pl";
        try {
            localStorage.setItem(storageKey, lang);
        } catch (error) {
            // Ignore storage failures and keep the page functional.
        }
    }

    try {
        preferred = localStorage.getItem(storageKey);
    } catch (error) {
        preferred = null;
    }
    const browserLang = (navigator.language || "").toLowerCase().startsWith("pl") ? "pl" : "en";
    const initial = preferred || browserLang || "pl";

    buttons.forEach((button) => {
        button.addEventListener("click", () => applyLanguage(button.dataset.langButton));
    });

    applyAppVisibility();
    applyLanguage(initial);
})();

const getSelectedLanguage = () => {
    const systemLanguage = navigator.language.split("-")[0];
    const urlParams = new URLSearchParams(window.location.search);
    const urlLanguage = urlParams.get("lang");
    const availableLanguages = ["de", "en", "es", "fr", "ja", "pt"];

    let selectedLanguage = urlLanguage || systemLanguage;

    if (!availableLanguages.includes(selectedLanguage)) {
        selectedLanguage = "en";
        updateLanguageQueryParam(selectedLanguage);
    } else if (urlLanguage !== selectedLanguage) {
        updateLanguageQueryParam(selectedLanguage);
    }
    return selectedLanguage;
};

const updateLanguageQueryParam = (language) => {
    const newUrl = `${window.location.origin}${window.location.pathname}?lang=${language}`;
    window.history.replaceState(null, null, newUrl);
};

const loadLanguageData = async (language) => {
    const jsonFilePath = `../../public/langs/${language}.json`;
    let data = {
        language: language,
        languageData: {},
    };
    try {
        const response = await fetch(jsonFilePath);
        data.languageData = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при загрузке языка:", error);
        return null;
    }
};

export { getSelectedLanguage, updateLanguageQueryParam, loadLanguageData };
import '../css/null.css'
import '../css/style.css'
import '../css/fonts.css'

function getSelectedLanguage() {
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
}

function updateLanguageQueryParam(language) {
    const newUrl = `${window.location.origin}${window.location.pathname}?lang=${language}`;
    window.history.replaceState(null, null, newUrl);
}

function loadLanguageData(language) {
    const jsonFilePath = `../../public/langs/${language}.json`;

    fetch(jsonFilePath)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Ошибка при загрузке языка:", error);
        });
}

const selectedLanguage = getSelectedLanguage();
loadLanguageData(selectedLanguage);

document.querySelector('#banner').innerHTML = `
  <section class="banner__content">
    <a href="#" class="banner__close-btn"><img src="../../public/images/icons/cross.svg" alt="cross-icon"></a>
    <h2 class="banner__title">Get Unlimited Access</h2>
    <section class="banner__features features">
    
        <article class="features__item">
            <picture class="features__item-picture">
                <source type="image/avif" 
                    srcset="../../public/images/features/f1/f1.avif,
                    ../../public/images/features/f1/f1@2x.avif 2x,
                    ../../public/images/features/f1/f1@3x.avif 3x,
                ">
                <source type="image/webp" 
                    srcset="../../public/images/features/f1/f1.webp,
                    ../../public/images/features/f1/f1@2x.webp 2x,
                    ../../public/images/features/f1/f1@3x.webp 3x,
                ">
                <img 
                    src="../../public/images/features/f1/f1.jpg" 
                    srcset="../../public/images/features/f1/f1@2x.jpg 2x, 
                    ../../public/images/features/f1/f1@3x.jpg 3x"
                alt="feature">
            </picture>
            <p class="features__item-description">Unlimited Art Creation</p>
        </article>
        
        <article class="features__item">
            <picture class="features__item-picture">
                <source type="image/avif" 
                    srcset="../../public/images/features/f2/f2.avif,
                    ../../public/images/features/f2/f2@2x.avif 2x,
                    ../../public/images/features/f2/f2@3x.avif 3x,
                ">
                <source type="image/webp" 
                    srcset="../../public/images/features/f2/f2.webp,
                    ../../public/images/features/f2/f2@2x.webp 2x,
                    ../../public/images/features/f2/f2@3x.webp 3x,
                ">
                <img 
                    src="../../public/images/features/f2/f2.jpg" 
                    srcset="../../public/images/features/f2/f2@2x.jpg 2x, 
                    ../../public/images/features/f2/f2@3x.jpg 3x"
                alt="feature">
            </picture>
            <p class="features__item-description">Exclusive Styles</p>
        </article>
        
        <article class="features__item">
            <picture class="features__item-picture">
                <source type="image/avif" 
                    srcset="../../public/images/features/f3/f3.avif,
                    ../../public/images/features/f3/f3@2x.avif 2x,
                    ../../public/images/features/f3/f3@3x.avif 3x,
                ">
                <source type="image/webp" 
                    srcset="../../public/images/features/f3/f3.webp,
                    ../../public/images/features/f3/f3@2x.webp 2x,
                    ../../public/images/features/f3/f3@3x.webp 3x,
                ">
                <img 
                    src="../../public/images/features/f3/f3.jpg" 
                    srcset="../../public/images/features/f3/f3@2x.jpg 2x, 
                    ../../public/images/features/f3/f3@3x.jpg 3x"
                alt="feature">
            </picture>
            <p class="features__item-description">Magic Avatars With 20% Off</p>
        </article>
        
    </section>
    <section class="banner__plans plans">
        <div class="plans__items">
            <label class="plans__item">
                <input type="radio" name="plans" value="apple" checked>
                <div class="plans__item-content">
                    <div class="plans__item-offer">
                        <div class="plans__item-offer-title">YEARLY ACCESS</div>
                        <div class="plans__item-offer-description">Just $39.99 per year</div>
                    </div>
                    <div class="plans__item-price">$0.48 <br/> per week</div>
                    <span class="plans__item--best-offer-mark">BEST OFFER</span>
                </div>
            </label>
            <label class="plans__item">
                <input type="radio" name="plans" value="google">
                <div class="plans__item-content">
                    <div class="plans__item-offer">
                        <div class="plans__item-offer-title">WEEKLY ACCESS</div>
                    </div>
                    <div class="plans__item-price">$6.99 <br/> per week</div>
                </div>
            </label>
        </div>
        <a id="continue-button" class="plans__button" href="#">Continue</a>
    </section>
    <footer class="banner__footer">
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Restore</a>
    </footer>
  </section>
`



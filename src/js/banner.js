import '../css/null.css';
import '../css/style.css';
import '../css/fonts.css';
import {getSelectedLanguage, loadLanguageData} from './languageUtils.js';
import {getActualPrice} from "./priceUtils.js";

const selectedLanguage = getSelectedLanguage();
function replacePrice(text, replacement) {
    return text.replace('{{price}}', replacement);
}
(async function getData() {
  const data = await loadLanguageData(selectedLanguage);
  const {language, languageData} = data;
  const prices = await getActualPrice(data.language);

  document.querySelector('#banner').innerHTML = `
  <section class="banner__content">
    <a href="#" class="banner__close-btn"><img src="../../public/images/icons/cross.svg" alt="cross-icon"></a>
    <h2 class="banner__title">${languageData["Get Unlimited <br>Access"]}</h2>
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
            <p class="features__item-description">${languageData["Unlimited Art <br>Creation"]}</p>
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
            <p class="features__item-description">${languageData["Exclusive <br>Styles"]}</p>
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
            <p class="features__item-description">${languageData["Magic Avatars <br>With 20% Off"]}</p>
        </article>
    </section>
    <section class="banner__plans plans">
        <div class="plans__items">
            <label class="plans__item">
                <input type="radio" name="plans" value="apple.com" checked>
                <div class="plans__item-content">
                    <div class="plans__item-offer">
                        <div class='plans__item-offer-title --${language}'>${languageData["YEARLY ACCESS"]}</div>
                        <div class="plans__item-offer-description --${language}">${replacePrice(languageData["Just {{price}} per year"], `${prices.yearly.perYear}`)}</div>
                    </div>
                    <div class="plans__item-price --${language}">${replacePrice(languageData["{{price}} <br>per week"], `${prices.yearly.perWeek}`)}</div>
                    <span class="plans__item--best-offer-mark">${languageData["BEST OFFER"]}</span>
                </div>
            </label>
            <label class="plans__item">
                <input type="radio" name="plans" value="google.com">
                <div class="plans__item-content">
                    <div class="plans__item-offer">
                        <div class="plans__item-offer-title --${language}">${languageData["WEEKLY ACCESS"]}</div>
                    </div>
                    <div class="plans__item-price --${language}">${replacePrice(languageData["{{price}} <br>per week"], `${prices.weekly}`)}</div>
                </div>
            </label>
        </div>
        <a id="continue-button" class="plans__button" href="https://apple.com">${languageData["Continue"]}</a>
    </section>
    <footer class="banner__footer --${language}">
        <a href="#">${languageData["Terms of Use"]}</a>
        <a href="#">${languageData["Privacy Policy"]}</a>
        <a href="#">${languageData["Restore"]}</a>
    </footer>
  </section>
`

    const continueButton = document.querySelector('#continue-button');
    continueButton.addEventListener('click', () => {
        const radioButtons = document.querySelectorAll('input[name="plans"]');
        const selectedRadioButton = Array.from(radioButtons).find(radio => radio.checked);
        if (selectedRadioButton) {
            continueButton.setAttribute('href', `https://${selectedRadioButton.value}/`);
        }
    })

})()
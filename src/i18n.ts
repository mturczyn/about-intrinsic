import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const SUPPORTED_LANGUAGES = { pl: 'pl-PL', en: 'en-US' }

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    [SUPPORTED_LANGUAGES.en]: {
        translation: {
            helloWithIntro: 'Hello, I am Michał',
            homePageIntroduction: {
                firstPara: `My name is Michał Turczyn. I work as as software
                        engineer, I develop websites (such as this one) and I
                        enjoy what I do. I like to deeply understand
                        whatever I do and drive things to completion.`,
                secondPara: `
                        I am Maths graduate, which helped me a lot gaining
                        programming skills.`,
                thirdPara: `My first programming language which I leanred was C#
                        with WinForms framework. Over the years I could
                        experience other .NET frameworks, such as ASP.NET (Core, Razor Pages) or WPF. I also leanred JS along the way (HTML, CSS, JS)
                        and React framework.`,
            },
            pastEmployers: 'Past employers',
            Poland: 'Poland',

            // technologyStackPage
            Theming: 'Theming',
            themingDescription:
                'For theming I have used CSS variables only. I could use some package, such as MaterialUI or PrimeReact, to help build better UI faster, but it was not necessary, so I just tried to keep this site size at minimum.',
            frameworkAndLibraries: 'Framework and libraries',
            '<p>To create this website, I have used React framework, in order to optimize development process. I did not use any advanced React features, such as hooks, as this page did not require complex logic. I think, I could even find lighter library, with fewer features, that would accomplish the same.</p><p>I also used React libraries for features: routing is implemented with react-router package and there is multilanguage (PL and ENG) support, thanks to react-nexti18n package.</p>`:`<p>To create this website, I have used React framework, in order to optimize development process. I did not use any advanced React features, such as hooks, as this page did not require complex logic. I think, I could even find lighter library, with fewer features, that would accomplish the same.</p><p>I also used React libraries for features: routing is implemented with react-router package and there is multilanguage (PL and ENG) support, thanks to react-nexti18n package.</p>':
                '<p>To create this website, I have used React framework, in order to optimize development process. I did not use any advanced React features, such as hooks, as this page did not require complex logic. I think, I could even find lighter library, with fewer features, that would accomplish the same.</p><p>I also used React libraries for features: routing is implemented with react-router package and there is multilanguage (PL and ENG) support, thanks to react-nexti18n package.</p>`:`<p>To create this website, I have used React framework, in order to optimize development process. I did not use any advanced React features, such as hooks, as this page did not require complex logic. I think, I could even find lighter library, with fewer features, that would accomplish the same.</p><p>I also used React libraries for features: routing is implemented with react-router package and there is multilanguage (PL and ENG) support, thanks to react-nexti18n package.</p>',

            '<p>Docker allows to package any application (such as this site) together with all its dependencies (operating system together with executables and libraries), and create an image out of it. Running this image (creating container) means that we will be running the application in exact same way as deployed application (if the server/cloud provider supports Docker). This gives better way of testing the app.</p><p>Adding Docker was not my main concern here, but since I deploy to Azure (which supports Docker), it made more sense to prepare this (so I have more options when it comes to hosting the website).</p>': `<p>Docker allows to package any application (such as this site) together with all its dependencies (operating system together with executables and libraries), and create an image out of it. Running this image (creating container) means that we will be running the application in exact same way as deployed application (if the server/cloud provider supports Docker). This gives better way of testing the app.</p>
                <p>Adding Docker was not my main concern here, but since I deploy to Azure (which supports Docker), it made more sense to prepare this (so I have more options when it comes to hosting the website).</p>`,
            'This website is, as of time of writing, hosted in Azure as Web App Service. It is hosted as docker image instance.':
                'This website is, as of time of writing, hosted in Azure as Web App Service. It is hosted as docker image instance.',

            CICD: 'CI/CD',
            Hosting: 'Hosting',
            and: 'and',
            repository: 'repository',
            'GitHub repository': 'GitHub repository',
            'Code for the website is stored in':
                'Code for the website is stored in',
            '<p>In Azure, in Web App deployment center, I have truned on automatic deployment, which takes place on any merge to main branch of the repository for this website (on GitHub, GitHub actions take care of that, pipeline generated by Azure).</p>':
                '<p>In Azure, in Web App deployment center, I have truned on automatic deployment, which takes place on any merge to main branch of the repository for this website (on GitHub, GitHub actions take care of that, pipeline generated by Azure).</p>',

            Home: 'Home',
            'Contact info': 'Contact info',
            'Technology stack': 'Technology stack',

            'Intrinsic | Web Development and Programming | Technology stack':
                'Intrinsic | Web Development and Programming | Technology stack',
            'Intrinsic | Web Development and Programming | Zabrze':
                'Intrinsic | Web Development and Programming | Zabrze',
            'Intrinsic | Web Development and Programming | Contact info':
                'Intrinsic | Web Development and Programming | Contact info',
            // Misc
            'I have worked for following companies throughout my career:':
                'I have worked for following companies throughout my career:',
        },
    },
    [SUPPORTED_LANGUAGES.pl]: {
        translation: {
            'Intrinsic | Web Development and Programming | Technology stack':
                'Intrinsic | Tworzenie stron internetowych i programowanie | Stos technologiczny',
            'Intrinsic | Web Development and Programming | Zabrze':
                'Intrinsic | Tworzenie stron internetowych | Zabrze',
            'Intrinsic | Web Development and Programming | Contact info':
                'Intrinsic | Tworzenie stron internetowych | Informacje kontaktowe',
            Home: 'Glówna',
            'Contact info': 'Kontakt',
            'Technology stack': 'Stack technologiczny',

            helloWithIntro: 'Cześć, jestem Michał',
            homePageIntroduction: {
                firstPara: `Nazywam się Michał Turczyn. Pracuję jako inżynier oprogramowania, tworzę strony internetowe (takie jak ta) i cieszę się z tego, co robię. Lubię dogłębnie rozumieć to, co robię, i doprowadzać rzeczy do końca.`,
                secondPara: `
                        Jestem absolwentem matematyki, co bardzo pomogło mi w zdobywaniu umiejętności programowania.`,
                thirdPara: `Mój pierwszy język programowania, który nauczyłem się, to C# wraz z frameworkiem WinForms. Przez lata miałem okazję pracować z wieloma frameworkami .NET, takimi jak ASP.NET (Core, Razor Pages) czy WPF, Blazor. Nauczyłem się również JS (HTML, CSS, JS) i frameworka React.`,
            },
            pastEmployers: 'Poprzedni pracodawcy',
            Poland: 'Polska',
            // technologyStackPage
            Theming: 'Motywy',
            themingDescription:
                'Do motywów użyłem jedynie zmiennych CSS. Mogłem użyć jakiejś biblioteki, takiej jak MaterialUI czy PrimeReact, aby szybciej budować lepsze interfejsy użytkownika, ale nie było to konieczne, więc postanowiłem utrzymać rozmiar tej strony na minimalnym poziomie.',
            frameworkAndLibraries: 'Frameworki i biblioteki',
            '<p>To create this website, I have used React framework, in order to optimize development process. I did not use any advanced React features, such as hooks, as this page did not require complex logic. I think, I could even find lighter library, with fewer features, that would accomplish the same.</p><p>I also used React libraries for features: routing is implemented with react-router package and there is multilanguage (PL and ENG) support, thanks to react-nexti18n package.</p>':
                '<p>Do stworzenia tej strony użyłem frameworka React, aby zoptymalizować proces deweloperski. Nie korzystałem z zaawansowanych funkcji React, takich jak haki (hooks), ponieważ ta strona nie wymagała skomplikowanej logiki. Myślę, że mogłem nawet znaleźć lżejszą bibliotekę, z mniejszą liczbą funkcji, która osiągnęłaby to samo.</p><p>Użyłem również bibliotek React do funkcji: routing jest implementowany przy użyciu pakietu react-router, a obsługiwane są różne języki (PL i ENG), dzięki pakietowi react-nexti18n.</p>',
            '<p>Docker allows to package any application (such as this site) together with all its dependencies (operating system together with executables and libraries), and create an image out of it. Running this image (creating container) means that we will be running the application in exact same way as deployed application (if the server/cloud provider supports Docker). This gives better way of testing the app.</p><p>Adding Docker was not my main concern here, but since I deploy to Azure (which supports Docker), it made more sense to prepare this (so I have more options when it comes to hosting the website).</p>': `<p>Docker pozwala spakować dowolną aplikację (taką jak ta strona) wraz ze wszystkimi jej zależnościami (system operacyjny wraz z plikami wykonywalnymi i bibliotekami) i stworzyć z niej obraz. Uruchomienie tego obrazu (tworzenie kontenera) oznacza, że uruchamiamy aplikację w dokładnie taki sam sposób, jak wdrożona aplikacja (jeśli serwer/dostawca chmury obsługuje Docker). Daje to lepszy sposób testowania aplikacji.</p><p>Dodanie Docker-a nie było moim głównym zmartwieniem tutaj, ale ponieważ wdrażam na Azure (które obsługuje Docker), miało to sens, aby być przygotowanym (więcej opcji dotyczących hostingu strony).</p>`,
            'This website is, as of time of writing, hosted in Azure as Web App Service. It is hosted as docker image instance.':
                'Ta strona jest, w chwili pisania, hostowana w Azure jako usługa Web App. Jest hostowana jako instancja obrazu Docker.',
            CICD: 'CI/CD',
            Hosting: 'Hosting',
            and: 'i',
            repository: 'repozytorium',
            'GitHub repository': 'repozytorium GitHub',
            'Code for the website is stored in':
                'Kod strony jest przechowywany w',
            '<p>In Azure, in Web App deployment center, I have truned on automatic deployment, which takes place on any merge to main branch of the repository for this website (on GitHub, GitHub actions take care of that, pipeline generated by Azure).</p>':
                '<p>Na platformie Azure, w centrum wdrażania w usłudze Web App, włączyłem automatyczne wdrażanie, które ma miejsce po każdym zmergowaniu do głównej gałęzi repozytorium dla tej strony (na GitHubie, GitHub Actions zajmuje się tym, a plik pipeline utworzony został przez Azure).</p>',
            // Misc
            'I have worked for following companies throughout my career:':
                'Przez całą moją karierę pracowałem dla następujących firm:',
        },
    },
}

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: SUPPORTED_LANGUAGES.en,
        lng: SUPPORTED_LANGUAGES.pl, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    })

export default i18n

export const en = {
    chatPageTitle: 'Chat with AI powered bot',
    chatbotIntro:
        'Hi, I am a chat bot, powered by language model. Available language models: {{modelsList}}. Model {{modelToUse}} will be used in this conversation.',
    chatFeatureTitle: 'AI Powered Chat Feature',
    chatFeatureIntro:
        'This space is dedicated to showcasing an AI powered chat experience.',
    chatFeatureOfflineNotice:
        'However, due to high operational costs, the AI server is currently offline. This chat was created as a proof of concept for testing purposes.',
    chatFeatureContact:
        "If you'd like to see it in action, please contact me, and I'll gladly enable the AI server temporarily for a demonstration.",
    yourMessage: 'Your Message',
    'Chat with AI bot': 'Chat with AI bot',
    helloWithIntro: 'Hello, I am Michał',
    homePageIntroduction: {
        firstPara: `My name is Michał Turczyn. I work as a software
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
        fourthPara:
            '<0>I try to constantly learn and improve. After building this website, I started learning Next.js to explore React Server Components. I have created <0>other site</0> with Next.js as a learning project.</0>',
    },
    pastEmployers: 'Past employers',
    Poland: 'Poland',

    // technologyStackPage
    Theming: 'Theming',
    themingDescription:
        'For theming I have used CSS variables only. I could use some package, such as MaterialUI or PrimeReact, to help build better UI faster, but it was not necessary, so I just tried to keep this site size at minimum.',
    frameworkAndLibraries: 'Framework and libraries',
    '<p>To create this website, I have used React framework, in order to optimize development process. I did not use any advanced React features, such as hooks, as this page did not require complex logic. I think, I could even find lighter library, with fewer features, that would accomplish the same.</p><p>I also used React libraries for features: routing is implemented with react-router package and there is multilanguage (PL and ENG) support, thanks to react-nexti18n package.</p>':
        '<p>To create this website, I have used React framework, in order to optimize development process. I did not use any advanced React features, such as hooks, as this page did not require complex logic. I think, I could even find lighter library, with fewer features, that would accomplish the same.</p><p>I also used React libraries for features: routing is implemented with react-router package and there is multilanguage (PL and ENG) support, thanks to react-nexti18n package.</p>',

    '<p>Docker allows to package any application (such as this site) together with all its dependencies (operating system together with executables and libraries), and create an image out of it. Running this image (creating container) means that we will be running the application in exact same way as deployed application (if the server/cloud provider supports Docker). This gives better way of testing the app.</p><p>Adding Docker was not my main concern here, but since I deploy to Azure (which supports Docker), it made more sense to prepare this (so I have more options when it comes to hosting the website).</p>': `<p>Docker allows to package any application (such as this site) together with all its dependencies (operating system together with executables and libraries), and create an image out of it. Running this image (creating container) means that we will be running the application in exact same way as deployed application (if the server/cloud provider supports Docker). This gives better way of testing the app.</p>
                <p>Adding Docker was not my main concern here, but since I deploy to Azure (which supports Docker), it made more sense to prepare this (so I have more options when it comes to hosting the website).</p>`,
    'This website is, as of time of writing, hosted in Azure as Web App Service. It is hosted as docker image instance.':
        'This website is, as of time of writing, hosted in Azure as Web App Service. It is hosted as docker image instance.',

    CICD: 'CI/CD',
    Hosting: 'Hosting',
    and: 'and',
    repository: 'repository',
    'GitHub repository': 'GitHub repository',
    'Code for the website is stored in': 'Code for the website is stored in',
    "<p>In Azure's Web App Deployment Center, I initially enabled automatic deployment, which triggered a deployment whenever a merge was made to the main branch of the GitHub repository. This process was managed by GitHub Actions, with a pipeline automatically generated by Azure.</p><p>Later, after gaining more experience with GitHub Actions, I decided to create a custom pipeline from scratch, which now handles the deployment of the website.</p>":
        "<p>In Azure's Web App Deployment Center, I initially enabled automatic deployment, which triggered a deployment whenever a merge was made to the main branch of the GitHub repository. This process was managed by GitHub Actions, with a pipeline automatically generated by Azure.</p><p>Later, after gaining more experience with GitHub Actions, I decided to create a custom pipeline from scratch, which now handles the deployment of the website.</p>",

    aiServerOverviewTitle: 'Chat with AI bot',
    aiServerOverview:
        '<0>This page features a <0>chat powered by artificial intelligence</0>, which operates on a specially designed server infrastructure. The AI server supporting this functionality was built independently, using dedicated Docker containers. The first container contains the Ollama API, which processes queries and generates responses in real time. The second container is based on NGINX, which serves as a security gateway — it receives all requests, verifies them, and if they are valid, forwards them to the Ollama API.</0> <1>The infrastructure was built using the Bicep language, which allows for declarative management of resources in Azure cloud. Additionally, the continuous integration and deployment (CI/CD) process has been automated using GitHub Actions, enabling rapid deployment of new changes. More information about this project can be found on GitHub: <0>AI cloud service repository</0>.</1>',

    Home: 'Home',
    'Contact info': 'Contact info',
    'Technology stack': 'Technology stack',

    'Intrinsic | Web Development and Programming | Technology stack':
        'Intrinsic | Web Development and Programming | Technology stack',
    'Intrinsic | Web Development and Programming | Zabrze':
        'Intrinsic | Web Development and Programming | Zabrze',
    'Intrinsic | Web Development and Programming | Contact info':
        'Intrinsic | Web Development and Programming | Contact info',
    'PWA and service workers': 'PWA and service workers',
    'By specifying manifest file for the webpage correctly, I have enabled this page to work as PWA (so it is installable as application). Moreover, I have added offline support using service workers (page can be still reachable, when user is offline).':
        'By specifying manifest file for the webpage correctly, I have enabled this page to work as PWA (so it is installable as application). Moreover, I have added offline support using service workers (page can be still reachable, when user is offline).',
    'PWA workshop': 'PWA workshop',
    'pwa-workshop-description':
        '<0>I have also launched <0>PWA website</0> with code based on <1>this tutorial</1>, which was about implementing and enhancing PWA website, which was simple markdown editor with possibility to open and save files, with live preview. The page, however, works correctly only on PCs.</0>',
    'Install the page as PWA': 'Install the page as PWA',
    'If viewing page in browser, page may be already installed. Another reason may be the lack of browser support for PWAs. Try different browser in order to install this page.':
        'If viewing page in browser, page may be already installed. Another reason may be the lack of browser support for PWAs. Try different browser in order to install this page.',
    'Already installed as PWA': 'Already installed as PWA.',
    '(if link is not working, try different browser, as some browsers, like Opera, do not support PWAs)':
        '(if link is not working, try different browser, as some browsers, like Opera, do not support PWAs)',
    // Misc
    'I have worked for following companies throughout my career:':
        'I have worked for following companies throughout my career:',
    copyToClipboard: 'Copy to clipboard',
    expandTableOfContents: 'Expand table of contents',
    collapseTableOfContents: 'Collapse table of contents',
    backToTop: 'Back to top',
}

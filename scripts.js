const toggleLanguage = document.getElementById("language-checkbox");
const switchLabel = document.getElementById("switch-label");
const bioText = document.getElementById("bio-text");

const educationTitle = document.getElementById("education-title");
const educationSubtitle = document.getElementById("education-subtitle");

const workXpTitle = document.getElementById("work-xp-title");
const magItTitle = document.getElementById("mag-it-title");
const magItSubtitle = document.getElementById("mag-it-subtitle");
const magItTime = document.getElementById("mag-it-time");
const magItContent = document.getElementById("mag-it-content");

const projectTitle = document.getElementById("project-title");
const fakeNewsTitle = document.getElementById("fake-news-title");
const fakeNewsTime = document.getElementById("fake-news-time");
const fakeNewsContent = document.getElementById("fake-news-content");
const leafAreaTitle = document.getElementById("leaf-area-title");
const leafAreaTime = document.getElementById("leaf-area-time");
const leafAreaContent = document.getElementById("leaf-area-content");
const uniAjudaTime = document.getElementById("uni-ajuda-time");
const uniAjudaContent = document.getElementById("uni-ajuda-content");

const bioSectionObject = {
    "text": [
        "Olá, bem-vindo(a) ao meu portfólio. Me chamo João Roberto Lopes da Silva e trabalho como Desenvolvedor Full Stack Jr. Meu dia-a-dia consiste no desenvolvimento de soluções e manutenção de aplicações JavaScript e .NET.",
        "Hi! Welcome to my portfolio, I'm João Roberto Lopes da Silva and I work as a Full Stack Jr. Developer. My day-to-day life consists of developing solutions and maintaining JavaScript and .NET applications."
    ]
};

const educationSectionObject = {
    "title": [
        "Educação", "Education"
    ],
    "subtitle": [
        "Bacharelado em Ciência da Computação",
        "Computer Science Bachelor's Degree"
    ]
};

const workExperienceSectionObject = {
    "title": ["Experiência Profissional", "Work Experience"],
    "magitTitle": ["Desenvolvedor Jr. FullStack MAG IT Partner", "Junior FullStack Developer at MAG IT Partner"],
    "magitTime": ["Maio 2020 - Março 2021", "May 2020 - March 2021"],
    "magitSubtitle": [
        "Empresa especializada em desenvolvimento de softwares e terceirização de serviços de TI",
        "Company that specializes in software development and IT service outsourcing"
    ],
    "magitContent": [
        "Desenvolvimento e manutenção de API's REST ASP.NET Core e aplicações Angular e TypeScript, configuração de microsserviços em Docker, noções básicas de CI com Jenkins e gerenciamento de kubernetes como microsserviço com Rancher. Implementação de soluções aplicando noções de arquitetura de software pertinentes a cada projeto e versionamento de código em Git.", 
        "Development and maintenance of REST ASP.NET Core APIs and Angular / TypeScript applications, configuration of microservices in Docker, basic knowledge of CI with Jenkins and management of kubernetes as microservice with Rancher. Implementation of solutions applying notions of software architecture relevant to each project and code version in Git."
    ],
}

const projectsSectionObject = {
    "title": ["Projetos", "Projects"],
    "fakeNewsTitle": ["Análise e Detecção de Fake News na Rede Social Twitter", "Analysis and Detection of Fake News on the Social Network Twitter"],
    "fakeNewsTime": ["Janeiro 2019 - Dezembro 2019", "January 2019 - December 2019"],
    "fakeNewsContent": [
        "Projeto que objetiva detectar possíveis fake news publicadas no Twitter por meio de um classificador probabilístico de Naive Bayes implementado em Python. Tal classificador foi treinado por uma base de dados de tweets composta de notícias extraídas e classificadas por mim, foram utilizadas bibliotecas como Scikit Learn, Tweepy e Pandas, além da API disponibilizada pelo Twitter para extração de tweets dentro da sua plataforma. O classificador alcançou uma acurácia máxima de 85% para a tarefa desejada.", 
        "Project that aims to detect possible fake news published on Twitter through a Naive Bayes probabilistic classifier implemented in Python. This classifier was trained by a database of tweets made up of news extracted and classified by me, libraries such as Scikit Learn, Tweepy and Pandas were used, in addition to the API made available by Twitter for extracting tweets within its platform. The classifier achieved a maximum accuracy of 85% for the desired task."
    ],
    "leafAreaTitle": ["Aplicação Móvel para Cálculo de Área Foliar", "Mobile Application for Leaf Area Calculation"],
    "leafAreaTime": ["Agosto 2019 - Dezembro 2019","August 2019 - December 2019"],
    "leafAreaContent": [
        "App Android para cálculo da área de folhas, objetivou-se substituir de maneira eficiente aparelhos móveis utilizados em campo com o mesmo fim, tendo em vista que tais aparelhos são muito caros. Por meio de uma biblioteca chamada OpenCV, que permitiu a segmentação da folha e a remoção da distorção da lente do aparelho celular e da utilização de SQLite para armazenamento de dados pertinentes ao processo.",
        "Android app for calculating the leaf area, the objective was to efficiently replace mobile devices used in the field for the same purpose, considering that such devices are very expensive. Through a library called OpenCV, which allowed the segmentation of the sheet and the removal of distortion from the lens of the mobile device and the use of SQLite to store data relevant to the process."
    ],
    "uniAjudaTime": ["Fevereiro 2020 - Em andamento","February 2020 - Ongoing"],
    "uniAjudaContent": [
        "Esse é um projeto pessoal onde objetiva-se a criação de uma aplicação móvel que irá auxiliar no processo de adaptação urbana de estudantes universitários migrantes. Por meio de algumas informações iniciais colhidas sobre o estudante, planeja-se que o aplicativo será capaz de auxiliar o estudante desde o processo para encontrar uma nova moradia ou república, onde se alimentar, até onde encontrar o xerox mais barato, por exemplo.",
        "This is a personal project that aims to create a mobile application that will assist in the urban adaptation process of migrant university students. Through some initial information collected about the student, it is planned that the application will be able to assist the student from the process to find a new home or republic, where to eat, until where to find the cheapest photocopy, for example."
    ]
}

function toggleBioSectionLanguage(pos) {
    bioText.innerHTML = bioSectionObject.text[pos];
}

function toggleEducationSectionLanguage(pos){
    educationTitle.innerHTML = educationSectionObject.title[pos];
    educationSubtitle.innerHTML = educationSectionObject.subtitle[pos];
}

function toggleWorkExperienceSectionLanguage(pos){
    workXpTitle.innerHTML = workExperienceSectionObject.title[pos];
    magItTitle.innerText = workExperienceSectionObject.magitTitle[pos];
    magItSubtitle.innerText = workExperienceSectionObject.magitSubtitle[pos];
    magItTime.innerText = workExperienceSectionObject.magitTime[pos];
    magItContent.innerText = workExperienceSectionObject.magitContent[pos];
}

function toggleProjectsSectionLanguage(pos){
    projectTitle.innerHTML = projectsSectionObject.title[pos];
    fakeNewsTitle.innerHTML = projectsSectionObject.fakeNewsTitle[pos];
    fakeNewsTime.innerHTML = projectsSectionObject.fakeNewsTime[pos];
    fakeNewsContent.innerHTML = projectsSectionObject.fakeNewsContent[pos];
    leafAreaTitle.innerHTML = projectsSectionObject.leafAreaTitle[pos];
    leafAreaTime.innerHTML = projectsSectionObject.leafAreaTime[pos];
    leafAreaContent.innerHTML = projectsSectionObject.leafAreaContent[pos];
    uniAjudaTime.innerHTML = projectsSectionObject.uniAjudaTime[pos];
    uniAjudaContent.innerHTML = projectsSectionObject.uniAjudaContent[pos];
}

function toggleAll(pos){
    toggleBioSectionLanguage(pos);
    toggleEducationSectionLanguage(pos);
    toggleWorkExperienceSectionLanguage(pos);
    toggleProjectsSectionLanguage(pos);
}

function toggleCheckbox(){
    if(toggleLanguage.checked){
        document.cookie = "language=1";
        document.getElementsByClassName('switch')[0].style.background = "var(--egg-yellow)";
        toggleAll(1);
    } else {
        document.getElementsByClassName('switch')[0].style.background = "var(--blackish)";
        document.cookie = "language=0";
        toggleAll(0);
    }
}

let cookies = document.cookie.split(" ");

for(let i = 0; i < cookies.length; i++){
    let [splittedCookie, cookieValue] = cookies[i].split("=");
    if(splittedCookie == "language" && cookieValue == "1"){
        document.getElementsByClassName('switch')[0].style.background = "var(--egg-yellow)";
        toggleLanguage.checked = true;   
        toggleAll(1);
    }
};
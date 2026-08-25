/* =========================================
   IMMIGRATION CND
   JAVASCRIPT
========================================= */


/* =========================================
   JOB DATA
========================================= */

const jobs = [

    {
        id: 1,
        title: "Agent de sécurité",
        salaryMin: 30000,
        salaryMax: 50000,
        salary: "30 000 $ à 50 000 $ / an",
        description:
            "Veille à la sécurité des biens et des personnes, effectue des rondes et surveille les systèmes de sécurité."
    },

    {
        id: 2,
        title: "Vendeur en magasin",
        salaryMin: 25000,
        salaryMax: 35000,
        salary: "25 000 $ à 35 000 $ / an",
        description:
            "Assiste les clients, effectue des ventes et maintient l'ordre dans le magasin."
    },

    {
        id: 3,
        title: "Assistant en soins de santé",
        salaryMin: 35000,
        salaryMax: 50000,
        salary: "35 000 $ à 50 000 $ / an",
        description:
            "Apporte un soutien aux professionnels de la santé dans les tâches liées aux soins des patients."
    },

    {
        id: 4,
        title: "Préposé à l'entretien ménager",
        salaryMin: 25000,
        salaryMax: 35000,
        salary: "25 000 $ à 35 000 $ / an",
        description:
            "Effectue le nettoyage et l'entretien des espaces résidentiels ou commerciaux."
    },

    {
        id: 5,
        title: "Caissier de supermarché",
        salaryMin: 25000,
        salaryMax: 35000,
        salary: "25 000 $ à 35 000 $ / an",
        description:
            "Enregistre les achats des clients et traite les transactions de paiement."
    },

    {
        id: 6,
        title: "Chauffeur livreur",
        salaryMin: 30000,
        salaryMax: 45000,
        salary: "30 000 $ à 45 000 $ / an",
        description:
            "Livre des marchandises ou des colis à des destinations spécifiées."
    },

    {
        id: 7,
        title: "Serveur ou serveuse",
        salaryMin: 25000,
        salaryMax: 40000,
        salary: "25 000 $ à 40 000 $ / an",
        description:
            "Prend les commandes, sert les clients et assure une expérience agréable dans les restaurants ou cafés."
    },

    {
        id: 8,
        title: "Aide-cuisinier",
        salaryMin: 25000,
        salaryMax: 35000,
        salary: "25 000 $ à 35 000 $ / an",
        description:
            "Assiste les chefs cuisiniers dans la préparation des repas et l'organisation de la cuisine."
    },

    {
        id: 9,
        title: "Technicien de maintenance",
        salaryMin: 35000,
        salaryMax: 50000,
        salary: "35 000 $ à 50 000 $ / an",
        description:
            "Effectue la maintenance préventive et corrective des équipements et installations."
    },

    {
        id: 10,
        title: "Coiffeur ou coiffeuse",
        salaryMin: 25000,
        salaryMax: 40000,
        salary: "25 000 $ à 40 000 $ / an",
        description:
            "Coupe, coiffe et entretient les cheveux des clients dans les salons de coiffure."
    },

    {
        id: 11,
        title: "Assistant en garderie",
        salaryMin: 25000,
        salaryMax: 40000,
        salary: "25 000 $ à 40 000 $ / an",
        description:
            "Fournit des soins aux enfants, organise des activités éducatives et assure leur sécurité."
    },

    {
        id: 12,
        title: "Éboueur",
        salaryMin: 28000,
        salaryMax: 40000,
        salary: "28 000 $ à 40 000 $ / an",
        description:
            "Collecte les déchets et assure le nettoyage des espaces publics."
    },

    {
        id: 13,
        title: "Technicien informatique",
        salaryMin: 35000,
        salaryMax: 55000,
        salary: "35 000 $ à 55 000 $ / an",
        description:
            "Fournit une assistance technique aux utilisateurs, résout les problèmes informatiques et assure le support technique."
    },

    {
        id: 14,
        title: "Assistant de pharmacie",
        salaryMin: 30000,
        salaryMax: 45000,
        salary: "30 000 $ à 45 000 $ / an",
        description:
            "Soutient les pharmaciens dans la distribution des médicaments et l'accueil des clients."
    },

    {
        id: 15,
        title: "Aide-menuisier",
        salaryMin: 28000,
        salaryMax: 40000,
        salary: "28 000 $ à 40 000 $ / an",
        description:
            "Assiste les menuisiers dans la fabrication, l'assemblage et l'installation de structures en bois."
    },

    {
        id: 16,
        title: "Aide-jardinier",
        salaryMin: 25000,
        salaryMax: 35000,
        salary: "25 000 $ à 35 000 $ / an",
        description:
            "Soutient les jardiniers dans l'entretien des espaces verts, la plantation et l'aménagement paysager."
    },

    {
        id: 17,
        title: "Assistant en photographie",
        salaryMin: 30000,
        salaryMax: 45000,
        salary: "30 000 $ à 45 000 $ / an",
        description:
            "Soutient les photographes dans la préparation du matériel, l'éclairage et la prise de vue."
    },

    {
        id: 18,
        title: "Technicien d'entretien de véhicules",
        salaryMin: 30000,
        salaryMax: 50000,
        salary: "30 000 $ à 50 000 $ / an",
        description:
            "Effectue l'entretien courant des véhicules, les réparations et les diagnostics mécaniques."
    },

    {
        id: 19,
        title: "Aide-maçon",
        salaryMin: 30000,
        salaryMax: 45000,
        salary: "30 000 $ à 45 000 $ / an",
        description:
            "Assiste les maçons professionnels dans les travaux de construction, de briques et de préparation des matériaux."
    },

    {
        id: 20,
        title: "Footballeur",
        salaryMin: 28000,
        salaryMax: 40000,
        salary: "28 000 $ à 40 000 $ / an",
        description:
            "Participe à des formations de football et peut évoluer dans des équipes ou structures sportives."
    },


    /* 10 EMPLOIS SUPPLÉMENTAIRES */

    {
        id: 21,
        title: "Manutentionnaire",
        salaryMin: 28000,
        salaryMax: 42000,
        salary: "28 000 $ à 42 000 $ / an",
        description:
            "Manipule, déplace et organise les marchandises dans les entrepôts et centres logistiques."
    },

    {
        id: 22,
        title: "Préposé d'entrepôt",
        salaryMin: 30000,
        salaryMax: 45000,
        salary: "30 000 $ à 45 000 $ / an",
        description:
            "Participe à la réception, au rangement, à la préparation et à l'expédition des marchandises."
    },

    {
        id: 23,
        title: "Employé de restaurant",
        salaryMin: 25000,
        salaryMax: 38000,
        salary: "25 000 $ à 38 000 $ / an",
        description:
            "Participe aux activités quotidiennes d'un restaurant et assure le service aux clients."
    },

    {
        id: 24,
        title: "Aide-électricien",
        salaryMin: 30000,
        salaryMax: 45000,
        salary: "30 000 $ à 45 000 $ / an",
        description:
            "Assiste les professionnels dans l'installation, l'entretien et la réparation des équipements électriques."
    },

    {
        id: 25,
        title: "Peintre en bâtiment",
        salaryMin: 30000,
        salaryMax: 48000,
        salary: "30 000 $ à 48 000 $ / an",
        description:
            "Prépare les surfaces et réalise des travaux de peinture dans des bâtiments résidentiels ou commerciaux."
    },

    {
        id: 26,
        title: "Ouvrier agricole",
        salaryMin: 28000,
        salaryMax: 42000,
        salary: "28 000 $ à 42 000 $ / an",
        description:
            "Participe aux travaux agricoles, à l'entretien des cultures et aux opérations de récolte."
    },

    {
        id: 27,
        title: "Assistant administratif",
        salaryMin: 32000,
        salaryMax: 48000,
        salary: "32 000 $ à 48 000 $ / an",
        description:
            "Assure des tâches administratives, la gestion de documents et l'organisation quotidienne."
    },

    {
        id: 28,
        title: "Chauffeur de camion",
        salaryMin: 40000,
        salaryMax: 60000,
        salary: "40 000 $ à 60 000 $ / an",
        description:
            "Transporte des marchandises et assure les livraisons selon les itinéraires prévus."
    },

    {
        id: 29,
        title: "Soudeur",
        salaryMin: 35000,
        salaryMax: 55000,
        salary: "35 000 $ à 55 000 $ / an",
        description:
            "Assemble et répare des pièces métalliques en utilisant différents procédés de soudage."
    },

    {
        id: 30,
        title: "Opérateur de production",
        salaryMin: 30000,
        salaryMax: 48000,
        salary: "30 000 $ à 48 000 $ / an",
        description:
            "Travaille sur une ligne de production et participe au contrôle et à la fabrication des produits."
    }

];


/* =========================================
   DOM
========================================= */

const jobsGrid =
    document.getElementById("jobsGrid");

const jobsEmpty =
    document.getElementById("jobsEmpty");

const jobSearch =
    document.getElementById("jobSearch");

const salaryFilter =
    document.getElementById("salaryFilter");

const jobSelect =
    document.getElementById("emploi");

const registrationForm =
    document.getElementById("registrationForm");

const toast =
    document.getElementById("toast");


/* =========================================
   DISPLAY JOBS
========================================= */

function renderJobs(list = jobs) {

    jobsGrid.innerHTML = "";

    if (list.length === 0) {

        jobsEmpty.style.display = "block";

        return;
    }

    jobsEmpty.style.display = "none";


    list.forEach(job => {

        const article =
            document.createElement("article");

        article.className = "job-card";

        article.innerHTML = `

            <div class="job-top">

                <span class="job-number">
                    ${String(job.id).padStart(2, "0")}
                </span>

                <span class="job-salary">
                    ${job.salary}
                </span>

            </div>

            <h3>
                ${job.title}
            </h3>

            <p>
                ${job.description}
            </p>

            <button
                class="job-select"
                type="button"
                data-job="${job.title}">

                Choisir cet emploi →
                
            </button>

        `;

        jobsGrid.appendChild(article);

    });

}


/* =========================================
   POPULATE JOB SELECT
========================================= */

function populateJobSelect() {

    jobs.forEach(job => {

        const option =
            document.createElement("option");

        option.value = job.title;

        option.textContent =
            `${job.title} — ${job.salary}`;

        jobSelect.appendChild(option);

    });

}


/* =========================================
   SEARCH / FILTER
========================================= */

function filterJobs() {

    const search =
        jobSearch.value
            .toLowerCase()
            .trim();

    const minimum =
        salaryFilter.value === "all"
            ? 0
            : Number(salaryFilter.value) * 1000;


    const filtered =
        jobs.filter(job => {

            const matchesSearch =
                job.title
                    .toLowerCase()
                    .includes(search) ||

                job.description
                    .toLowerCase()
                    .includes(search);


            const matchesSalary =
                job.salaryMin >= minimum;


            return (
                matchesSearch &&
                matchesSalary
            );

        });


    renderJobs(filtered);

}


/* =========================================
   SELECT JOB
========================================= */

jobsGrid.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(".job-select");

        if (!button) return;

        const selectedJob =
            button.dataset.job;

        jobSelect.value =
            selectedJob;

        document
            .getElementById("registration")
            .scrollIntoView({
                behavior: "smooth"
            });

        showToast(
            `Emploi sélectionné : ${selectedJob}`
        );

    }
);


/* =========================================
   SEARCH EVENTS
========================================= */

jobSearch.addEventListener(
    "input",
    filterJobs
);

salaryFilter.addEventListener(
    "change",
    filterJobs
);


/* =========================================
   THEME
========================================= */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");


function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

        themeIcon.textContent = "☀️";

        localStorage.setItem(
            "cnd-theme",
            "dark"
        );

    } else {

        document.body.classList.remove("dark");

        themeIcon.textContent = "🌙";

        localStorage.setItem(
            "cnd-theme",
            "light"
        );

    }

}


/*
   MODE CLAIR PAR DÉFAUT
*/

const savedTheme =
    localStorage.getItem("cnd-theme");

applyTheme(
    savedTheme === "dark"
        ? "dark"
        : "light"
);


themeToggle.addEventListener(
    "click",
    () => {

        const isDark =
            document.body.classList.contains("dark");

        applyTheme(
            isDark
                ? "light"
                : "dark"
        );

    }
);


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


menuToggle.addEventListener(
    "click",
    () => {

        nav.classList.toggle("active");

    }
);


nav.querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove(
                    "active"
                );

            }
        );

    });


/* =========================================
   DATE SELECTORS
========================================= */

const jour =
    document.getElementById("jour");

const annee =
    document.getElementById("annee");


for (
    let i = 1;
    i <= 31;
    i++
) {

    const option =
        document.createElement("option");

    option.value =
        String(i).padStart(2, "0");

    option.textContent = i;

    jour.appendChild(option);

}


const currentYear =
    new Date().getFullYear();


for (
    let year = currentYear;
    year >= 1940;
    year--
) {

    const option =
        document.createElement("option");

    option.value = year;

    option.textContent = year;

    annee.appendChild(option);

}


/* =========================================
   FORM SUBMISSION
========================================= */

registrationForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const formData =
            new FormData(
                registrationForm
            );


        const nom =
            formData.get("nom");

        const prenom =
            formData.get("prenom");

        const emploi =
            formData.get("emploi");


        console.log(
            "Inscription :",
            {
                nom,
                prenom,
                emploi
            }
        );


        showToast(
            "Votre formulaire est prêt à être envoyé."
        );


        /*
          IMPORTANT :

          Ici il faudra connecter le formulaire
          au véritable système d'envoi du client :

          - PHP
          - Formspree
          - EmailJS
          - WordPress API
          - backend personnalisé
          - etc.

          Le formulaire HTML seul ne peut pas
          envoyer réellement les fichiers vers
          le serveur.
        */

    }
);


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3500
        );

}


/* =========================================
   HEADER SCROLL
========================================= */

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 10px 30px rgba(15,23,42,.08)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);


/* =========================================
   INITIALIZATION
========================================= */

populateJobSelect();

renderJobs();


console.log(
    "Immigration CND — site initialisé."
);

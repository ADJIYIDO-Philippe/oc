/* =========================================
   VISION CANADA CHRISTIAN YOPA
   JAVASCRIPT
========================================= */


/* =========================================
   JOB DATA
========================================= */

const jobs = [

    {
        id: 1,
        title: "Agent de sécurité",
        salaryMin: 3500,
        salaryMax: 6000,
        salary: "3 500 $ à 6 000 $ / mois",
        description:
            "Veille à la sécurité des biens et des personnes, effectue des rondes et surveille les systèmes de sécurité."
    },

    {
        id: 2,
        title: "Vendeur en magasin",
        salaryMin: 3500,
        salaryMax: 6000,
        salary: "3 500 $ à 6 000 $ / mois",
        description:
            "Assiste les clients, effectue des ventes et maintient l'ordre dans le magasin."
    },

    {
        id: 3,
        title: "Assistant en soins de santé",
        salaryMin: 8000,
        salaryMax: 11000,
        salary: "8 000 $ à 11 000 $ / mois",
        description:
            "Apporte un soutien aux professionnels de la santé dans les tâches liées aux soins des patients."
    },

    {
        id: 4,
        title: "Préposé à l'entretien ménager",
        salaryMin: 3500,
        salaryMax: 6000,
        salary: "3 500 $ à 6 000 $ / mois",
        description:
            "Effectue le nettoyage et l'entretien des espaces résidentiels ou commerciaux."
    },

    {
        id: 5,
        title: "Caissier de supermarché",
        salaryMin: 5000,
        salaryMax: 8000,
        salary: "5 000 $ à 8 000 $ / mois",
        description:
            "Enregistre les achats des clients et traite les transactions de paiement."
    },

    {
        id: 6,
        title: "Chauffeur livreur",
        salaryMin: 5000,
        salaryMax: 7000,
        salary: "5 000 $ à 7 000 $ / mois",
        description:
            "Livre des marchandises ou des colis à des destinations spécifiées."
    },

    {
        id: 7,
        title: "Serveur ou serveuse",
        salaryMin: 3500,
        salaryMax: 6000,
        salary: "3 500 $ à 6 000 $ / mois",
        description:
            "Prend les commandes, sert les clients et assure une expérience agréable dans les restaurants ou cafés."
    },

    {
        id: 8,
        title: "Aide-cuisinier",
        salaryMin: 3500,
        salaryMax: 5000,
        salary: "3 500 $ à 5 000 $ / mois",
        description:
            "Assiste les chefs cuisiniers dans la préparation des repas et l'organisation de la cuisine."
    },

    {
        id: 9,
        title: "Technicien de maintenance",
        salaryMin: 8000,
        salaryMax: 11000,
        salary: "8 000 $ à 11 000 $ / mois",
        description:
            "Effectue la maintenance préventive et corrective des équipements et installations."
    },

    {
        id: 10,
        title: "Coiffeur ou coiffeuse",
        salaryMin: 4000,
        salaryMax: 7000,
        salary: "4 000 $ à 7 000 $ / mois",
        description:
            "Coupe, coiffe et entretient les cheveux des clients dans les salons de coiffure."
    },

    {
        id: 11,
        title: "Assistant en garderie",
        salaryMin: 3500,
        salaryMax: 6000,
        salary: "3 500 $ à 6 000 $ / mois",
        description:
            "Fournit des soins aux enfants, organise des activités éducatives et assure leur sécurité."
    },

    {
        id: 12,
        title: "Éboueur",
        salaryMin: 4000,
        salaryMax: 7000,
        salary: "4 000 $ à 7 000 $ / mois",
        description:
            "Collecte les déchets et assure le nettoyage des espaces publics."
    },

    {
        id: 13,
        title: "Technicien informatique",
        salaryMin: 7000,
        salaryMax: 10000,
        salary: "7 000 $ à 10 000 $ / mois",
        description:
            "Fournit une assistance technique aux utilisateurs, résout les problèmes informatiques et assure le support technique."
    },

    {
        id: 14,
        title: "Assistant de pharmacie",
        salaryMin: 4000,
        salaryMax: 6000,
        salary: "4 000 $ à 6 000 $ / mois",
        description:
            "Soutient les pharmaciens dans la distribution des médicaments et l'accueil des clients."
    },

    {
        id: 15,
        title: "Aide-menuisier",
        salaryMin: 3500,
        salaryMax: 6000,
        salary: "3 500 $ à 6 000 $ / mois",
        description:
            "Assiste les menuisiers dans la fabrication, l'assemblage et l'installation de structures en bois."
    },

    {
        id: 16,
        title: "Aide-jardinier",
        salaryMin: 4000,
        salaryMax: 6000,
        salary: "4 000 $ à 6 000 $ / mois",
        description:
            "Soutient les jardiniers dans l'entretien des espaces verts, la plantation et l'aménagement paysager."
    },

    {
        id: 17,
        title: "Assistant en photographie",
        salaryMin: 4000,
        salaryMax: 7000,
        salary: "4 000 $ à 7 000 $ / mois",
        description:
            "Soutient les photographes dans la préparation du matériel, l'éclairage et la prise de vue."
    },

    {
        id: 18,
        title: "Technicien d'entretien de véhicules",
        salaryMin: 4000,
        salaryMax: 7000,
        salary: "4 000 $ à 7 000 $ / mois",
        description:
            "Effectue l'entretien courant des véhicules, les réparations et les diagnostics mécaniques."
    },

    {
        id: 19,
        title: "Aide-maçon",
        salaryMin: 4000,
        salaryMax: 6000,
        salary: "4 000 $ à 6 000 $ / mois",
        description:
            "Assiste les maçons professionnels dans les travaux de construction, de briques et de préparation des matériaux."
    },

    {
        id: 20,
        title: "Footballeur",
        salaryMin: 7000,
        salaryMax: 11000,
        salary: "7 000 $ à 11 000 $ / mois",
        description:
            "Participe à des formations de football et peut évoluer dans des équipes ou structures sportives."
    },

    {
        id: 21,
        title: "Manutentionnaire",
        salaryMin: 5000,
        salaryMax: 8000,
        salary: "5 000 $ à 8 000 $ / mois",
        description:
            "Manipule, déplace et organise les marchandises dans les entrepôts et centres logistiques."
    },

    {
        id: 22,
        title: "Préposé d'entrepôt",
        salaryMin: 4000,
        salaryMax: 7000,
        salary: "4 000 $ à 7 000 $ / mois",
        description:
            "Participe à la réception, au rangement, à la préparation et à l'expédition des marchandises."
    },

    {
        id: 23,
        title: "Employé de restaurant",
        salaryMin: 4000,
        salaryMax: 7000,
        salary: "4 000 $ à 7 000 $ / mois",
        description:
            "Participe aux activités quotidiennes d'un restaurant et assure le service aux clients."
    },

    {
        id: 24,
        title: "Aide-électricien",
        salaryMin: 5000,
        salaryMax: 8000,
        salary: "5 000 $ à 8 000 $ / mois",
        description:
            "Assiste les professionnels dans l'installation, l'entretien et la réparation des équipements électriques."
    },

    {
        id: 25,
        title: "Peintre en bâtiment",
        salaryMin: 4000,
        salaryMax: 7000,
        salary: "4 000 $ à 7 000 $ / mois",
        description:
            "Prépare les surfaces et réalise des travaux de peinture dans des bâtiments résidentiels ou commerciaux."
    },

    {
        id: 26,
        title: "Ouvrier agricole",
        salaryMin: 5000,
        salaryMax: 8000,
        salary: "5 000 $ à 8 000 $ / mois",
        description:
            "Participe aux travaux agricoles, à l'entretien des cultures et aux opérations de récolte."
    },

    {
        id: 27,
        title: "Assistant administratif",
        salaryMin: 7000,
        salaryMax: 10000,
        salary: "7 000 $ à 10 000 $ / mois",
        description:
            "Assure des tâches administratives, la gestion de documents et l'organisation quotidienne."
    },

    {
        id: 28,
        title: "Chauffeur de camion",
        salaryMin: 6000,
        salaryMax: 10000,
        salary: "6 000 $ à 10 000 $ / mois",
        description:
            "Transporte des marchandises et assure les livraisons selon les itinéraires prévus."
    },

    {
        id: 29,
        title: "Soudeur",
        salaryMin: 3500,
        salaryMax: 4000,
        salary: "3 500 $ à 4 000 $ / mois",
        description:
            "Assemble et répare des pièces métalliques en utilisant différents procédés de soudage."
    },

    {
        id: 30,
        title: "Opérateur de production",
        salaryMin: 4000,
        salaryMax: 7000,
        salary: "4 000 $ à 7 000 $ / mois",
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

    if (!jobsGrid) return;

    jobsGrid.innerHTML = "";

    if (list.length === 0) {

        if (jobsEmpty) {
            jobsEmpty.style.display = "block";
        }

        return;
    }

    if (jobsEmpty) {
        jobsEmpty.style.display = "none";
    }


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

    if (!jobSelect) return;

    jobs.forEach(job => {

        const option =
            document.createElement("option");

        option.value =
            job.title;

        option.textContent =
            `${job.title} — ${job.salary}`;

        jobSelect.appendChild(option);

    });

}


/* =========================================
   SEARCH / FILTER
========================================= */

function filterJobs() {

    if (!jobSearch || !salaryFilter) return;

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

if (jobsGrid) {

    jobsGrid.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(".job-select");

            if (!button) return;

            const selectedJob =
                button.dataset.job;


            if (jobSelect) {

                jobSelect.value =
                    selectedJob;

            }


            const registration =
                document.getElementById(
                    "registration"
                );


            if (registration) {

                registration.scrollIntoView({
                    behavior: "smooth"
                });

            }


            showToast(
                `Emploi sélectionné : ${selectedJob}`
            );

        }
    );

}


/* =========================================
   SEARCH EVENTS
========================================= */

if (jobSearch) {

    jobSearch.addEventListener(
        "input",
        filterJobs
    );

}


if (salaryFilter) {

    salaryFilter.addEventListener(
        "change",
        filterJobs
    );

}


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

        if (themeIcon) {
            themeIcon.textContent = "☀️";
        }

        localStorage.setItem(
            "cnd-theme",
            "dark"
        );

    } else {

        document.body.classList.remove("dark");

        if (themeIcon) {
            themeIcon.textContent = "🌙";
        }

        localStorage.setItem(
            "cnd-theme",
            "light"
        );

    }

}


const savedTheme =
    localStorage.getItem("cnd-theme");

applyTheme(
    savedTheme === "dark"
        ? "dark"
        : "light"
);


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            const isDark =
                document.body.classList.contains(
                    "dark"
                );


            applyTheme(
                isDark
                    ? "light"
                    : "dark"
            );

        }
    );

}


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


if (menuToggle && nav) {

    menuToggle.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "active"
            );

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

}


/* =========================================
   DATE SELECTORS
========================================= */

const jour =
    document.getElementById("jour");

const annee =
    document.getElementById("annee");


if (jour) {

    for (
        let i = 1;
        i <= 31;
        i++
    ) {

        const option =
            document.createElement("option");

        option.value =
            String(i).padStart(2, "0");

        option.textContent =
            i;

        jour.appendChild(option);

    }

}


if (annee) {

    const currentYear =
        new Date().getFullYear();


    for (
        let year = currentYear;
        year >= 1940;
        year--
    ) {

        const option =
            document.createElement("option");

        option.value =
            year;

        option.textContent =
            year;

        annee.appendChild(option);

    }

}


/* =========================================
   FORM SUBMISSION — FORMSPREE
========================================= */

if (registrationForm) {

    registrationForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton = registrationForm.querySelector(
            'button[type="submit"]'
        );

        const originalText = submitButton
            ? submitButton.textContent
            : "Envoyer mon inscription";


        try {

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Envoi en cours...";
            }


            /* =========================
               FORM DATA
            ========================= */

            const formData = new FormData(registrationForm);


            /* =========================
               DATE DE NAISSANCE
            ========================= */

            const jour = document.getElementById("jour");
            const mois = document.getElementById("mois");
            const annee = document.getElementById("annee");


            if (
                jour &&
                mois &&
                annee &&
                jour.value &&
                mois.value &&
                annee.value
            ) {

                const dateNaissance =
                    `${jour.value}/${mois.value}/${annee.value}`;

                formData.set(
                    "date_naissance",
                    dateNaissance
                );

            }


            /* =========================
               ENVOI FORMSPREE
            ========================= */

            const response = await fetch(
                "https://formspree.io/f/xdeonble",
                {
                    method: "POST",

                    body: formData,

                    headers: {
                        "Accept": "application/json"
                    }
                }
            );


            /* =========================
               RÉPONSE FORMSPREE
            ========================= */

            const data =
                await response.json().catch(() => null);


            console.log(
                "Réponse Formspree :",
                response.status,
                data
            );


            /* =========================
               SUCCÈS
            ========================= */

            if (response.ok) {

                showToast(
                    "✅ Votre inscription a été envoyée avec succès."
                );

                registrationForm.reset();

                return;
            }


            /* =========================
               ERREUR
            ========================= */

            let errorMessage =
                "❌ Une erreur est survenue.";


            if (data && data.errors) {

                const errors =
                    data.errors
                        .map(error => {

                            return error.message ||
                                   error.code ||
                                   "Erreur inconnue";

                        })
                        .join(" | ");


                if (errors) {
                    errorMessage += " " + errors;
                }

            }


            console.error(
                "Erreur Formspree :",
                response.status,
                data
            );


            showToast(
                errorMessage
            );

        }


        catch (error) {

            console.error(
                "Erreur réseau :",
                error
            );


            showToast(
                "❌ Impossible de contacter Formspree. Vérifiez votre connexion."
            );

        }


        finally {

            if (submitButton) {

                submitButton.disabled = false;

                submitButton.textContent =
                    originalText;

            }

        }

    });

}


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    if (!toast) {

        console.log(message);

        return;

    }


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


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


if (header) {

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

}


/* =========================================
   INITIALIZATION
========================================= */

populateJobSelect();

renderJobs();


console.log(
    "Vision Canada Christian Yopa — site initialisé."
);

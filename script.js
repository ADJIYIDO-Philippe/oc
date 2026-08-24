/* =========================================================
   OPPORTUNITÉ CANADA — JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     1. MENU MOBILE
     ========================================================= */

  const menu = document.getElementById("menu");
  const nav = document.getElementById("nav");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      nav.classList.toggle("open");

      const isOpen = nav.classList.contains("open");
      menu.setAttribute("aria-expanded", isOpen);
    });

    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", event => {
      if (
        nav.classList.contains("open") &&
        !nav.contains(event.target) &&
        !menu.contains(event.target)
      ) {
        nav.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
      }
    });
  }


  /* =========================================================
     2. ANNÉE AUTOMATIQUE
     ========================================================= */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =========================================================
     3. FILTRE DES OPPORTUNITÉS
     ========================================================= */

  const filters = document.querySelectorAll(".filter");
  const jobs = document.querySelectorAll(".job");

  filters.forEach(filterButton => {

    filterButton.addEventListener("click", () => {

      filters.forEach(button => {
        button.classList.remove("active");
      });

      filterButton.classList.add("active");

      const category = filterButton.dataset.filter;

      jobs.forEach(job => {

        const jobCategory = job.dataset.cat;

        if (category === "all" || jobCategory === category) {
          job.style.display = "";
        } else {
          job.style.display = "none";
        }

      });

    });

  });


  /* =========================================================
     4. FAQ ACCORDÉON
     ========================================================= */

  const faqQuestions = document.querySelectorAll(".faq-q");

  faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

      const item = question.closest(".faq-item");

      document.querySelectorAll(".faq-item").forEach(otherItem => {

        if (otherItem !== item) {
          otherItem.classList.remove("open");
        }

      });

      item.classList.toggle("open");

    });

  });


  /* =========================================================
     5. MODALS
     ========================================================= */

  window.openModal = function (id) {

    const modal = document.getElementById(id);

    if (!modal) return;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

  };


  window.closeModal = function (id) {

    const modal = document.getElementById(id);

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";

  };


  /* Fermeture en cliquant sur l'arrière-plan */

  document.querySelectorAll(".modal").forEach(modal => {

    modal.addEventListener("click", event => {

      if (event.target === modal) {
        closeModal(modal.id);
      }

    });

  });


  /* Fermeture avec la touche Échap */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      document.querySelectorAll(".modal.show").forEach(modal => {
        closeModal(modal.id);
      });

    }

  });


  /* =========================================================
     6. QUESTIONNAIRE
     ========================================================= */

  let quizStep = 1;

  const answers = [];

  const assessmentModal = document.getElementById("assessmentModal");
  const quiz = document.getElementById("quiz");
  const result = document.getElementById("result");
  const progress = document.getElementById("progress");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  const quizSteps = document.querySelectorAll(".q-step");


  function resetQuiz() {

    quizStep = 1;

    answers.length = 0;

    quizSteps.forEach(step => {

      step.classList.remove("active");

      step.querySelectorAll(".option").forEach(option => {
        option.classList.remove("selected");
      });

    });

    const firstStep = document.querySelector(
      '.q-step[data-step="1"]'
    );

    if (firstStep) {
      firstStep.classList.add("active");
    }

    if (quiz) {
      quiz.style.display = "";
    }

    if (result) {
      result.classList.remove("show");
    }

    if (progress) {
      progress.style.width = "25%";
    }

    if (prevButton) {
      prevButton.style.visibility = "hidden";
    }

    if (nextButton) {
      nextButton.textContent = "Continuer →";
    }

  }


  function updateQuiz() {

    quizSteps.forEach(step => {

      const stepNumber = Number(step.dataset.step);

      step.classList.toggle(
        "active",
        stepNumber === quizStep
      );

    });


    if (progress) {

      progress.style.width =
        ((quizStep / quizSteps.length) * 100) + "%";

    }


    if (prevButton) {

      prevButton.style.visibility =
        quizStep === 1 ? "hidden" : "visible";

    }


    if (nextButton) {

      nextButton.textContent =
        quizStep === quizSteps.length
          ? "Terminer →"
          : "Continuer →";

    }

  }


  /* Sélection des réponses */

  quizSteps.forEach(step => {

    const options = step.querySelectorAll(".option");

    options.forEach(option => {

      option.addEventListener("click", () => {

        options.forEach(otherOption => {
          otherOption.classList.remove("selected");
        });

        option.classList.add("selected");

        answers[quizStep - 1] =
          option.textContent.trim();

      });

    });

  });


  /* Bouton Continuer */

  window.nextStep = function () {

    const currentStep =
      document.querySelector(".q-step.active");

    if (!currentStep) return;

    const selectedOption =
      currentStep.querySelector(".option.selected");

    if (!selectedOption) {

      alert("Veuillez sélectionner une réponse avant de continuer.");

      return;

    }


    if (quizStep < quizSteps.length) {

      quizStep++;

      updateQuiz();

      return;

    }


    /* Questionnaire terminé */

    if (quiz) {
      quiz.style.display = "none";
    }

    if (result) {
      result.classList.add("show");
    }

    if (progress) {
      progress.style.width = "100%";
    }

  };


  /* Bouton Retour */

  window.prevStep = function () {

    if (quizStep > 1) {

      quizStep--;

      updateQuiz();

      /*
       * Restaurer la réponse précédemment choisie
       */

      const previousStep =
        document.querySelector(
          `.q-step[data-step="${quizStep}"]`
        );

      if (previousStep && answers[quizStep - 1]) {

        previousStep.querySelectorAll(".option")
          .forEach(option => {

            if (
              option.textContent.trim() ===
              answers[quizStep - 1]
            ) {

              option.classList.add("selected");

            }

          });

      }

    }

  };


  /* Ouvrir le questionnaire */

  window.openAssessment = function () {

    resetQuiz();

    openModal("assessmentModal");

  };


  /* =========================================================
     7. MODAL DE PAIEMENT
     ========================================================= */

  const paymentModal =
    document.getElementById("paymentModal");

  const selectedPlan =
    document.getElementById("selectedPlan");


  window.openPayment = function (plan) {

    if (selectedPlan) {

      selectedPlan.textContent =
        plan + " · demande de prestation";

    }

    openModal("paymentModal");

  };


  /* =========================================================
     8. BOUTONS DES FORMULES
     ========================================================= */

  const planButtons =
    document.querySelectorAll(".plan .btn");

  planButtons.forEach(button => {

    button.addEventListener("click", event => {

      const plan = button
        .closest(".plan")
        ?.querySelector("h3")
        ?.textContent
        .trim();

      if (!plan) return;

      event.preventDefault();

      openPayment(plan);

    });

  });


  /* =========================================================
     9. MÉTHODES DE PAIEMENT
     ========================================================= */

  const paymentMethods =
    document.querySelectorAll(".pay-method");

  paymentMethods.forEach(method => {

    method.addEventListener("click", () => {

      paymentMethods.forEach(item => {
        item.classList.remove("selected");
      });

      method.classList.add("selected");

    });

  });


  /* =========================================================
     10. FORMULAIRE DE CONTACT
     ========================================================= */

  const contactForm =
    document.getElementById("contactForm");

  if (contactForm) {

    contactForm.addEventListener("submit", event => {

      event.preventDefault();

      const name =
        contactForm.querySelector(
          'input[type="text"]'
        )?.value.trim();

      const email =
        contactForm.querySelector(
          'input[type="email"]'
        )?.value.trim();


      if (!name || !email) {

        alert(
          "Veuillez remplir votre nom et votre adresse email."
        );

        return;

      }


      alert(
        "Merci " +
        name +
        " ! Votre demande a bien été enregistrée dans cette démonstration."
      );


      contactForm.reset();

    });

  }


  /* =========================================================
     11. FORMULAIRE DE PAIEMENT
     ========================================================= */

  const paymentForm =
    document.getElementById("paymentForm");

  if (paymentForm) {

    paymentForm.addEventListener("submit", event => {

      event.preventDefault();

      const name =
        paymentForm.querySelector(
          'input[type="text"]'
        )?.value.trim();

      const email =
        paymentForm.querySelector(
          'input[type="email"]'
        )?.value.trim();


      if (!name || !email) {

        alert(
          "Veuillez remplir tous les champs obligatoires."
        );

        return;

      }


      alert(
        "Démonstration uniquement : la passerelle de paiement doit être connectée avant toute transaction réelle."
      );

    });

  }


  /* =========================================================
     12. SCROLL FLUIDE
     ========================================================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }


      const target =
        document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* =========================================================
     13. FERMER LE MENU APRÈS UN SCROLL
     ========================================================= */

  window.addEventListener(
    "scroll",
    () => {

      if (
        window.innerWidth <= 850 &&
        nav?.classList.contains("open")
      ) {

        nav.classList.remove("open");

        menu?.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    },
    { passive: true }
  );


  /* =========================================================
     14. ACCESSIBILITÉ DU MENU
     ========================================================= */

  if (menu) {
    menu.setAttribute("aria-expanded", "false");
  }


  /* =========================================================
     15. INITIALISATION
     ========================================================= */

  resetQuiz();

});
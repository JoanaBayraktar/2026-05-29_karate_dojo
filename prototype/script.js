const siteNav = document.querySelector(".site-nav");
const menuToggle = document.querySelector(".menu-toggle");

if (siteNav && menuToggle) {
  const setMenuOpen = (isOpen) => {
    siteNav.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  menuToggle.setAttribute("aria-label", "Menü öffnen");

  menuToggle.addEventListener("click", () => {
    setMenuOpen(!siteNav.classList.contains("is-open"));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 981px)").matches) {
      setMenuOpen(false);
    }
  });
}

const trainingData = [
  { day: "Mo", time: "18:30-21:00", discipline: "Takamura ha Shindō Yōshin Ryū", location: "JoHo Gymnasium", room: "H*", group: "Erwachsene", level: "Gemeinsam" },
  { day: "Mo", time: "20:00-22:00", discipline: "Wadō Ryū Karate", location: "JoHo Gymnasium", room: "H", group: "Erwachsene", level: "Gemeinsam" },
  { day: "Mo", time: "20:00-22:00", discipline: "Kickboxen", location: "JoHo Gymnasium", room: "D", group: "Erwachsene", level: "Gemeinsam" },
  { day: "Di", time: "19:00-20:30", discipline: "Taiji", location: "Grundschule St. Korbinian", room: "", group: "Erwachsene", level: "VHS-Kurs" },
  { day: "Di", time: "19:00-20:30", discipline: "Taiji", location: "Grundschule St. Korbinian", room: "", group: "Erwachsene", level: "Anfänger" },
  { day: "Di", time: "20:30-22:00", discipline: "Taiji", location: "Grundschule St. Korbinian", room: "", group: "Erwachsene", level: "Fortgeschrittene" },
  { day: "Mi", time: "17:30-18:45", discipline: "Wadō Ryū Karate", location: "JoHo Gymnasium", room: "D", group: "Kinder", level: "Fortgeschrittene" },
  { day: "Mi", time: "18:45-20:00", discipline: "Wadō Ryū Karate", location: "JoHo Gymnasium", room: "D", group: "Jugendliche", level: "Gemeinsam" },
  { day: "Mi", time: "18:30-21:00", discipline: "Takamura ha Shindō Yōshin Ryū", location: "JoHo Gymnasium", room: "H", group: "Erwachsene", level: "Gemeinsam" },
  { day: "Mi", time: "20:00-22:00", discipline: "Wadō Ryū Karate", location: "JoHo Gymnasium", room: "H", group: "Erwachsene", level: "Gemeinsam" },
  { day: "Mi", time: "20:00-21:30", discipline: "Wadō Ryū Karate", location: "JoHo Gymnasium", room: "H", group: "Senioren", level: "Gemeinsam" },
  { day: "Do", time: "20:00-22:00", discipline: "Taiji", location: "JoHo Gymnasium", room: "H", group: "Erwachsene", level: "Anfänger + Fortgeschrittene" },
  { day: "Do", time: "20:00-22:00", discipline: "Kickboxen", location: "JoHo Gymnasium", room: "D", group: ["Erwachsene", "Jugendliche"], level: "Gemeinsam" },
  { day: "Fr", time: "17:00-18:30", discipline: "Wadō Ryū Karate", location: "Grundschule St. Korbinian", room: "", group: "Kinder", level: "Anfänger" },
  { day: "Fr", time: "18:30-19:45", discipline: "Wadō Ryū Karate", location: "Grundschule St. Korbinian", room: "", group: "Jugendliche", level: "Gemeinsam" },
  { day: "Fr", time: "18:30-21:00", discipline: "Takamura ha Shindō Yōshin Ryū", location: "Grundschule St. Korbinian", room: "", group: "Erwachsene", level: "Gemeinsam" },
  { day: "Fr", time: "20:00-22:00", discipline: "Wadō Ryū Karate", location: "JoHo Gymnasium", room: "H*", group: "Erwachsene", level: "Gemeinsam" },
];

const calendar = document.querySelector("#trainingCalendar");
const disciplineFilter = document.querySelector("#disciplineFilter");
const groupFilter = document.querySelector("#groupFilter");
const locationFilter = document.querySelector("#locationFilter");

function matches(value, selected) {
  return selected === "all" || (Array.isArray(value) ? value.includes(selected) : value === selected);
}

function label(value) {
  return Array.isArray(value) ? value.join(" + ") : value;
}

function renderCalendar() {
  if (!calendar) return;

  const days = ["Mo", "Di", "Mi", "Do", "Fr"];
  const visible = trainingData.filter((item) => {
    return (
      matches(item.discipline, disciplineFilter.value) &&
      matches(item.group, groupFilter.value) &&
      matches(item.location, locationFilter.value)
    );
  });

  calendar.innerHTML = "";
  days.forEach((day) => {
    const column = document.createElement("section");
    column.className = "calendar-day";
    const items = visible.filter((item) => item.day === day);
    column.innerHTML = `<h2>${day}</h2><div class="calendar-items"></div>`;
    const list = column.querySelector(".calendar-items");

    if (items.length === 0) {
      list.innerHTML = `<p class="calendar-empty">Keine Einträge</p>`;
    } else {
      items.forEach((item) => {
        const event = document.createElement("article");
        event.className = "calendar-event";
        event.innerHTML = `
          <strong>${item.time}</strong>
          <span>${item.discipline}</span>
          <span>${item.location}${item.room ? ` (${item.room})` : ""}</span>
          <div class="event-tags">
            <em>${label(item.group)}</em>
            <em>${item.level}</em>
          </div>
        `;
        list.append(event);
      });
    }
    calendar.append(column);
  });
}

[disciplineFilter, groupFilter, locationFilter].forEach((filter) => {
  if (filter) filter.addEventListener("change", renderCalendar);
});

renderCalendar();

const cultureSlider = document.querySelector("[data-culture-slider]");
const cultureSliderPrev = document.querySelector("[data-slider-prev]");
const cultureSliderNext = document.querySelector("[data-slider-next]");

if (cultureSlider) {
  const cultureSliderItems = Array.from(cultureSlider.querySelectorAll("figure"));
  const sliderStep = () => Math.max(cultureSlider.clientWidth * 0.72, 280);
  const updateCultureSliderControls = () => {
    const maxScroll = cultureSlider.scrollWidth - cultureSlider.clientWidth - 2;
    if (cultureSliderPrev) cultureSliderPrev.disabled = cultureSlider.scrollLeft <= 2;
    if (cultureSliderNext) cultureSliderNext.disabled = cultureSlider.scrollLeft >= maxScroll;
  };

  cultureSliderPrev?.addEventListener("click", () => {
    cultureSlider.scrollBy({ left: -sliderStep(), behavior: "smooth" });
  });

  cultureSliderNext?.addEventListener("click", () => {
    cultureSlider.scrollBy({ left: sliderStep(), behavior: "smooth" });
  });

  cultureSlider.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      cultureSlider.scrollBy({
        left: event.key === "ArrowLeft" ? -sliderStep() : sliderStep(),
        behavior: "smooth"
      });
    }
  });

  cultureSlider.addEventListener("scroll", updateCultureSliderControls, { passive: true });
  window.addEventListener("resize", updateCultureSliderControls);

  cultureSliderItems.forEach((item) => {
    item.addEventListener("click", () => {
      const isActive = item.classList.contains("is-active");
      cultureSliderItems.forEach((entry) => entry.classList.remove("is-active"));
      if (!isActive) item.classList.add("is-active");
    });
  });

  updateCultureSliderControls();
}

const trainerModal = document.querySelector("#trainerModal");
const trainerModalTitle = document.querySelector("#trainerModalTitle");
const trainerModalRole = document.querySelector("#trainerModalRole");
const trainerModalBody = document.querySelector("#trainerModalBody");
const trainerModalPhoto = document.querySelector("#trainerModalPhoto");
const trainerModalLicenses = document.querySelector("#trainerModalLicenses");
const trainerModalClose = document.querySelector(".modal-close");
const trainerFilterButtons = document.querySelectorAll(".trainer-filter-button");
const trainerProfiles = document.querySelectorAll(".trainer-profile, .leader-profile");
const qualificationModal = document.querySelector("#qualificationModal");
const qualificationTrigger = document.querySelector(".qualification-trigger");
const qualificationModalClose = document.querySelector(".qualification-modal-close");
let lastTrainerTrigger = null;

function splitLicenseText(text) {
  return text
    .replace(/\.$/, "")
    .split(/,\s+|;\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function prepareTrainerBody(html) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html || "";
  const licenses = [];

  wrapper.querySelectorAll("p").forEach((paragraph) => {
    const label = paragraph.querySelector("strong")?.textContent || "";
    if (!/(Graduierung\/Lizenz|Weitere Lizenzen|Lizenzen|Lizenz)/.test(label)) return;

    const clone = paragraph.cloneNode(true);
    clone.querySelector("strong")?.remove();
    licenses.push(...splitLicenseText(clone.textContent.trim().replace(/^:/, "").trim()));
    paragraph.remove();
  });

  return {
    body: wrapper.innerHTML,
    licenses
  };
}

function openTrainerModal(trigger) {
  if (!trainerModal) return;
  lastTrainerTrigger = trigger;
  const prepared = prepareTrainerBody(trigger.dataset.body);
  trainerModalTitle.textContent = trigger.dataset.name;
  trainerModalRole.textContent = trigger.dataset.role;
  trainerModalBody.innerHTML = prepared.body;
  if (trainerModalLicenses) {
    trainerModalLicenses.innerHTML = "";
    prepared.licenses.forEach((license) => {
      const item = document.createElement("span");
      item.textContent = license;
      trainerModalLicenses.append(item);
    });
    trainerModalLicenses.hidden = prepared.licenses.length === 0;
  }
  trainerModalPhoto.innerHTML = "";
  if (trigger.dataset.photo) {
    const img = document.createElement("img");
    img.src = trigger.dataset.photo;
    img.alt = "";
    trainerModalPhoto.append(img);
  } else {
    trainerModalPhoto.textContent = trigger.querySelector(".trainer-photo, .leader-initials")?.textContent?.trim() || "";
  }
  trainerModal.hidden = false;
  document.body.style.overflow = "hidden";
  trainerModalClose.focus();
}

function closeTrainerModal() {
  if (!trainerModal || trainerModal.hidden) return;
  trainerModal.hidden = true;
  document.body.style.overflow = "";
  if (lastTrainerTrigger) lastTrainerTrigger.focus();
}

function openQualificationModal() {
  if (!qualificationModal) return;
  qualificationModal.hidden = false;
  document.body.style.overflow = "hidden";
  qualificationModalClose?.focus();
}

function closeQualificationModal() {
  if (!qualificationModal || qualificationModal.hidden) return;
  qualificationModal.hidden = true;
  document.body.style.overflow = "";
  qualificationTrigger?.focus();
}

trainerProfiles.forEach((trigger) => {
  const photoSlot = trigger.querySelector(".trainer-photo");
  if (trigger.dataset.photo && photoSlot) {
    photoSlot.innerHTML = "";
    const img = document.createElement("img");
    img.src = trigger.dataset.photo;
    img.alt = "";
    photoSlot.append(img);
  }

  trigger.addEventListener("click", () => openTrainerModal(trigger));
});

trainerFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    trainerFilterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    trainerProfiles.forEach((profile) => {
      const disciplines = (profile.dataset.discipline || "").split(" ");
      profile.hidden = filter !== "all" && !disciplines.includes(filter);
    });
  });
});

if (trainerModal) {
  trainerModal.addEventListener("click", (event) => {
    if (event.target === trainerModal) closeTrainerModal();
  });
}

if (trainerModalClose) {
  trainerModalClose.addEventListener("click", closeTrainerModal);
}

if (qualificationTrigger) {
  qualificationTrigger.addEventListener("click", openQualificationModal);
}

if (qualificationModal) {
  qualificationModal.addEventListener("click", (event) => {
    if (event.target === qualificationModal) closeQualificationModal();
  });
}

if (qualificationModalClose) {
  qualificationModalClose.addEventListener("click", closeQualificationModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeTrainerModal();
    closeQualificationModal();
  }
});

// ── Passwort-Gate (Prototyp) ────────────────────────────────
const pwGate = document.querySelector("#pw-gate");
const pwForm = document.querySelector("#pw-form");
const pwInput = document.querySelector("#pw-input");
const pwError = document.querySelector("#pw-error");
const PW_KEY = "dojo_proto_unlocked";
const PW_VALUE = "karate"; // Passwort für den Prototyp

if (pwGate) {
  // Bereits freigeschaltet? Gate sofort ausblenden.
  if (sessionStorage.getItem(PW_KEY) === "1") {
    pwGate.classList.add("is-hidden");
  }

  pwForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (pwInput.value.trim().toLowerCase() === PW_VALUE) {
      sessionStorage.setItem(PW_KEY, "1");
      pwGate.style.transition = "opacity 300ms ease";
      pwGate.style.opacity = "0";
      setTimeout(() => pwGate.classList.add("is-hidden"), 310);
    } else {
      pwError.hidden = false;
      pwInput.value = "";
      pwInput.focus();
    }
  });
}

// Scroll-reveal for discipline story blocks
const storyBlocks = document.querySelectorAll(".story-block");
if (storyBlocks.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  storyBlocks.forEach((block) => revealObserver.observe(block));
}

const historyYear = document.querySelector("#historyYear");
const historyYearPanel = document.querySelector(".history-year-panel");
const historySteps = document.querySelectorAll(".history-step[data-year]");
const historyImages = document.querySelectorAll(".history-image-stack img[data-year]");

if (historyYear && historySteps.length) {
  const setHistoryYear = (year) => {
    historyYearPanel.classList.toggle("has-word-year", !/^\d+$/.test(year));
    if (historyYear.textContent === year) return;
    historyYearPanel.classList.add("is-changing");
    historyYear.textContent = year;
    historyImages.forEach((image) => {
      image.classList.toggle("is-active", image.dataset.year === year);
    });
    window.setTimeout(() => historyYearPanel.classList.remove("is-changing"), 180);
  };

  const updateHistoryYear = () => {
    const marker = window.innerHeight * 0.48;
    let active = historySteps[0];

    historySteps.forEach((step) => {
      const rect = step.getBoundingClientRect();
      if (rect.top <= marker) active = step;
    });

    setHistoryYear(active.dataset.year);
  };

  window.addEventListener("scroll", updateHistoryYear, { passive: true });
  window.addEventListener("resize", updateHistoryYear);
  updateHistoryYear();
}

// Swipe-Dots: aktiven Punkt im Carousel tracken
const spartenGrid = document.querySelector(".sparten-grid");
const spartenDots = document.querySelectorAll(".sparten-dots .dot");

if (spartenGrid && spartenDots.length) {
  const updateDots = () => {
    const cardWidth = spartenGrid.querySelector(".sparte-card")?.offsetWidth ?? 0;
    if (!cardWidth) return;
    const index = Math.min(
      Math.round(spartenGrid.scrollLeft / cardWidth),
      spartenDots.length - 1
    );
    spartenDots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
  };

  spartenGrid.addEventListener("scroll", updateDots, { passive: true });
  window.addEventListener("resize", updateDots);
  updateDots();
}

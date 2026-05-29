const siteNav = document.querySelector(".site-nav");
const menuToggle = document.querySelector(".menu-toggle");

if (siteNav && menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
}

const trainingData = [
  { day: "Mo", time: "18:30-21:00", discipline: "Takamura ha Shindō Yōshin Ryū", location: "JoHo Gymnasium", room: "H*", group: "Erwachsene", level: "Gemeinsam" },
  { day: "Mo", time: "20:00-22:00", discipline: "Wadō Ryū Karate", location: "JoHo Gymnasium", room: "H", group: "Erwachsene", level: "Gemeinsam" },
  { day: "Mo", time: "20:00-22:00", discipline: "Kickboxen", location: "JoHo Gymnasium", room: "D", group: "Erwachsene", level: "Gemeinsam" },
  { day: "Di", time: "17:30-18:45", discipline: "Wadō Ryū Karate", location: "JoHo Gymnasium", room: "D", group: "Kinder", level: "Fortgeschrittene" },
  { day: "Di", time: "18:45-22:00", discipline: "Wadō Ryū Karate", location: "JoHo Gymnasium", room: "D", group: "Jugendliche", level: "Gemeinsam" },
  { day: "Mi", time: "17:00-18:30", discipline: "Wadō Ryū Karate", location: "Grundschule St. Korbinian", room: "", group: "Kinder", level: "Anfänger" },
  { day: "Mi", time: "19:00-20:30", discipline: "Taiji", location: "Grundschule St. Korbinian", room: "", group: "Erwachsene", level: "VHS-Kurs" },
  { day: "Mi", time: "19:00-20:30", discipline: "Taiji", location: "Grundschule St. Korbinian", room: "", group: "Erwachsene", level: "Anfänger" },
  { day: "Mi", time: "20:00-22:00", discipline: "Wadō Ryū Karate", location: "JoHo Gymnasium", room: "H", group: "Erwachsene", level: "Gemeinsam" },
  { day: "Mi", time: "20:00-21:30", discipline: "Wadō Ryū Karate", location: "JoHo Gymnasium", room: "H", group: "Senioren", level: "Gemeinsam" },
  { day: "Mi", time: "20:30-22:00", discipline: "Taiji", location: "Grundschule St. Korbinian", room: "", group: "Erwachsene", level: "Fortgeschrittene" },
  { day: "Do", time: "18:30-21:00", discipline: "Takamura ha Shindō Yōshin Ryū", location: "JoHo Gymnasium", room: "H", group: "Erwachsene", level: "Gemeinsam" },
  { day: "Do", time: "20:00-22:00", discipline: "Kickboxen", location: "JoHo Gymnasium", room: "D", group: "Jugendliche", level: "Gemeinsam" },
  { day: "Fr", time: "18:30-21:00", discipline: "Takamura ha Shindō Yōshin Ryū", location: "Grundschule St. Korbinian", room: "", group: "Erwachsene", level: "Gemeinsam" },
  { day: "Fr", time: "20:00-22:00", discipline: "Wadō Ryū Karate", location: "JoHo Gymnasium", room: "H", group: "Erwachsene", level: "Gemeinsam" },
  { day: "Fr", time: "20:00-22:00", discipline: "Taiji", location: "JoHo Gymnasium", room: "H", group: "Erwachsene", level: "Anfänger + Fortgeschrittene" },
];

const calendar = document.querySelector("#trainingCalendar");
const disciplineFilter = document.querySelector("#disciplineFilter");
const groupFilter = document.querySelector("#groupFilter");
const locationFilter = document.querySelector("#locationFilter");

function matches(value, selected) {
  return selected === "all" || value === selected;
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
            <em>${item.group}</em>
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

const trainerModal = document.querySelector("#trainerModal");
const trainerModalTitle = document.querySelector("#trainerModalTitle");
const trainerModalRole = document.querySelector("#trainerModalRole");
const trainerModalBody = document.querySelector("#trainerModalBody");
const trainerModalPhoto = document.querySelector("#trainerModalPhoto");
const trainerModalClose = document.querySelector(".modal-close");
let lastTrainerTrigger = null;

function openTrainerModal(trigger) {
  if (!trainerModal) return;
  lastTrainerTrigger = trigger;
  trainerModalTitle.textContent = trigger.dataset.name;
  trainerModalRole.textContent = trigger.dataset.role;
  trainerModalBody.innerHTML = trigger.dataset.body;
  trainerModalPhoto.innerHTML = "";
  if (trigger.dataset.photo) {
    const img = document.createElement("img");
    img.src = trigger.dataset.photo;
    img.alt = "";
    trainerModalPhoto.append(img);
  } else {
    trainerModalPhoto.textContent = "Foto";
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

document.querySelectorAll(".trainer-profile").forEach((trigger) => {
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

if (trainerModal) {
  trainerModal.addEventListener("click", (event) => {
    if (event.target === trainerModal) closeTrainerModal();
  });
}

if (trainerModalClose) {
  trainerModalClose.addEventListener("click", closeTrainerModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeTrainerModal();
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

if (historyYear && historySteps.length) {
  const setHistoryYear = (year) => {
    if (historyYear.textContent === year) return;
    historyYearPanel.classList.add("is-changing");
    historyYear.textContent = year;
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

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
const levelFilter = document.querySelector("#levelFilter");
const calendarWeekdays = document.querySelector("#calendarWeekdays");
const trainingResults = document.querySelector("#trainingResults");
const resetTrainingFilters = document.querySelector("#resetTrainingFilters");
const trainingFilters = [disciplineFilter, groupFilter, levelFilter, locationFilter];
const trainingDays = ["Mo", "Di", "Mi", "Do", "Fr"];
const trainingDayNames = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];
let selectedTrainingDay = "Mo";

function selectTrainingDay(day) {
  selectedTrainingDay = day;
  calendar?.querySelectorAll(".calendar-day").forEach((panel) => {
    panel.classList.toggle("is-selected", panel.dataset.day === day);
  });
  calendarWeekdays?.querySelectorAll("button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.day === day));
  });
}

function matches(value, selected) {
  return selected === "all" || (Array.isArray(value) ? value.includes(selected) : value === selected);
}

function label(value) {
  return Array.isArray(value) ? value.join(" + ") : value;
}

function renderCalendar() {
  if (!calendar) return;

  const days = trainingDays;
  const visible = trainingData.filter((item) => {
    return (
      matches(item.discipline, disciplineFilter.value) &&
      matches(item.group, groupFilter.value) &&
      matches(item.location, locationFilter.value) &&
      (levelFilter.value === "all" ||
        item.level === "Gemeinsam" ||
        item.level.split(" + ").includes(levelFilter.value))
    );
  });

  if (!visible.some((item) => item.day === selectedTrainingDay) && visible.length) {
    selectedTrainingDay = days.find((day) => visible.some((item) => item.day === day));
  }
  if (trainingResults) trainingResults.textContent = `${visible.length} ${visible.length === 1 ? "Training" : "Trainings"} pro Woche`;
  if (resetTrainingFilters) resetTrainingFilters.hidden = !trainingFilters.some((filter) => filter.value !== "all");
  if (calendarWeekdays) calendarWeekdays.innerHTML = "";

  calendar.innerHTML = "";
  days.forEach((day, index) => {
    const column = document.createElement("section");
    column.className = "calendar-day";
    column.dataset.day = day;
    column.id = `training-day-${index}`;
    const items = visible.filter((item) => item.day === day).sort((a, b) => a.time.localeCompare(b.time));
    if (calendarWeekdays) {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.day = day;
      button.setAttribute("aria-controls", column.id);
      button.setAttribute("aria-label", `${trainingDayNames[index]}, ${items.length} ${items.length === 1 ? "Training" : "Trainings"}`);
      button.textContent = day;
      button.addEventListener("click", () => selectTrainingDay(day));
      calendarWeekdays.append(button);
    }
    column.innerHTML = `<h2><span class="calendar-short-day">${day}</span><span class="calendar-full-day">${trainingDayNames[index]}</span></h2><div class="calendar-items"></div>`;
    const list = column.querySelector(".calendar-items");

    if (items.length === 0) {
      list.innerHTML = `<p class="calendar-empty">Kein Training für diese Auswahl.</p>`;
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
  selectTrainingDay(selectedTrainingDay);
}

trainingFilters.forEach((filter) => {
  if (filter) filter.addEventListener("change", renderCalendar);
});

resetTrainingFilters?.addEventListener("click", () => {
  trainingFilters.forEach((filter) => { filter.value = "all"; });
  renderCalendar();
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
const trainerModalBackground = document.querySelector(".layout");
let trainerBackgroundWasInert = false;
let trainerPreviousOverflow = "";

function splitLicenseText(text) {
  return text
    .replace(/\.$/, "")
    .split(/,\s+|;\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

// Teilt Lebenslauf-Text in Stationen: Semikolon oder Komma vor einer Jahreszahl beginnt einen neuen Eintrag.
function splitTrainerEntries(text) {
  return text
    .replace(/\.$/, "")
    .split(/;\s+|,\s+(?=(?:seit\s+)?\d{4}\b)|\s+und\s+(?=\d{4}\s*[–-]\s*\d{4}|seit\s+\d{4})/)
    .map((entry) => {
      const match = entry.trim().match(/^((?:seit\s+)?\d{4}(?:\s*[–-]\s*\d{4})?)\s+(.+)$/);
      if (!match) return { year: "", text: entry.trim() };
      const rest = match[2];
      return { year: match[1].replace(/\s*[–-]\s*/, "–"), text: rest.charAt(0).toUpperCase() + rest.slice(1) };
    })
    .filter((entry) => entry.text)
    // Chronologisch nach Startjahr; Einträge ohne Jahr bleiben vorne.
    .sort((a, b) => startYear(a) - startYear(b));
}

function startYear(entry) {
  const match = entry.year.match(/\d{4}/);
  return match ? Number(match[0]) : -Infinity;
}

function prepareTrainerBody(html) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html || "";
  const grades = [];
  const licenses = [];
  const sections = [];

  wrapper.querySelectorAll("p").forEach((paragraph) => {
    const label = (paragraph.querySelector("strong")?.textContent || "").replace(/:\s*$/, "").trim();
    const clone = paragraph.cloneNode(true);
    clone.querySelector("strong")?.remove();
    const text = clone.textContent.trim().replace(/^:/, "").trim();

    if (/Lizenz/.test(label)) {
      splitLicenseText(text).forEach((item) => {
        (/\b(Dan|Kyu)\b/.test(item) ? grades : licenses).push(item);
      });
      return;
    }

    sections.push({ label, entries: splitTrainerEntries(text) });
  });

  return { grades, licenses, sections };
}

function renderTrainerFacts(prepared) {
  const fragment = document.createDocumentFragment();
  [["Graduierung", prepared.grades], ["Lizenzen", prepared.licenses]].forEach(([label, items]) => {
    if (!items.length) return;
    const group = document.createElement("div");
    group.className = "trainer-fact";
    const heading = document.createElement("h3");
    heading.textContent = label;
    const list = document.createElement("ul");
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.append(li);
    });
    group.append(heading, list);
    fragment.append(group);
  });
  return fragment;
}

function renderTrainerSections(sections) {
  const fragment = document.createDocumentFragment();
  sections.forEach(({ label, entries }) => {
    const section = document.createElement("section");
    section.className = "trainer-cv-section";
    const heading = document.createElement("h3");
    heading.textContent = label;
    section.append(heading);

    if (entries.length === 1 && !entries[0].year) {
      const text = document.createElement("p");
      text.textContent = entries[0].text;
      section.append(text);
    } else {
      const list = document.createElement("ol");
      const hasYears = entries.some((entry) => entry.year);
      list.className = hasYears ? "trainer-cv-list has-years" : "trainer-cv-list";
      entries.forEach(({ year, text }) => {
        const li = document.createElement("li");
        const copy = document.createElement("span");
        copy.textContent = text;
        if (hasYears) {
          const time = document.createElement("span");
          time.className = "trainer-cv-year";
          time.textContent = year;
          li.append(time);
        }
        li.append(copy);
        list.append(li);
      });
      section.append(list);
    }
    fragment.append(section);
  });
  return fragment;
}

function openTrainerModal(trigger) {
  if (!trainerModal) return;
  lastTrainerTrigger = trigger;
  const prepared = prepareTrainerBody(trigger.dataset.body);
  trainerModalTitle.textContent = trigger.dataset.name;
  trainerModalRole.textContent = trigger.dataset.role;
  trainerModalBody.replaceChildren(renderTrainerSections(prepared.sections));
  if (trainerModalLicenses) {
    trainerModalLicenses.replaceChildren(renderTrainerFacts(prepared));
    trainerModalLicenses.hidden = prepared.grades.length + prepared.licenses.length === 0;
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
  trainerPreviousOverflow = document.body.style.overflow;
  if (trainerModalBackground) {
    trainerBackgroundWasInert = trainerModalBackground.inert;
    trainerModalBackground.inert = true;
  }
  document.body.style.overflow = "hidden";
  trainerModalClose.focus();
}

function closeTrainerModal() {
  if (!trainerModal || trainerModal.hidden) return;
  trainerModal.hidden = true;
  if (trainerModalBackground) trainerModalBackground.inert = trainerBackgroundWasInert;
  document.body.style.overflow = trainerPreviousOverflow;
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
    if (trainerFilterSelect) trainerFilterSelect.value = filter;
  });
});

// Kopf der Trainerschaft: Porträts laufen in drei Reihen durch, damit alle einmal gut zu sehen sind.
const trainerMontage = document.querySelector(".trainer-montage");
if (trainerMontage && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const portraits = [...trainerMontage.querySelectorAll("img")].map((img) => img.getAttribute("src"));
  const rows = [[], [], []];
  portraits.forEach((src, index) => rows[index % 3].push(src));
  trainerMontage.replaceChildren(...rows.map((sources, rowIndex) => {
    const row = document.createElement("div");
    row.className = "montage-row";
    row.setAttribute("aria-hidden", "true");
    const track = document.createElement("div");
    track.className = "montage-track";
    // Zwei identische Hälften (je Reihe zweimal) für eine nahtlose Schleife.
    for (let copy = 0; copy < 4; copy += 1) {
      sources.forEach((src) => {
        const item = document.createElement("span");
        const img = document.createElement("img");
        img.src = src;
        img.alt = "";
        item.append(img);
        track.append(item);
      });
    }
    row.style.setProperty("--montage-duration", `${[48, 58, 52][rowIndex]}s`);
    row.append(track);
    return row;
  }));
  trainerMontage.classList.add("is-moving");
}

// Desktop: Umschalter zwischen Porträts und Liste; die Wahl bleibt im Browser gespeichert.
const trainerGrid = document.querySelector(".trainer-grid");
const trainerViewButtons = document.querySelectorAll(".trainer-view-toggle button");
function setTrainerView(view) {
  trainerGrid?.classList.toggle("is-list", view === "list");
  trainerViewButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.view === view)));
  try { localStorage.setItem("trainerView", view); } catch {}
}
trainerViewButtons.forEach((button) => button.addEventListener("click", () => setTrainerView(button.dataset.view)));
try { if (trainerGrid && localStorage.getItem("trainerView") === "list") setTrainerView("list"); } catch {}

// Mobile: Dropdown statt Filter-Buttons, steuert dieselben Buttons.
const trainerFilterSelect = document.querySelector("#trainerFilterSelect");
trainerFilterSelect?.addEventListener("change", () => {
  document.querySelector(`.trainer-filter-button[data-filter="${trainerFilterSelect.value}"]`)?.click();
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
  if (event.key === "Tab" && trainerModal && !trainerModal.hidden) {
    const controls = [...trainerModal.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]'
    )].filter((element) => !element.disabled && element.tabIndex >= 0 && element.getClientRects().length);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (first && (!trainerModal.contains(document.activeElement) ||
      (event.shiftKey ? document.activeElement === first : document.activeElement === last))) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    }
  }
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

// YouTube erst nach Klick laden, vorher keine Verbindung zu Google
document.querySelectorAll(".yt-embed[data-youtube]").forEach((embed) => {
  embed.querySelector(".yt-play")?.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${embed.dataset.youtube}?autoplay=1&rel=0`;
    iframe.title = "Film: Vorführung bei der Kampfsportgala";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    embed.replaceChildren(iframe);
    iframe.focus();
  });
});

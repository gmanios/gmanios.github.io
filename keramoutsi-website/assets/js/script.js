(() => {
  "use strict";

  const translations = {
    el: {},
    en: {
      skip: "Skip to content",
      topDistance: "15 km from Heraklion",
      topType: "Authentic Cretan countryside",
      topDirections: "Get directions",
      brand: "Keramoutsi",
      brandSub: "Malevizi · Crete",
      navDiscover: "Discover",
      navHistory: "History",
      navPeople: "People",
      navGallery: "Gallery",
      navVisit: "Visit",
      heroEyebrow: "A village keeping Crete alive",
      heroTitle: "Keramoutsi.<br>Small on the map,<br><em>great in history.</em>",
      heroText: "Vineyards, olive groves, Byzantine churches, a historic fortress and the memory of people who fought for freedom.",
      heroCta1: "Start exploring",
      heroCta2: "Plan your visit",
      factDrive: "drive from Heraklion",
      factChurch: "frescoes at Panagia",
      factCastle: "probable founding of Malvicino",
      factLandStrong: "Vines & olives",
      factLand: "landscape and local production",
      introEyebrow: "Meet the village",
      introTitle: "The quiet side of Malevizi",
      introLead: "Set in a green landscape of vineyards and olive groves, Keramoutsi offers something rare: history without crowds and tradition without staging.",
      introText: "Walk around the square, seek out the old churches, discover the Kokkinidis olive mill and continue towards Flega or Castel Malvicino. The village is ideal for a calm day trip from Heraklion.",
      filterAll: "All",
      filterHistory: "History",
      filterReligion: "Churches",
      filterNature: "Nature",
      filterTradition: "Tradition",
      tagMonument: "Monument",
      panagiaTitle: "Church of Panagia",
      panagiaText: "It preserves folk frescoes from the 14th century and a later cross-shaped form with a dome.",
      tagHistory: "History",
      castleTitle: "Castel Malvicino",
      castleText: "The ruins of the strategic fortress that gave its name to the wider province of Malevizi.",
      learnMore: "Learn more",
      tagHeritage: "Heritage",
      factoryTitle: "Kokkinidis Olive Mill",
      factoryText: "A pre-industrial olive mill with surviving equipment, linked to the family of Iraklis Kokkinidis.",
      tagNature: "Nature",
      flegaTitle: "Flega location",
      flegaText: "A clearing beside the river, arranged for rest, small gatherings and quiet moments in nature.",
      tagChurch: "Church",
      antoniosTitle: "Saint Anthony",
      antoniosText: "A historic church at the edge of the village, known for old frescoes and visible traces from the Ottoman period.",
      tagExperience: "Experience",
      rakiTitle: "Raki distilleries & feasts",
      rakiText: "The distillation of tsikoudia becomes an occasion for music, food and company, especially in autumn.",
      historyEyebrow: "Time and memory",
      historyTitle: "A history of many centuries",
      historyIntro: "Keramoutsi lies in a region where rural life, strategic defence and the struggles of Crete came together.",
      time1Title: "The Malvicino fortress",
      time1Text: "The prevailing account links its construction to the short Genoese occupation of Crete and Enrico Pescatore. Its position allowed control of the hinterland.",
      time2Title: "Earthquake and revolt",
      time2Text: "The fortress is said to have been destroyed in the great earthquake of 1303, rebuilt, and later caught up in the Kallergis revolt.",
      time3Title: "Chieramuzzi",
      time3Text: "Castrofylacas records the settlement as Chieramuzzi with 192 residents. In 1671 it appears as Keramuci.",
      time4Title: "The era of Iraklis Kokkinidis",
      time4Text: "The young chieftain was closely linked to Keramoutsi and played a leading role in the liberation struggle as leader of Malevizi–Temenos during the 1866 Revolution.",
      today: "Today",
      time5Title: "Living village, living tradition",
      time5Text: "The community continues to organise festivals, cultural activities and memorial events, keeping younger generations connected to the place.",
      peopleEyebrow: "People of history",
      peopleTitle: "Figures who left their mark",
      iraklisTitle: "Iraklis Kokkinidis",
      iraklisLead: "Chieftain of Malevizi and one of the youngest, most vivid figures of the Cretan Revolution of 1866.",
      iraklisText: "He lived and developed his activity in Keramoutsi, devoting much of his property to the struggle. He fell at Gazani Kamara in 1868, aged 26. His bust stands in the village square.",
      iraklisH1: "Leader of Malevizi–Temenos",
      iraklisH2: "Revolution of 1866",
      iraklisH3: "Monument in the square",
      kalimerakisTitle: "Michail Kalimerakis",
      kalimerakisText: "Iraklis Kokkinidis's brother-in-law and successor in command after his death. He continued the struggle with his men.",
      nikolaosTitle: "Nikolaos Kokkinidis",
      nikolaosText: "Father of Iraklis. The Kokkinidis family actively participated in the Great Cretan Revolution and contributed resources to the struggle.",
      manolisTitle: "Emmanouil Kokkinidis",
      manolisText: "Brother of Iraklis and member of the family collectively associated with revolutionary activity in Malevizi.",
      tradEyebrow: "Living tradition",
      tradTitle: "Festivals, flavours and community",
      tradText: "Keramoutsi is more than its monuments. The village lives through religious feasts, raki-making and events organised by residents and the cultural association.",
      trad1Title: "Klidonas",
      trad1Text: "Saint John's celebration with fires and local customs.",
      trad2Title: "Feast of Panagia",
      trad2Text: "Religious celebration and village gathering.",
      trad3Title: "Cultural events",
      trad3Text: "Music, local products and activities for all ages.",
      quote: "“Keramoutsi is not a sight you simply see. It is a place you understand by walking slowly.”",
      quoteSource: "The visitor experience",
      galleryEyebrow: "Images of the place",
      galleryTitle: "A first look at Keramoutsi",
      galleryIntro: "Select an image to view it at full size.",
      galleryVillage: "The village among olive groves",
      galleryPanagia: "Church of Panagia",
      galleryIraklis: "Iraklis Kokkinidis",
      galleryFactory1: "The stone olive mill",
      galleryFactory2: "Memories of olive production",
      visitEyebrow: "Plan your visit",
      visitTitle: "Close to the city, far from the rush",
      mapTitle: "Keramoutsi, Malevizi",
      mapCoords: "35.2781° N, 25.0282° E",
      directions: "Directions",
      accessTitle: "Access",
      accessText: "About 15 km from Heraklion on the road to Krousonas, and 3.5 km south of Tylissos. A car is the most practical choice.",
      durationTitle: "Visit duration",
      durationText: "Allow 2–4 hours for the village and longer when combining the route with Tylissos or nearby Malevizi sites.",
      seasonTitle: "Best season",
      seasonText: "Spring for green scenery, summer afternoons for events and autumn for the distillation season.",
      respectTitle: "Respect the place",
      respectText: "Churches and historic buildings are places of memory. Avoid entering closed or unsafe structures and leave no litter.",
      planEyebrow: "Suggested route",
      planTitle: "Half a day in Keramoutsi",
      plan1Title: "Square and monument",
      plan1Text: "Start at the heart of the village and the bust of Iraklis Kokkinidis.",
      plan2Title: "Historic churches",
      plan2Text: "Walk towards Panagia and Saint Anthony, observing the old architecture.",
      plan3Title: "Kokkinidis Olive Mill",
      plan3Text: "See the old mill building and discover the productive history of the village.",
      plan4Title: "Coffee or nature",
      plan4Text: "End your visit at the square or, when conditions allow, at Flega.",
      contactEyebrow: "Help improve the guide",
      contactTitle: "Do you have photos, stories or corrections?",
      contactText: "A place becomes more visible when its people share knowledge and memory. Complete the form and your email app will open with a prepared message to Visit Malevizi.",
      formName: "Full name",
      formSubject: "Subject",
      formSelect: "Select a subject",
      formPhoto: "Photographic material",
      formHistory: "Historical information",
      formCorrection: "Content correction",
      formTourism: "Tourist information",
      formMessage: "Message",
      formConsent: "I agree to open my email app with the information above.",
      formSend: "Create email",
      footerText: "Independent prototype digital guide promoting the village, its history and cultural heritage.",
      footerExplore: "Explore",
      footerUseful: "Useful links",
      municipality: "Municipality of Malevizi",
      sources: "Sources & photography",
      footerDisclaimer: "Opening hours and access to monuments may change. Confirm before visiting."
    }
  };

  let language = localStorage.getItem("keramoutsi-language") || "el";
  const originalTexts = new Map();

  function applyLanguage(lang) {
    language = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (!originalTexts.has(element)) originalTexts.set(element, element.innerHTML);
      const value = lang === "el" ? originalTexts.get(element) : translations.en[key];
      if (value !== undefined) element.innerHTML = value;
    });
    const toggleText = document.querySelector(".lang-toggle span");
    if (toggleText) toggleText.textContent = lang === "el" ? "EN" : "EL";
    localStorage.setItem("keramoutsi-language", lang);
  }

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".primary-nav");
  navToggle?.addEventListener("click", () => {
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    navToggle.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }));

  document.querySelector(".lang-toggle")?.addEventListener("click", () => applyLanguage(language === "el" ? "en" : "el"));

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");
      const filter = button.dataset.filter;
      document.querySelectorAll(".place-card").forEach((card) => {
        const categories = card.dataset.category?.split(" ") || [];
        card.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
      });
    });
  });

  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 })
    : null;
  document.querySelectorAll(".reveal").forEach((el) => revealObserver ? revealObserver.observe(el) : el.classList.add("is-visible"));

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".primary-nav a[href^='#']")];
  const sectionObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
          }
        });
      }, { rootMargin: "-45% 0px -50%", threshold: 0 })
    : null;
  sections.forEach((section) => sectionObserver?.observe(section));

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = lightbox?.querySelector("img");
  const lightboxCaption = lightbox?.querySelector("p");
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      if (!lightbox || !lightboxImage || !lightboxCaption) return;
      lightboxImage.src = item.dataset.full;
      lightboxImage.alt = item.querySelector("img")?.alt || "";
      lightboxCaption.textContent = item.dataset.caption || "";
      lightbox.showModal();
    });
  });
  lightbox?.querySelector(".lightbox__close")?.addEventListener("click", () => lightbox.close());
  lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.close(); });

  const backToTop = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => backToTop?.classList.toggle("is-visible", window.scrollY > 700), { passive: true });
  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      if (formStatus) formStatus.textContent = language === "el" ? "Συμπλήρωσε όλα τα υποχρεωτικά πεδία." : "Please complete all required fields.";
      return;
    }
    const data = new FormData(form);
    const subject = `[Keramoutsi Guide] ${data.get("subject")}`;
    const body = `${language === "el" ? "Ονοματεπώνυμο" : "Name"}: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:visit@malevizi.gr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (formStatus) {
      formStatus.style.color = "#237a57";
      formStatus.textContent = language === "el" ? "Το μήνυμα ετοιμάστηκε στο πρόγραμμα email σου." : "The message has been prepared in your email app.";
    }
  });

  if (window.L && document.getElementById("map")) {
    const coords = [35.278137, 25.028229];
    const map = L.map("map", { scrollWheelZoom: false }).setView(coords, 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
    const icon = L.divIcon({ className: "custom-map-marker", html: '<span style="display:grid;place-items:center;width:42px;height:42px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:linear-gradient(135deg,#087f8c,#38a169);box-shadow:0 8px 20px rgba(7,59,76,.3);border:3px solid white"><span style="width:12px;height:12px;border-radius:50%;background:white;transform:rotate(45deg)"></span></span>', iconSize: [42,42], iconAnchor: [21,42] });
    L.marker(coords, { icon }).addTo(map).bindPopup("<strong>Κεραμούτσι / Keramoutsi</strong><br>Μαλεβίζι, Κρήτη").openPopup();
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  if (window.lucide) window.lucide.createIcons();
  applyLanguage(language);

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js").catch(() => {}));
  }
})();

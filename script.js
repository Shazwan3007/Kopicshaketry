/* =========================================================
   F&B WEBSITE TEMPLATE
   SCRIPT.JS

   =========================================================
   ✏️ PELANGGAN HANYA PERLU EDIT BAHAGIAN CONFIG DI BAWAH

   Semua fungsi website dikawal dari CONFIG.

   PELANGGAN TIDAK PERLU UBAH BAHAGIAN LAIN.
========================================================= */


const CONFIG = {


  /* =======================================================
     1. MAKLUMAT PERNIAGAAN
  ======================================================= */

  business: {

    name: "Kopi C Shake",

    type: "KOPI & MINUMAN",

    tagline: "Kopi murah, rasa premium.",


    /*
      LOGO

      Jika ADA logo:

      logo: "images/logo.png"

      Jika TIADA logo:

      logo: ""

      Jika logo tidak dijumpai,
      website akan automatik menggunakan
      huruf pertama nama perniagaan.
    */

    logo: "images/logo.png"

  },


  /* =======================================================
     2. WHATSAPP
  ======================================================= */

  contact: {

    /*
      Masukkan nombor WhatsApp
      tanpa + dan tanpa ruang.

      Contoh:

      60123456789
    */

    whatsapp: "60123456789"

  },


  /* =======================================================
     3. LOKASI
  ======================================================= */

  location: {

    /*
      Nama lokasi / alamat ringkas.

      Contoh:

      "Pekan Tuaran, Sabah"

      Jika tidak mahu:

      name: ""
    */

    name: "Pekan Tuaran, Sabah",


    /*
      Penerangan lokasi.

      Jika tidak mahu:

      description: ""
    */

    description:
      "Kunjungi kami untuk menikmati minuman kegemaran anda.",


    /*
      GOOGLE MAPS

      Contoh:

      https://maps.google.com/?q=Pekan+Tuaran+Sabah

      Jika tidak mahu:

      googleMaps: ""
    */

    googleMaps:
      "https://maps.google.com/?q=Pekan+Tuaran+Sabah",


    /*
      WAZE

      Contoh:

      https://www.waze.com/ul?q=Pekan%20Tuaran%20Sabah

      Jika tidak mahu:

      waze: ""
    */

    waze:
      "https://www.waze.com/ul?q=Pekan%20Tuaran%20Sabah"

  },


  /* =======================================================
     4. WAKTU OPERASI
  ======================================================= */

  /*
    Contoh:

    "10:00 AM – 10:00 PM"

    Jika tidak mahu:

    ""
  */

  openingHours:
    "10:00 AM – 10:00 PM",


  /* =======================================================
     5. MENU
  ======================================================= */

  menu: [

    /*
      MENU 1
    */

    {

      name: "Kopi C Shake",

      price: "RM4.90",

      description:
        "Kopi berkrim dengan rasa premium.",

      image:
        "images/kopi.jpg"

    },


    /*
      MENU 2
    */

    {

      name: "Matcha Latte",

      price: "RM6.50",

      description:
        "Matcha creamy dengan rasa yang seimbang.",

      image:
        "images/matcha.jpg"

    },


    /*
      MENU 3
    */

    {

      name: "Mojito",

      price: "RM5.90",

      description:
        "Minuman segar dan menyegarkan.",

      image:
        "images/mojito.jpg"

    }

  ]

};


/* =========================================================
   ⚠️ JANGAN UBAH BAHAGIAN DI BAWAH
========================================================= */


/* =========================================================
   HELPER
========================================================= */

function getElement(id) {

  return document.getElementById(id);

}


function hideElement(element) {

  if (element) {

    element.classList.add("is-hidden");

  }

}


function showElement(element) {

  if (element) {

    element.classList.remove("is-hidden");

  }

}


/* =========================================================
   SAFE TEXT
========================================================= */

function safeText(value) {

  if (
    value === undefined ||
    value === null
  ) {

    return "";

  }

  return String(value).trim();

}


/* =========================================================
   WHATSAPP LINK
========================================================= */

function createWhatsAppLink(message) {

  const number =
    safeText(
      CONFIG.contact?.whatsapp
    ).replace(/\D/g, "");


  if (!number) {

    return "#";

  }


  return (
    "https://wa.me/" +
    number +
    "?text=" +
    encodeURIComponent(message)
  );

}


/* =========================================================
   STANDARD WHATSAPP MESSAGE
========================================================= */

function getWhatsAppMessage() {

  const business =
    safeText(
      CONFIG.business?.name
    );


  return (
    `Hello ${business || "Perniagaan"}, ` +
    `saya mahu buat tempahan.`
  );

}


/* =========================================================
   BUSINESS INFORMATION
========================================================= */

function renderBusiness() {


  const business =
    CONFIG.business || {};


  const name =
    safeText(business.name);


  const type =
    safeText(business.type);


  const tagline =
    safeText(business.tagline);


  /* ---------------------------------------
     PAGE TITLE
  --------------------------------------- */

  const pageTitle =
    getElement("pageTitle");


  if (pageTitle) {

    pageTitle.textContent =
      name || "Perniagaan";

  }


  document.title =
    name
      ? `${name} | ${type || "Perniagaan"}`
      : "Perniagaan";


  /* ---------------------------------------
     BUSINESS NAME
  --------------------------------------- */

  const businessName =
    getElement("businessName");


  if (businessName) {

    businessName.textContent =
      name || "Nama Perniagaan";

  }


  const brandName =
    getElement("brandName");


  if (brandName) {

    brandName.textContent =
      name || "Nama Perniagaan";

  }


  const footerBusinessName =
    getElement("footerBusinessName");


  if (footerBusinessName) {

    footerBusinessName.textContent =
      name || "Nama Perniagaan";

  }


  const footerCopyrightName =
    getElement("footerCopyrightName");


  if (footerCopyrightName) {

    footerCopyrightName.textContent =
      name || "Nama Perniagaan";

  }


  /* ---------------------------------------
     BUSINESS TYPE
  --------------------------------------- */

  const businessType =
    getElement("businessType");


  const heroBadge =
    getElement("heroBadge");


  if (
    businessType &&
    type
  ) {

    businessType.textContent =
      type;

    showElement(
      heroBadge
    );

  } else {

    hideElement(
      heroBadge
    );

  }


  const footerBusinessType =
    getElement("footerBusinessType");


  if (
    footerBusinessType &&
    type
  ) {

    footerBusinessType.textContent =
      type;

    showElement(
      footerBusinessType
    );

  } else {

    hideElement(
      footerBusinessType
    );

  }


  /* ---------------------------------------
     TAGLINE
  --------------------------------------- */

  const taglineElement =
    getElement("tagline");


  if (
    taglineElement &&
    tagline
  ) {

    taglineElement.textContent =
      tagline;

    showElement(
      taglineElement
    );

  } else {

    hideElement(
      taglineElement
    );

  }


  /* ---------------------------------------
     LOGO
  --------------------------------------- */

  renderLogo();


  /* ---------------------------------------
     SEO
  --------------------------------------- */

  renderSEO(
    name,
    type,
    tagline
  );

}


/* =========================================================
   LOGO
========================================================= */

function renderLogo() {


  const logoContainer =
    getElement("brandLogo");


  if (!logoContainer) {

    return;

  }


  const logo =
    safeText(
      CONFIG.business?.logo
    );


  logoContainer.innerHTML = "";


  logoContainer.classList.remove(
    "logo-placeholder"
  );


  /* ---------------------------------------
     ADA LOGO
  --------------------------------------- */

  if (logo) {


    const image =
      document.createElement("img");


    image.src =
      logo;


    image.alt =
      safeText(
        CONFIG.business?.name
      ) || "Logo";


    image.loading =
      "eager";


    image.decoding =
      "async";


    /*
      Jika gambar logo rosak,
      gunakan initial.
    */

    image.onerror =
      function () {

        renderLogoPlaceholder(
          logoContainer
        );

      };


    logoContainer.appendChild(
      image
    );


    return;

  }


  /* ---------------------------------------
     TIADA LOGO
  --------------------------------------- */

  renderLogoPlaceholder(
    logoContainer
  );

}


/* =========================================================
   LOGO PLACEHOLDER
========================================================= */

function renderLogoPlaceholder(
  container
) {


  if (!container) {

    return;

  }


  container.innerHTML = "";


  container.classList.add(
    "logo-placeholder"
  );


  const name =
    safeText(
      CONFIG.business?.name
    );


  /*
    Ambil huruf pertama
    nama bisnes.

    Contoh:

    Kopi C Shake
    ↓
    K
  */

  const initial =
    name
      ? name.charAt(0).toUpperCase()
      : "F";


  container.textContent =
    initial;

}


/* =========================================================
   LOCATION
========================================================= */

function renderLocation() {


  const location =
    CONFIG.location || {};


  const name =
    safeText(location.name);


  const description =
    safeText(location.description);


  const maps =
    safeText(location.googleMaps);


  const waze =
    safeText(location.waze);


  /* ---------------------------------------
     LOCATION NAME
  --------------------------------------- */

  const locationName =
    getElement("locationName");


  const quickLocationCard =
    getElement(
      "quickLocationCard"
    );


  if (
    locationName &&
    name
  ) {

    locationName.textContent =
      name;

    showElement(
      quickLocationCard
    );

  } else {

    hideElement(
      quickLocationCard
    );

  }


  /* ---------------------------------------
     LOCATION DESCRIPTION
  --------------------------------------- */

  const locationDescription =
    getElement(
      "locationDescription"
    );


  if (
    locationDescription &&
    description
  ) {

    locationDescription.textContent =
      description;

    showElement(
      locationDescription
    );

  } else {

    hideElement(
      locationDescription
    );

  }


  /* ---------------------------------------
     GOOGLE MAPS
  --------------------------------------- */

  const mapsButton =
    getElement(
      "googleMapsButton"
    );


  if (
    mapsButton &&
    maps
  ) {

    mapsButton.href =
      maps;

    showElement(
      mapsButton
    );

  } else {

    hideElement(
      mapsButton
    );

  }


  /* ---------------------------------------
     WAZE
  --------------------------------------- */

  const wazeButton =
    getElement(
      "wazeButton"
    );


  if (
    wazeButton &&
    waze
  ) {

    wazeButton.href =
      waze;

    showElement(
      wazeButton
    );

  } else {

    hideElement(
      wazeButton
    );

  }


  /* ---------------------------------------
     LOCATION BUTTONS
  --------------------------------------- */

  const locationButtons =
    getElement(
      "locationButtons"
    );


  if (
    locationButtons
  ) {

    if (
      maps ||
      waze
    ) {

      showElement(
        locationButtons
      );

    } else {

      hideElement(
        locationButtons
      );

    }

  }


  /* ---------------------------------------
     HERO LOCATION BUTTON
  --------------------------------------- */

  const heroLocationButton =
    getElement(
      "heroLocationButton"
    );


  if (
    heroLocationButton
  ) {

    if (
      maps ||
      waze
    ) {

      heroLocationButton.href =
        "#location";

      showElement(
        heroLocationButton
      );

    } else {

      hideElement(
        heroLocationButton
      );

    }

  }


  /* ---------------------------------------
     NAV LOCATION
  --------------------------------------- */

  const navLocation =
    getElement(
      "navLocation"
    );


  const mobileLocationLink =
    getElement(
      "mobileLocationLink"
    );


  if (
    maps ||
    waze
  ) {

    showElement(
      navLocation
    );

    showElement(
      mobileLocationLink
    );

  } else {

    hideElement(
      navLocation
    );

    hideElement(
      mobileLocationLink
    );

  }


  /* ---------------------------------------
     LOCATION SECTION
  --------------------------------------- */

  const locationSection =
    getElement("location");


  if (
    locationSection
  ) {

    if (
      name ||
      description ||
      maps ||
      waze
    ) {

      showElement(
        locationSection
      );

    } else {

      hideElement(
        locationSection
      );

    }

  }

}


/* =========================================================
   OPENING HOURS
========================================================= */

function renderOpeningHours() {


  const hours =
    safeText(
      CONFIG.openingHours
    );


  const hoursCard =
    getElement(
      "hoursCard"
    );


  const hoursElement =
    getElement(
      "openingHours"
    );


  if (
    hoursCard &&
    hoursElement
  ) {

    if (hours) {

      hoursElement.textContent =
        hours;

      showElement(
        hoursCard
      );

    } else {

      hideElement(
        hoursCard
      );

    }

  }


  /*
    Jika kedua-dua quick card
    kosong, sembunyikan seluruh
    quick-info.
  */

  const quickInfo =
    getElement(
      "quickInfo"
    );


  const hasHours =
    Boolean(hours);


  const hasLocation =
    Boolean(
      safeText(
        CONFIG.location?.name
      )
    );


  if (
    quickInfo
  ) {

    if (
      !hasHours &&
      !hasLocation
    ) {

      hideElement(
        quickInfo
      );

    } else {

      showElement(
        quickInfo
      );

    }

  }

}


/* =========================================================
   MENU
========================================================= */

function renderMenu() {


  const container =
    getElement(
      "menuContainer"
    );


  if (!container) {

    return;

  }


  container.innerHTML = "";


  const menu =
    Array.isArray(
      CONFIG.menu
    )
      ? CONFIG.menu
      : [];


  /* ---------------------------------------
     TIADA MENU
  --------------------------------------- */

  if (!menu.length) {

    container.innerHTML = `

      <div class="menu-empty">

        <div class="menu-image-placeholder">

          <i data-lucide="utensils"></i>

          <span>
            Menu akan dikemaskini.
          </span>

        </div>

      </div>

    `;


    refreshIcons();

    return;

  }


  /* ---------------------------------------
     BINA MENU
  --------------------------------------- */

  let menuCount = 0;


  menu.forEach(
    function (item, index) {


      const current =
        item || {};


      const name =
        safeText(current.name);


      const price =
        safeText(current.price);


      const description =
        safeText(current.description);


      const image =
        safeText(current.image);


      /*
        Abaikan item kosong sepenuhnya.
      */

      if (
        !name &&
        !price &&
        !description &&
        !image
      ) {

        return;

      }


      menuCount++;


      const card =
        document.createElement(
          "article"
        );


      card.className =
        "menu-card";


      /* -----------------------------------
         IMAGE
      ----------------------------------- */

      const imageArea =
        document.createElement(
          "div"
        );


      imageArea.className =
        "menu-image";


      if (image) {


        const imageElement =
          document.createElement(
            "img"
          );


        imageElement.src =
          image;


        imageElement.alt =
          name || "Gambar menu";


        imageElement.loading =
          index < 3
            ? "eager"
            : "lazy";


        imageElement.decoding =
          "async";


        imageElement.onerror =
          function () {

            renderImagePlaceholder(
              imageArea
            );

          };


        imageArea.appendChild(
          imageElement
        );


      } else {

        renderImagePlaceholder(
          imageArea
        );

      }


      /* -----------------------------------
         INFO
      ----------------------------------- */

      const info =
        document.createElement(
          "div"
        );


      info.className =
        "menu-info";


      /* -----------------------------------
         TOP
      ----------------------------------- */

      const top =
        document.createElement(
          "div"
        );


      top.className =
        "menu-top";


      /* -----------------------------------
         NAME
      ----------------------------------- */

      if (name) {


        const title =
          document.createElement(
            "h3"
          );


        title.className =
          "menu-name";


        title.textContent =
          name;


        top.appendChild(
          title
        );

      }


      /* -----------------------------------
         PRICE
      ----------------------------------- */

      if (price) {


        const priceElement =
          document.createElement(
            "span"
          );


        priceElement.className =
          "menu-price";


        priceElement.textContent =
          price;


        top.appendChild(
          priceElement
        );

      }


      if (
        name ||
        price
      ) {

        info.appendChild(
          top
        );

      }


      /* -----------------------------------
         DESCRIPTION
      ----------------------------------- */

      if (description) {


        const descriptionElement =
          document.createElement(
            "p"
          );


        descriptionElement.className =
          "menu-description";


        descriptionElement.textContent =
          description;


        info.appendChild(
          descriptionElement
        );

      }


      /* -----------------------------------
         ORDER BUTTON
      ----------------------------------- */

      const whatsappNumber =
        safeText(
          CONFIG.contact?.whatsapp
        );


      if (
        whatsappNumber
      ) {


        const orderButton =
          document.createElement(
            "button"
          );


        orderButton.type =
          "button";


        orderButton.className =
          "order-btn";


        orderButton.setAttribute(
          "aria-label",
          `Tempah ${name || "menu"} melalui WhatsApp`
        );


        orderButton.innerHTML = `

          <i data-lucide="message-circle"></i>

          Tempah Sekarang

        `;


        orderButton.addEventListener(
          "click",
          openMenuWhatsApp
        );


        info.appendChild(
          orderButton
        );

      }


      /* -----------------------------------
         COMPLETE CARD
      ----------------------------------- */

      card.appendChild(
        imageArea
      );


      card.appendChild(
        info
      );


      container.appendChild(
        card
      );

    }
  );


  /*
    Jika semua item sebenarnya kosong.
  */

  if (
    menuCount === 0
  ) {

    container.innerHTML = `

      <div class="menu-empty">

        <div class="menu-image-placeholder">

          <i data-lucide="utensils"></i>

          <span>
            Menu akan dikemaskini.
          </span>

        </div>

      </div>

    `;

  }


  refreshIcons();

}


/* =========================================================
   MENU IMAGE PLACEHOLDER
========================================================= */

function renderImagePlaceholder(
  container
) {


  if (!container) {

    return;

  }


  container.innerHTML = `

    <div class="menu-image-placeholder">

      <i data-lucide="image"></i>

      <span>
        Gambar menu
      </span>

    </div>

  `;


  refreshIcons();

}


/* =========================================================
   WHATSAPP
========================================================= */

function renderWhatsApp() {


  const number =
    safeText(
      CONFIG.contact?.whatsapp
    );


  const mainButton =
    getElement(
      "mainWhatsAppButton"
    );


  const floatingButton =
    getElement(
      "floatingWhatsApp"
    );


  const mobileOrderLink =
    getElement(
      "mobileOrderLink"
    );


  const contactSection =
    getElement(
      "contact"
    );


  /* ---------------------------------------
     TIADA WHATSAPP
  --------------------------------------- */

  if (!number) {

    hideElement(
      mainButton
    );

    hideElement(
      floatingButton
    );

    hideElement(
      mobileOrderLink
    );

    hideElement(
      contactSection
    );

    return;

  }


  /* ---------------------------------------
     STANDARD MESSAGE
  --------------------------------------- */

  const message =
    getWhatsAppMessage();


  const link =
    createWhatsAppLink(
      message
    );


  /* ---------------------------------------
     MAIN BUTTON
  --------------------------------------- */

  if (mainButton) {

    mainButton.href =
      link;

    showElement(
      mainButton
    );

  }


  /* ---------------------------------------
     FLOATING BUTTON
  --------------------------------------- */

  if (floatingButton) {

    floatingButton.href =
      link;

    showElement(
      floatingButton
    );

  }


  /* ---------------------------------------
     MOBILE ORDER
  --------------------------------------- */

  if (mobileOrderLink) {

    showElement(
      mobileOrderLink
    );

  }


  /* ---------------------------------------
     CONTACT SECTION
  --------------------------------------- */

  if (contactSection) {

    showElement(
      contactSection
    );

  }

}


/* =========================================================
   MENU → WHATSAPP
========================================================= */

function openMenuWhatsApp() {


  const number =
    safeText(
      CONFIG.contact?.whatsapp
    );


  if (!number) {

    return;

  }


  /*
    Semua butang menu menggunakan
    mesej WhatsApp yang sama.

    TIADA:
    - nama menu
    - harga
    - kuantiti

    Hanya:

    Hello [Nama Bisnes],
    saya mahu buat tempahan.
  */

  const message =
    getWhatsAppMessage();


  const link =
    createWhatsAppLink(
      message
    );


  if (
    link !== "#"
  ) {

    window.open(
      link,
      "_blank",
      "noopener,noreferrer"
    );

  }

}


/* =========================================================
   SEO
========================================================= */

function renderSEO(
  name,
  type,
  tagline
) {


  const description =
    tagline ||
    `${name || "Perniagaan"} - ${type || "Makanan & Minuman"}.`;


  const metaDescription =
    getElement(
      "metaDescription"
    );


  const ogTitle =
    getElement(
      "ogTitle"
    );


  const ogDescription =
    getElement(
      "ogDescription"
    );


  const ogImage =
    getElement(
      "ogImage"
    );


  if (metaDescription) {

    metaDescription.setAttribute(
      "content",
      description
    );

  }


  if (ogTitle) {

    ogTitle.setAttribute(
      "content",
      name || "Perniagaan"
    );

  }


  if (ogDescription) {

    ogDescription.setAttribute(
      "content",
      description
    );

  }


  /*
    Gunakan logo sebagai
    Open Graph image jika ada.
  */

  const logo =
    safeText(
      CONFIG.business?.logo
    );


  if (
    ogImage
  ) {

    if (logo) {

      ogImage.setAttribute(
        "content",
        logo
      );

    } else {

      ogImage.removeAttribute(
        "content"
      );

    }

  }

}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function initMobileNavigation() {


  const button =
    getElement(
      "mobileMenuButton"
    );


  const navigation =
    getElement(
      "mobileNav"
    );


  if (
    !button ||
    !navigation
  ) {

    return;

  }


  button.addEventListener(
    "click",
    function () {


      const isOpen =
        navigation.classList.toggle(
          "active"
        );


      button.setAttribute(
        "aria-expanded",
        String(isOpen)
      );


      document.body.classList.toggle(
        "no-scroll",
        isOpen
      );


      button.setAttribute(
        "aria-label",
        isOpen
          ? "Tutup menu"
          : "Buka menu"
      );


      button.innerHTML =
        isOpen
          ? `<i data-lucide="x"></i>`
          : `<i data-lucide="menu"></i>`;


      refreshIcons();

    }
  );


  /*
    Tutup menu apabila link ditekan.
  */

  const links =
    navigation.querySelectorAll(
      "a"
    );


  links.forEach(
    function (link) {

      link.addEventListener(
        "click",
        closeMobileNavigation
      );

    }
  );

}


/* =========================================================
   CLOSE MOBILE NAV
========================================================= */

function closeMobileNavigation() {


  const button =
    getElement(
      "mobileMenuButton"
    );


  const navigation =
    getElement(
      "mobileNav"
    );


  if (!navigation) {

    return;

  }


  navigation.classList.remove(
    "active"
  );


  document.body.classList.remove(
    "no-scroll"
  );


  if (button) {

    button.setAttribute(
      "aria-expanded",
      "false"
    );


    button.setAttribute(
      "aria-label",
      "Buka menu"
    );


    button.innerHTML =
      `<i data-lucide="menu"></i>`;

  }


  refreshIcons();

}


/* =========================================================
   HEADER SCROLL
========================================================= */

function initHeaderScroll() {


  const header =
    getElement(
      "siteHeader"
    );


  if (!header) {

    return;

  }


  function updateHeader() {

    if (
      window.scrollY > 20
    ) {

      header.classList.add(
        "scrolled"
      );

    } else {

      header.classList.remove(
        "scrolled"
      );

    }

  }


  updateHeader();


  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

function renderCurrentYear() {


  const element =
    getElement(
      "currentYear"
    );


  if (element) {

    element.textContent =
      new Date().getFullYear();

  }

}


/* =========================================================
   LUCIDE ICONS
========================================================= */

function refreshIcons() {


  if (
    typeof lucide !== "undefined"
  ) {

    lucide.createIcons();

  }

}


/* =========================================================
   START WEBSITE
========================================================= */

function initWebsite() {

  renderBusiness();

  renderLocation();

  renderOpeningHours();

  renderMenu();

  renderWhatsApp();

  initMobileNavigation();

  initHeaderScroll();

  renderCurrentYear();

  refreshIcons();

}


/* =========================================================
   RUN
========================================================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initWebsite
  );

} else {

  initWebsite();

}

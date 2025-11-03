// === Multilingue ===
const translations = {
  fr: {
    nav_about: "À propos",
    nav_tokenomics: "Tokenomics",
    nav_ico: "ICO",
    nav_roadmap: "Feuille de route",
    nav_contact: "Contact",
    hero_title: "La monnaie du futur est ici",
    hero_sub: "Rejoignez l’aventure KELYS et investissez dans l’innovation blockchain.",
    hero_cta: "Participer à l’ICO",
    about_title: "À propos de KELYS",
    about_text: "KELYS est une crypto-monnaie sécurisée et durable, conçue pour révolutionner les paiements numériques.",
    tokenomics_title: "Répartition du Token",
    token_1: "40% - Vente publique (ICO)",
    token_2: "25% - Équipe et développement",
    token_3: "20% - Réserve & partenariats",
    token_4: "15% - Récompenses communautaires",
    ico_title: "ICO en cours",
    ico_sub: "L'ICO se termine bientôt — ne manquez pas votre chance !",
    ico_cta: "Acheter des KELYS",
    roadmap_title: "Feuille de route",
    roadmap_1: "Q1 2025 - Lancement du projet et du site",
    roadmap_2: "Q2 2025 - ICO publique",
    roadmap_3: "Q3 2025 - Listing sur plateformes d’échange",
    roadmap_4: "Q4 2025 - Déploiement du réseau principal",
    contact_title: "Contact",
    contact_text: "Rejoignez-nous sur nos réseaux pour en savoir plus :"
  },
  en: {
    nav_about: "About",
    nav_tokenomics: "Tokenomics",
    nav_ico: "ICO",
    nav_roadmap: "Roadmap",
    nav_contact: "Contact",
    hero_title: "The future of money is here",
    hero_sub: "Join the KELYS adventure and invest in blockchain innovation.",
    hero_cta: "Join the ICO",
    about_title: "About KELYS",
    about_text: "KELYS is a secure and sustainable cryptocurrency designed to revolutionize digital payments.",
    tokenomics_title: "Token Distribution",
    token_1: "40% - Public Sale (ICO)",
    token_2: "25% - Team & Development",
    token_3: "20% - Reserve & Partnerships",
    token_4: "15% - Community Rewards",
    ico_title: "Ongoing ICO",
    ico_sub: "The ICO ends soon — don’t miss your chance!",
    ico_cta: "Buy KELYS",
    roadmap_title: "Roadmap",
    roadmap_1: "Q1 2025 - Project and site launch",
    roadmap_2: "Q2 2025 - Public ICO",
    roadmap_3: "Q3 2025 - Exchange listing",
    roadmap_4: "Q4 2025 - Mainnet launch",
    contact_title: "Contact",
    contact_text: "Join us on our networks to learn more:"
  }
};

const switcher = document.getElementById("language-switcher");
switcher.addEventListener("change", e => {
  const lang = e.target.value;
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
});

// === Compteur ICO ===
const countdown = document.getElementById("countdown");
const targetDate = new Date("2025-12-31T23:59:59").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdown.textContent = `${days}j ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

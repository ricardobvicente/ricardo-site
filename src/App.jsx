import React, { useState } from "react";
import { Instagram, Facebook } from "lucide-react";

export default function SiteRicardo() {
  const [tab, setTab] = useState("work");
  const [lang, setLang] = useState("pt");

  const ui = {
    pt: {
      role: "Arquiteto · Curador",
      tabs: { work: "Projetos", texts: "Textos", images: "Imagens", media: "Media", info: "Info & Contacto" },
      dl_pub: "Abrir / Descarregar",
      contact: "Contacto",
      files: "Ficheiros",
      availability: "Disponibilidade",
      availability_text: "Aberto a convites para curadoria, textos e consultoria — projetos em Portugal, países de expressão portuguesa e internacional.",
      writings_intro: "Ensaios, folhas de sala e textos curatoriais",
      images_intro: "Seleção visual de projetos (capturas de montagem, vistas de exposição)",
      media_intro: "Artigos, publicações e ligações externas",
      projects_intro: "Principais projetos curatoriais e expositivos",
    },
    en: {
      role: "Architect · Curator",
      tabs: { work: "Projects", texts: "Writing", images: "Images", media: "Media", info: "Info & Contact" },
      dl_pub: "Open / Download",
      contact: "Contact",
      files: "Files",
      availability: "Availability",
      availability_text: "Open to curatorial, writing and consulting — projects in Portugal, Portuguese-speaking countries and internationally.",
      writings_intro: "Essays, wall texts and curatorial writing",
      images_intro: "Visual selection (install shots, exhibition views)",
      media_intro: "Articles, publications and external links",
      projects_intro: "Main curatorial and exhibition projects",
    },
  };

  const social = {
    instagram: "https://www.instagram.com/ricardobarbosavicente",
    facebook: "https://www.facebook.com/ricardobarbosavicente",
  };

  const projects = [
    { title: "MEMORIAS · LEGADOS · MUTACOES",
      subtitle: { pt: "Exposição entre a China e os países de expressão portuguesa.",
                 en: "Exhibition between China and Portuguese-speaking countries." },
      where: { pt: "Museu de Arte de Macau & Casas da Taipa, China", en: "Macao Museum of Art & Taipa Houses, China" },
      role: { pt: "Co-curador", en: "Co-curator" }, year: "Out 2024 – Fev 2025" },
    { title: "A REDESCOBERTA DE NOS — X Bienal de Sao Tome e Principe",
      subtitle: { pt: "Mais de 150 artistas de 12 países.",
                 en: "Over 150 artists from 12 countries." },
      where: { pt: "Roca Agua-Ize, CACAU, Sao Tome e Principe", en: "Roca Agua-Ize, CACAU, Sao Tome and Principe" },
      role: { pt: "Co-curador", en: "Co-curator" }, year: "Jun – Jul 2024" },
    { title: "PORTO DE MOS — Confluencias Transnacionais",
      subtitle: { pt: "Exposição coletiva que assinalou os 50 anos do 25 de Abril.",
                 en: "Group exhibition marking the 50th anniversary of April 25th." },
      where: { pt: "Central das Artes, Porto de Mos", en: "Central das Artes, Porto de Mos" },
      role: { pt: "Co-curador", en: "Co-curator" }, year: "Abr – Set 2024" },
    { title: "PARAGONE — What's with mediums today?",
      subtitle: { pt: "Tres nucleos expositivos em Lisboa.",
                 en: "Three exhibition sites in Lisbon." },
      where: { pt: "CCCV, Museu da Agua – EPAL & Deposito da Patriarcal", en: "CCCV, Water Museum – EPAL & Patriarcal Reservoir" },
      role: { pt: "Co-curador", en: "Co-curator" }, year: "Mai – Set 2023" },
    { title: "SALVA-ME UM SONHO",
      subtitle: { pt: "Projeto expositivo e performativo entre Cabo Verde, Lisboa e Acores.",
                 en: "Exhibition and performance project between Cabo Verde, Lisbon, and the Azores." },
      where: { pt: "Culturgest, CNAD e Arquipelago", en: "Culturgest, CNAD and Arquipelago" },
      role: { pt: "Curador", en: "Curator" }, year: "2025 – 2026" },
  ];

  const texts = [
    { title: "Dos Afetos a Resistencia — Manuel, Luisa e Bela",
      excerpt: { pt: "Texto curatorial sobre pratica artistica cabo-verdiana.",
                 en: "Curatorial essay on Cape Verdean practice." } },
    { title: "Ecos das Independencias: Arte, Memoria e Soberania",
      excerpt: { pt: "Ensaio sobre narrativas pos-coloniais.",
                 en: "Essay on postcolonial narratives." } },
    { title: "Patrimonios em Transito: Memoria, Terra e Corpo",
      excerpt: { pt: "Migracao forçada e praticas colaborativas.",
                 en: "Forced migration and collaborative practices." } },
    { title: "Entre o Local e o Transnacional",
      excerpt: { pt: "Diasporas africanas e dinamicas contemporaneas.",
                 en: "African diasporas and contemporary dynamics." } },
    { title: "Arquitetura e Curadoria como Mediacao Cultural",
      excerpt: { pt: "Papel do arquiteto-curador.",
                 en: "Role of the architect-curator." } },
  ];

  const images = [
    { src: "/img/expo-1.jpg", caption: { pt: "Central das Artes, Porto de Mos (2024)", en: "Central das Artes, Porto de Mos (2024)" } },
    { src: "/img/expo-2.jpg", caption: { pt: "Sao Tome e Principe (2024)", en: "Sao Tome and Principe (2024)" } },
    { src: "/img/expo-3.jpg", caption: { pt: "Centro Cultural Cabo Verde (2023)", en: "Centro Cultural Cabo Verde (2023)" } },
    { src: "/img/expo-4.jpg", caption: { pt: "Museu da Agua – EPAL (2023)", en: "Water Museum – EPAL (2023)" } },
    { src: "/img/expo-5.jpg", caption: { pt: "MACAM – Lisboa (2025)", en: "MACAM – Lisbon (2025)" } },
  ];

  const media = [
    { title: { pt: "Catalogo 'Memorias · Legados · Mutacoes' (PDF)", en: "Catalogue 'Memorias · Legados · Mutacoes' (PDF)" }, link: "/files/catalogo-memorias.pdf", year: "2025" },
    { title: { pt: "Artigo no Publico: A Bienal de Sao Tome e Principe", en: "Article in Publico: The Sao Tome Biennial" }, link: "https://publico.pt/", year: "2024" },
    { title: { pt: "Reportagem RTP Africa: Festival Fim do Mundo", en: "RTP Africa Report: Festival Fim do Mundo" }, link: "https://rtp.pt/africa/", year: "2024" },
    { title: { pt: "Entrevista Antena 1: Curadoria Atlantica", en: "Antena 1 Interview: Atlantic Curating" }, link: "https://www.rtp.pt/play/", year: "2023" },
    { title: { pt: "Catalogo 'Porto de Mos — Confluencias Transnacionais' (PDF)", en: "Catalogue 'Porto de Mos — Transnational Confluences' (PDF)" }, link: "/files/catalogo-porto-de-mos.pdf", year: "2024" },
  ];

  const bio = {
    pt: "Nascido em Lisboa (1980). Arquiteto e curador. Doutorando no MIT Portugal / KIC InnoEnergy. Atualmente assessor tecnico e cultural na Embaixada de Cabo Verde em Portugal.",
    en: "Born in Lisbon (1980). Architect and curator. PhD candidate at MIT Portugal / KIC InnoEnergy. Currently cultural advisor at the Embassy of Cabo Verde in Portugal.",
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased">
      <header className="px-6 sm:px-8 md:px-12 lg:px-20 pt-10 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Ricardo Barbosa Vicente</h1>
            <p className="mt-2 text-base md:text-lg text-neutral-600">{ui[lang].role}</p>
          </div>
          <div className="flex items-center gap-2">
            <nav className="flex gap-1 rounded-full border border-neutral-200 p-1 w-fit">
              {Object.entries(ui[lang].tabs).map(([key, label]) => (
                <Tab key={key} label={label} active={tab === key} onClick={() => setTab(key)} />
              ))}
            </nav>
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="ml-2 rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-100"
            >
              {lang === "pt" ? "EN" : "PT"}
            </button>
          </div>
        </div>
      </header>

      <div className="h-px bg-neutral-200 mx-6 sm:mx-8 md:mx-12 lg:mx-20" />

      <section className="px-6 sm:px-8 md:px-12 lg:px-20 py-10">
        {tab === "work" && (
          <div className="space-y-8">
            <p className="text-neutral-600">{ui[lang].projects_intro}</p>
            {projects.map((p, i) => (
              <article key={i} className="group">
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                  <h2 className="text-xl md:text-2xl font-medium tracking-tight md:w-1/2 group-hover:opacity-80 transition-opacity">
                    {p.title}
                  </h2>
                  <div className="mt-1 md:mt-0 text-neutral-600 md:flex-1">
                    <p className="text-sm md:text-base">{p.subtitle[lang]}</p>
                    <p className="text-sm md:text-base mt-1">{p.where[lang]}</p>
                    <p className="text-sm md:text-base mt-1">{p.role[lang]} · {p.year}</p>
                  </div>
                </div>
                <div className="h-px bg-neutral-200 mt-6" />
              </article>
            ))}
          </div>
        )}

        {tab === "texts" && (
          <div className="space-y-6">
            <p className="text-neutral-600">{ui[lang].writings_intro}</p>
            {texts.map((t, i) => (
              <article key={i}>
                <h2 className="text-xl font-medium">{t.title}</h2>
                <p className="text-neutral-600">{t.excerpt[lang]}</p>
              </article>
            ))}
          </div>
        )}

        {tab === "images" && (
          <div className="space-y-6">
            <p className="text-neutral-600">{ui[lang].images_intro}</p>
            {images.map((img, i) => (
              <figure key={i} className="space-y-2">
                <img src={img.src} alt="" className="w-full max-w-3xl rounded-xl ring-1 ring-neutral-200" />
                <figcaption className="text-sm text-neutral-600">{img.caption[lang]}</figcaption>
              </figure>
            ))}
          </div>
        )}

        {tab === "media" && (
          <div className="space-y-6">
            <p className="text-neutral-600">{ui[lang].media_intro}</p>
            {media.map((m, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                <h3 className="text-lg md:text-xl font-medium tracking-tight md:w-1/2">{m.title[lang]}</h3>
                <div className="text-neutral-600 md:flex-1">
                  <a href={m.link} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">
                    {ui[lang].dl_pub}
                  </a>
                  <p className="text-sm md:text-base mt-1">{m.year}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "info" && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed">{lang === "pt" ? bio.pt : bio.en}</p>
            </div>
            <aside className="space-y-4">
              <div>
                <h3 className="text-sm uppercase tracking-wide text-neutral-500">{ui[lang].contact}</h3>
                <div className="mt-2 space-y-1">
                  <p><a className="hover:underline" href="mailto:ricardobarbosavicente@gmail.com">ricardobarbosavicente@gmail.com</a></p>
                  <p><a className="hover:underline" href="tel:+351934645221">+351 934 645 221</a></p>
                </div>
                <div className="flex gap-4 mt-4 text-neutral-500">
                  <a href={social.instagram} target="_blank" rel="noreferrer" className="hover:text-neutral-900"><Instagram size={18} /></a>
                  <a href={social.facebook} target="_blank" rel="noreferrer" className="hover:text-neutral-900"><Facebook size={18} /></a>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-sm uppercase tracking-wide text-neutral-500">{ui[lang].files}</h3>
                <div className="mt-2 flex flex-col gap-2">
                  <a href="/files/ricardo-barbosa-vicente-cv-2025-pt.pdf" className="hover:underline">CV (PDF)</a>
                  <a href="/files/portfolio-ricardo-barbosa-vicente-2025.pptx" className="hover:underline">Portefólio (PPTX)</a>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-sm uppercase tracking-wide text-neutral-500">{ui[lang].availability}</h3>
                <p className="mt-2 text-neutral-700">{ui[lang].availability_text}</p>
              </div>
            </aside>
          </div>
        )}
      </section>

      <footer className="px-6 sm:px-8 md:px-12 lg:px-20 pb-10 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Ricardo Barbosa Vicente</p>
      </footer>
    </main>
  );
}

function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-sm md:text-base transition ${active ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-neutral-100"}`}
    >
      {label}
    </button>
  );
}

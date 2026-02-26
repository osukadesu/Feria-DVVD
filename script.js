document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".product-card");

  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  cards.forEach((card) => {
    // Estado inicial para la animación
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease-out";
    observer.observe(card);
  });
});
// 1. Datos de las 19 tarjetas (puedes editar nombres y textos aquí)
const tarjetas = [
  {
    id: 1,
    nombre: "Visa Clásica",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-VisaClasica.webp/eda10fdf-12c5-5a4c-f627-d16e2f6b9f11?version=1.0&t=1748036332011&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=4765bc4e-c486-b9b8-f2ef-8572b051cd47",
    desc: "La tarjeta perfecta para crear un buen historial crediticio. Bono de bienvenida de 1.000 Davipuntos por $900.000 en compras en los 3 primeros meses.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/tarjeta-visa-clasica",
  },
  {
    id: 2,
    nombre: "Avianca LifeMiles Clásica",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-VisaLifeMiles-clasica.webp/fddbf949-2398-8234-11b6-4adb2b2881a9?version=1.0&t=1748287865600&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=ae1a9d06-26a8-2eaf-f1ce-dac3f25bcda5",
    desc: "Reciba beneficios en viajes y bono de bienvenida de 2.000 millas LM, por compras de 400 USD los 2 primeros meses desde la activación de la tarjeta.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/avianca-lifemiles-clasica",
  },
  {
    id: 3,
    nombre: "Visa Gold",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-VisaGolden.webp/2984c1a7-95d3-7824-2196-08165087c342?version=1.0&t=1748036333107&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=765af50d-ad3e-9574-98b0-6805181ed5e9",
    desc: "Aceptación mundial y respaldo con cada compra que realice. Bono de bienvenida de 3.000 Davipuntos por $2.100.000 en compras en los 3 primeros meses.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/visa-gold",
  },
  {
    id: 4,
    nombre: "Avianca Lifemiles Gold",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-VisaLifeMiles-gold.webp/e1dbd6f9-838c-7abb-3328-5b8a90249393?version=1.1&t=1752179175247&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=62aeb5e5-f02a-0b29-7561-815f289f9163",
    desc: "Acumule millas y disfrute de beneficios exclusivos. Bono bienvenida 4.000 millas LM por USD 700 en compras los 2 primeros meses.",
    link: "https://www.davivienda.com/wps/portal/personas/nuevo/personas/tarjetas_credito/visa_clasica",
  },

  {
    id: 5,
    nombre: "Visa Signature",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-VisaSignature.webp/d330ec68-9795-c2c8-9ac1-9ec96fb13221?version=1.0&t=1748036334174&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=6f378fd0-df41-b83e-4886-dbf32c7deebc ",
    desc: "Acceda a un mundo de beneficios premium. Bono de bienvenida de 8.000 Davipuntos por $4.500.000 en compras en los 3 primeros meses.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/visa-signature",
  },
  {
    id: 6,
    nombre: "Avianca LifeMiles Signature",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-VisaLifeMiles-signature.webp/544d1f97-54dc-e138-e019-5fff039c43f2?version=1.0&t=1748287865878&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=e6e02816-7cbd-668e-96a5-8484fd661ea2",
    desc: "Acumule millas al comprar y acceda a un mundo de beneficios premium. Bono bienvenida 10.000 millas LM por USD 2.000 en compras los 2 primeros meses.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/avianca-lifemiles-signature",
  },
  {
    id: 7,
    nombre: "Tarjeta G-Zero",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-VisaGZero.webp/7877908c-7610-463f-31e8-fb3901f878f1?version=2.0&t=1752179296953&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=df84fdbf-5c56-0c01-8564-a4f2a0448685",
    desc: "Si hay una tarjeta con la que puede hacer todo es la G-Zero: no paga cuota de manejo, hasta un 50% en avances y tiene 0% de interés en Apple.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/tarjeta-g-zero-davivienda",
  },
  {
    id: 8,
    nombre: "Empresarios Visa",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Mobile-VisaEmpresarios.webp/e64e5ba0-52eb-ffeb-4e91-f40cbe11d8b7?version=1.0&t=1748288002293&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=d600826f-6fdc-2e1c-a6c0-4afd4ceef729",
    desc: "Que su negocio llegue lejos, ¡es la meta! Lógrelo con la Tarjeta de Crédito Empresarios Visa que sí le da el verdadero impulso que necesita.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/empresarios-visa",
  },
  {
    id: 9,
    nombre: "Apple 0es3",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-Visa0ES3.webp/1efee651-79e7-d88a-7fd9-0e992698dbb0?version=2.0&t=1752179022729&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=35051bb5-7bf1-c1a3-6a5f-82aa845fd322",
    desc: "Estrenar celular y saber que paga 0% de interés le hará vivir feliz y sin estrés, por eso lo que necesita en su vida es la Tarjeta 0es3 Davivienda.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/tarjeta-0es3",
  },
  {
    id: 10,
    nombre: "Decameron",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-Decameron.webp/b09f9139-5bd9-a864-ea4c-5dfdbf533b41?version=3.0&t=1752179214559&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=11c1cb79-1699-63a6-3435-c0cddbd3f042",
    desc: "Con la Tarjeta Visa Decameron despegue a sus viajes con la felicidad de disfrutar planes todo incluido con los que gozará al máximo cada destino. No vigente para expedición!",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/tarjeta-decameron",
  },
  {
    id: 11,
    nombre: "SUMAS",
    img: "https://www.davivienda.com/documents/816879/874694/Tarjetas-Su%2B-Grandes.webp/4863e95f-c0ef-8f26-94a9-08883005ae95?version=1.1&t=1766009686905&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=4351164f-aee2-4b2f-3a8c-f1c146a87177",
    desc: "¡Compra sin límites con tu Tarjeta de Crédito SUMAS Visa! Experimenta la libertad absoluta y recibe beneficios exclusivos",
    link: "https://sumas.co/tarjeta-de-credito-sumas/",
  },
  {
    id: 12,
    nombre: "Home Sentry",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Mobile-VisaSentry.webp/958f5abe-a6bc-4721-558e-bead80dc6750?version=1.0&t=1748036323146&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=983653c0-fe2e-532d-aa16-73cfe86305ed",
    desc: "Déjese llevar por la comodidad que le brinda la Tarjeta Home Sentry para que compre artículos para su hogar con descuentos y beneficios exclusivos.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/tarjeta-home-sentry",
  },
  {
    id: 13,
    nombre: "Pepe Ganga",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Mobile-PepeGanga.webp/19367752-7469-5548-859d-75028ab4658c?version=1.0&t=1748036326177&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=649bef66-0a20-fe03-b5bf-9fcd1ded22f3",
    desc: "Descubra y disfrute de un mundo de descuentos y beneficios para comprar juguetes, cosas para el hogar y todo lo que le sumará a su felicidad.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/tarjeta-pepe-ganga",
  },
  {
    id: 14,
    nombre: "Bodytech",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-BodyTech.webp/155b806f-ee45-dfdc-d6e2-7cdfaff3b7e7?version=2.0&t=1752171640264&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=aa26f7ee-ec61-ef8d-9a36-6c56cb6893e8",
    desc: "Comience su rutina con una tarjeta que le da acceso a beneficios especiales en planes de entrenamiento.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/tarjeta-bodytech",
  },
  {
    id: 5,
    nombre: "Athletic",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-Atlethic.webp/2c8c6094-6141-198b-dfe0-3299468de567?version=1.0&t=1748036325363&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=d092bd59-8bd8-4d3f-56ed-1968af8f54eb",
    desc: "Cuide su bienestar con una tarjeta que le permite acceder a beneficios exclusivos en planes de entrenamiento personalizado.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/tarjeta-athletic",
  },
  {
    id: 16,
    nombre: "Supermercado Euro",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-Euro.webp/fdeb112c-2d49-4cf9-c1c1-c2241a09160f?version=1.0&t=1748036326996&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=4b5237be-f2f9-4114-d986-390c44990435",
    desc: "¡Un mundo de descuentos excelentes! Disfrute de este y más beneficios pagando con su Tarjeta de Crédito Euro.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/tarjeta-euro",
  },
  {
    id: 17,
    nombre: "Visa Platinum",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-VisaPlatinum.webp/c8dc0cd9-c4ce-d61e-5d51-05ceb3ee9568?version=1.0&t=1748036332554&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=605b03d6-0b47-eadb-e6d3-b5e5c9378ee2",
    desc: "Viajar y comprar será el doble de emocionante con la Tarjeta Visa Platinum, porque tiene beneficios exclusivos para que disfrute más cada experiencia.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/visa-platinum",
  },
  {
    id: 18,
    nombre: "Visa Garantizada",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-VisaClasica.webp/eda10fdf-12c5-5a4c-f627-d16e2f6b9f11?version=1.0&t=1748036332011&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=866aa3b3-9e88-212c-3154-151f954cd1ac",
    desc: "La Tarjeta de Crédito Davivienda Visa Garantizada le permite iniciar su historia crediticia. Además, puede invertir a mediano y largo plazo con los beneficios de un CDT.",
    link: "https://comunicaciones.davivienda.com/tarjetas-de-credito/#",
  },
  {
    id: 19,
    nombre: "Avianca LifeMiles Platinum",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-VisaLifeMiles-platinum.webp/368060ec-3323-083e-1b96-d79d1742013b?version=1.0&t=1748296742930&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=dfec8739-f563-82a6-c5f4-015d3b66b284",
    desc: "La tarjeta Avianca Lifemiles Platinum le ofrece la oportunidad de acumular LifeMiles con cada compra, ideal para redimir en viajes.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/avianca-lifemiles-platinum",
  },
  {
    id: 20,
    nombre: "Visa línea Libranza",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-VisaClasica.webp/eda10fdf-12c5-5a4c-f627-d16e2f6b9f11?version=1.0&t=1748036332011&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=33a985e2-05be-05cc-f919-0a2ad832af71",
    desc: "Que las cuotas no cambien como el clima y pague siempre a la fija es lo mejor de hacer compras con su Tarjeta de Crédito Visa Línea Libranza.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/visa-linea-libranza",
  },
  {
    id: 21,
    nombre: "Visa FGA",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-VisaClasica.webp/eda10fdf-12c5-5a4c-f627-d16e2f6b9f11?version=1.0&t=1748036332011&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=2aa3e407-6255-984b-d6a8-313802188dae",
    desc: "Acceso a salas VIP y asistencias exclusivas en todo el mundo.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-visa/tarjeta-de-credito-visa-fga",
  },
  {
    id: 22,
    nombre: "Mastercard Clásica",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-MasterCardClasica.webp/a44c09d5-c4c2-e1aa-c841-c75e3a6cb70f?version=1.0&t=1748036335536&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=ac90b4d0-e6a8-ba39-9e78-ce727d5e2892",
    desc: "La tarjeta perfecta para crear un buen historial crediticio. Bono de bienvenida de 1.000 Davipuntos por $900.000 en compras en los 3 primeros meses.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-mastercard/mastercard-clasica",
  },
  {
    id: 23,
    nombre: "Mastercard Gold",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-MasterCardGold.webp/3355395d-1848-62a4-0456-d98b3776e1be?version=1.0&t=1748036336821&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=dd5b2018-2077-7ebf-f138-40d4cfe781af",
    desc: "Realice compras, acceda a ofertas y privilegios especiales. Bono de bienvenida de 3.000 Davipuntos por $2.100.000 en compras en los 3 primeros meses.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-mastercard/mastercard-gold",
  },
  {
    id: 24,
    nombre: "Mastercard Black",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-MasterBlack.webp/a745c00e-0a16-9aa0-e251-1881e3667802?version=1.0&t=1748036335279&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=422c9f39-2834-6775-a38a-c0938031c8f1",
    desc: "Disfrute el mundo con asistencias y servicios exclusivos. Bono de bienvenida de 8.000 Davipuntos por $4.500.000 en compras en los 3 primeros meses.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-mastercard/mastercard-black",
  },
  {
    id: 25,
    nombre: "Uniandinos",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-VisaUniandinos.webp/5cf3e6f2-b9b2-2514-fe61-2c606006a972?version=1.0&t=1748292756072&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=ad986c25-0eeb-7dc3-7641-633b90cc8581",
    desc: "Si tiene una afiliación en UNIANDINOS también puede acceder a los beneficios de la franquicia Mastercard ¡disfrútelos al máximo con esta tarjeta!",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-mastercard/tarjeta-uniandinos",
  },
  {
    id: 26,
    nombre: "Mastercard Free",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-MasterFree.webp/35dfb5e7-3f36-aa50-cf70-6b69261c9c5c?version=1.0&t=1748036329206&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=78a9235f-f83e-e004-15ba-8c53d51826fd",
    desc: "Con la Free Mastercard será realmente libre de pagar cuota de manejo, tendrá un cupo de hasta $9.999.999 y sus compras estarán protegidas.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-mastercard/free-mastercard",
  },
  {
    id: 27,
    nombre: "Mastercard Platinum",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-MasterPlatinum.webp/49b5635f-7f1f-2e0f-270f-6e9c22fb2c56?version=1.0&t=1748036335790&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=de5f9f36-628f-ab8e-c39c-5556d820e588",
    desc: "Si busca una compañera incondicional en el mundo, con Mastercard Platinum la tendrá. Es perfecta para darse sus gustos en viajes, compras y en todo.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-mastercard/mastercard-platinum",
  },
  {
    id: 28,
    nombre: "Mastercard FGA",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-MasterCardClasica.webp/a44c09d5-c4c2-e1aa-c841-c75e3a6cb70f?version=1.0&t=1748036335536&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=2296caee-748d-5268-1819-867a3cdac49e",
    desc: "Tome el control de su vida financiera. La Tarjeta de Crédito MasterCard FGA es su mejor aliada para construir o potenciar su historial crediticio.",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-mastercard/tarjeta-fga",
  },
  {
    id: 29,
    nombre: "Uniandinos Platinum",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-VisaUniandinos.webp/5cf3e6f2-b9b2-2514-fe61-2c606006a972?version=1.0&t=1748292756072&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=9b1a8476-193e-5d56-4b70-708e65e7f8a2",
    desc: "Si tiene una afiliación en UNIANDINOS también puede acceder a los beneficios de la franquicia Mastercard ¡Disfrútelos al máximo con esta tarjeta!",
    link: "https://www.davivienda.com/personas/tarjeta-de-credito-mastercard/tarjeta-uniandinos-platinum",
  },
  {
    id: 30,
    nombre: "Diners Club",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-DinnersBlue.webp/8840d4a6-89d3-345b-5324-e3516709ec68?version=1.0&t=1748036330614&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=a91ab78d-5aae-ee61-8f62-79dfdb8a1b67",
    desc: "Disfrute un mundo de privilegios exclusivos. Bono de bienvenida de 3.000 Davipuntos por $900.000 en compras en los 3 primeros meses.",
    link: "https://www.davivienda.com/personas/diners/tarjeta-diners-club",
  },
  {
    id: 31,
    nombre: "Diners Black",
    img: "https://www.davivienda.com/documents/816879/874694/CardsHome-TDC-Desktop-DinnersBlack.webp/8acc90df-b260-96d2-dcfa-fc8c9bae81bc?version=2.0&t=1752174211333&download=true&objectDefinitionExternalReferenceCode=TarjetaDeCreditoOD&objectEntryExternalReferenceCode=40791a09-598e-bd15-1efa-58985493471e",
    desc: "Disfrute experiencias inolvidables en todo el mundo. Bono de bienvenida de 8.000 Davipuntos por $3.000.000 en compras en los 3 primeros meses.",
    link: "https://www.davivienda.com/personas/diners/tarjeta-diners-black",
  },
];

const container = document.getElementById("cardsContainer");

tarjetas.forEach((t) => {
  const cardHTML = `
        <div class="mini-card">
            <h4>${t.nombre}</h4>
            <img src="${t.img}" alt="${t.nombre}">
            <button class="btn-simple" onclick="openModal(${t.id})">Conocer más</button>
        </div>
    `;
  container.innerHTML += cardHTML;
});

// 3. Lógica del Accordion
const accBtn = document.getElementById("toggleAccordion");
const accPanel = document.getElementById("accordionPanel");

accBtn.addEventListener("click", () => {
  accPanel.classList.toggle("active");
  accBtn.textContent = accPanel.classList.contains("active")
    ? "Cerrar Catálogo"
    : "Ver Catálogo Completo";
});

// 4. Lógica del Modal
const modal = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");
const modalLink = document.getElementById("modalLink");

function openModal(id) {
  const t = tarjetas.find((item) => item.id === id);
  document.getElementById("modalTitle").innerText = t.nombre;
  document.getElementById("modalImg").src = t.img;
  document.getElementById("modalDescription").innerText = t.desc;
  modalLink.href = t.link;
  modalLink.target = "_blank";
  modal.style.display = "flex";
}

closeModal.onclick = () => (modal.style.display = "none");
window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
};

import Post from "../Post";

const post1 = new Post(
  "Explorando el Futuro de la IA",
  "Ana Torres",
  "La IA está transformando nuestras vidas, desde la automatización hasta la personalización. ¿Qué cambios veremos en los próximos años? Descubre cómo la IA redefine el mundo que conocemos.",
  {
    imageUrl:
      "https://img.freepik.com/foto-gratis/tecnologia-fondo-toque-humano-nueva-version-moderna-creacion-adan_53876-129794.jpg?t=st=1731539658~exp=1731543258~hmac=9637bce4ee333f172de09ded92ef462c1e8174ab273ed0c14533bd24cfa98aa9&w=740",
    altImageText: "Mano humana y mano de robot",
  },
);

const post2 = new Post(
  "Innovación en Energía Renovable",
  "Carlos Méndez",
  "Las energías renovables están revolucionando el panorama energético global. Desde la solar hasta la eólica, descubre cómo avanzamos hacia un futuro más sostenible y limpio.",
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1678743133487-d501f3b0696b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altImageText: "Un campo con paneles solares",
  },
);

export const posts = [post1, post2];

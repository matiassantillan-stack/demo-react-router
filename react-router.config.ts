import type { Config } from "@react-router/dev/config";

//Leer la base de datos de los clientes/productos

//route("testing-args/:id/:name/:age", "routes/auth/testing-args-page.tsx"),

const testingArgRoutes = [...Array(151)].map((_, i) => {
  const id = i + 1;
  const names = [
    "alice",
    "bob",
    "charlie",
    "dave",
    "eve",
    "frank",
    "grace",
    "heidi",
    "ivan",
    "judy",
  ];
  const name = names[Math.floor(Math.random() * names.length)];
  const age = Math.floor(Math.random() * 80) + 18;
  return `auth/testing-args/${id}/${name}/${age}`;
});

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  async prerender() {
    return [
      "/auth/login",
      "/auth/register",
      "/auth/testing",
      "/products/iphone",
      "/products/macbook",
      "/products/ipad",

      //Rutas dinámicas de prueba
      ...testingArgRoutes,
    ];
  },
} satisfies Config;

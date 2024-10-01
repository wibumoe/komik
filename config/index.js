const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://komik-tau.vercel.app";


// export const API = dev ? 'http://localhost:3000' : ''

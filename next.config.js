const isProd = process.env.NODE_ENV === "production";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
];

module.exports = {
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
  },
  assetPrefix: isProd ? "https://d361esbp6bpog9.cloudfront.net" : undefined,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/api/sign",
        headers: securityHeaders,
      },
    ];
  },
  publicRuntimeConfig: {
    axiosBaseUrl: process.env.AXIOS_BASE_URL,
  },
  env: {
    infuraKey: process.env.INFURA_KEY,
    alchemyKey: process.env.ALCHEMY_KEY,
  },
};

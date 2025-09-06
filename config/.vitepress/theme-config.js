export default {
  // https://vitepress.dev/reference/default-theme-config
  nav: [
    { text: "Guide", link: "/guides/web-development" },
    { text: "Contribute", link: "/contribute/markdown-examples" },
  ],

  sidebar: {
    "guides": [
      {
        text: "Web Development",
        link: "/guides/web-development",
        collapsed: false,
        items: [
          { text: "HTML", link: "/guides/html" },
          { text: "CSS", link: "/guides/css" },
          { text: "JavaScript", link: "/guides/javascript", items: [] },
          { text: "TypeScript", link: "/guides/typescript" },
          { text: "NodeJS", link: "/guides/nodejs" },
          { text: "Deno", link: "/guides/deno" },
          { text: "MySQL", link: "/guides/mysql" },
          { text: "PostgreSQL", link: "/guides/postgre" },
        ],
      },
      {
        text: "System Administration",
        link: "/guides/sysadmin",
        collapsed: false,
        items: [
          { text: "Docker", link: "/guides/docker" },
          { text: "Kubernetes", link: "/guides/kubernetes" },
          { text: "Uptime Kuma", link: "/guides/uptime-kuma" },
          { text: "Nginx", link: "/guides/nginx" },
          { text: "Caddy", link: "/guides/caddy" },
          { text: "JavaScript", link: "/guides/javascript", items: [] },
        ],
      },
    ],
    "contribute": [
      {
        text: "Contribute",
        collapsed: false,
        items: [
          {
            text: "Markdown Examples",
            link: "/contribute/markdown-examples",
          },
          { text: "API Examples", link: "/contribute/api-examples" },
        ],
      },
    ],
  },

  socialLinks: [
    { icon: "github", link: "https://github.com/vuejs/vitepress" },
  ],
};

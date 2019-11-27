module.exports = {
    title: 'Kallen B.V.',
    description: 'This is the placeholder age for the Kallen B.V. Holding',
    themeConfig: {
      search: false,
      logo: '/assets/img/logo.png',
      nav: [{ text: 'Home', link: '/' }, { text: 'About', link: '/about/' }]
    },
    dest: 'public',
    head: [
      ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
      ['link', { rel: "manifest", href: "/site.webmanifest"}],
      ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
      ['meta', { name: "msapplication-TileColor", content: "#51A4FB"}],
      ['meta', { name: "theme-color", content: "#51A4FB"}],
    ],
  }

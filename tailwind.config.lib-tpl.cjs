// Tailwind config for lib-tpl library only
// Scans only lib-tpl template files

module.exports = {
  corePlugins: {
    // Disable preflight for lib mode - prevents CSS conflicts
    preflight: false,
  },
  content: ['./src/lib-tpl/**/*.{html,js,ts,vue}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        default: 'var(--color-default)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        quaternary: 'var(--color-quaternary)',
      },
      fontFamily: {
        sans: 'DINNextLTPro-Condensed, Arial, sans-serif',
        body: 'DINNextLTPro-Condensed, Arial, sans-serif',
        icons: 'geoportail-icons-wc',
        arial: 'Arial, sans-serif',
      },
      fontSize: {
        'title-xl': ['40px', '40px'],
      },
      boxShadow: {
        header: '0px 2px 6px -1px rgb(0 0 0 / 50%)',
        footer: '0px 2px 6px 1px rgb(0 0 0 / 50%)',
        modal: '0 5px 10px rgba(0 0 0 / 20%)',
      },
    },
  },
  plugins: [],
}

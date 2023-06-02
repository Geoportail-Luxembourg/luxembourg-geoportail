const themes = [
  'main',
  'tourisme',
  'emwelt',
  'eau',
  'pag',
  'agriculture',
  'lenoz',
  'preizerdaul' /*PRIVATE THEME*/,
  'wellenstein' /*PRIVATE THEME*/,
  'lintgen' /*PRIVATE THEME*/,
  'remich' /*PRIVATE THEME*/,
  'at',
  'cadastre_hertzien',
  'urban_farming',
  'energie',
  'atlas_demographique',
  'logement',
  'np_our' /*USED ON PROD BUT NOT MIGRATION*/,
  'geosciences' /*USED ON PROD BUT NOT MIGRATION*/,
  'ahc' /*USED ON PROD BUT NOT MIGRATION*/,
  'municipalities' /*PRIVATE THEME*/,
  'Amenagement_du_territoire' /*PRIVATE THEME*/,
  'Environnement_naturel' /*PRIVATE THEME*/,
  'Environnement_humain' /*PRIVATE THEME*/,
  'Occupation_du_sol' /*PRIVATE THEME*/,
  'intranet-at' /*PRIVATE THEME*/,
  'prof' /*PRIVATE THEME*/,
  'go' /*PRIVATE THEME*/,
  'sig_secours' /*PRIVATE THEME*/,
]

const icons = [
  'layers',
  'mymaps',
  'infos',
  'legends',
  'routing',
  'draw',
  'measure',
  'print',
  'share',
]

module.exports = {
  content: ['index.html', './src/**/*.{html,js,ts,vue}'],
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
        ...generateThemeColors(),
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
      },
      screens: {
        hd: {
          raw: 'only screen and (min-device-pixel-ratio: 1.25), only screen and ( min-resolution: 200dpi), only screen and ( min-resolution: 1.25dppx)',
        },
        hd_md: {
          raw: 'only screen and (min-device-pixel-ratio: 1.25) and (min-width: 768px), only screen and ( min-resolution: 200dpi) and (min-width: 768px), only screen and ( min-resolution: 1.25dppx) and (min-width: 768px)',
        },
      },
      backgroundImage: {
        route: "url('/src/assets/images/backgroundselector/routiere.png')",
        topo_bw: "url('/src/assets/images/backgroundselector/topo_nb.png')",
        topo: "url('/src/assets/images/backgroundselector/topo.png')",
        ortho: "url('/src/assets/images/backgroundselector/orthophoto.png')",
        hybrid: "url('/src/assets/images/backgroundselector/hybrid.png')",
        route_sm:
          "url('/src/assets/images/backgroundselector/routiere_sm.png')",
        topo_bw_sm:
          "url('/src/assets/images/backgroundselector/topo_nb_sm.png')",
        topo_sm: "url('/src/assets/images/backgroundselector/topo_sm.png')",
        ortho_sm:
          "url('/src/assets/images/backgroundselector/orthophoto_sm.png')",
        hybrid_sm: "url('/src/assets/images/backgroundselector/hybrid_sm.png')",
        route_hi:
          "url('/src/assets/images/backgroundselector/routiere_retina.png')",
        topo_bw_hi:
          "url('/src/assets/images/backgroundselector/topo_nb_retina.png')",
        topo_hi: "url('/src/assets/images/backgroundselector/topo_retina.png')",
        ortho_hi:
          "url('/src/assets/images/backgroundselector/orthophoto_retina.png')",
        hybrid_hi:
          "url('/src/assets/images/backgroundselector/hybrid_retina.png')",
        route_sm_hi:
          "url('/src/assets/images/backgroundselector/routiere_sm_retina.png')",
        topo_bw_sm_hi:
          "url('/src/assets/images/backgroundselector/topo_nb_sm_retina.png')",
        topo_sm_hi:
          "url('/src/assets/images/backgroundselector/topo_sm_retina.png')",
        ortho_sm_hi:
          "url('/src/assets/images/backgroundselector/orthophoto_sm_retina.png')",
        hybrid_sm_hi:
          "url('/src/assets/images/backgroundselector/hybrid_sm_retina.png')",
      },
      content: {
        main: '"\\e02d"',
        tourisme: '"\\e04e"',
        emwelt: '"\\e04b"',
        eau: '"\\e016"',
        pag: '"\\e018"',
        agriculture: '"\\e043"',
        lenoz: '"\\e01A"',
        preizerdaul: '"\\e00c"',
        wellenstein: '"\\e00c"',
        lintgen: '"\\e00c"',
        remich: '"\\e00c"',
        at: '"\\e044"',
        cadastre_hertzien: '"\\e02d"',
        urban_farming: '"\\e054"',
        energie: '"\\e048"',
        atlas_demographique: '"\\e05c"',
        logement: '"\\e055"',
        np_our: '"\\e005"',
        geosciences: '"\\e05b"',
        ahc: '"\\e016"',
        municipalities: '"\\e042"',
        Amenagement_du_territoire: '"\\e044"',
        Environnement_naturel: '"\\e04b"',
        Environnement_humain: '"\\e048"',
        Occupation_du_sol: '"\\e051"',
        'intranet-at': '"\\e018"',
        prof: '"\\e00a"',
        go: '"\\e00b"',
        sig_secours: '"\\e00a"',
        layers: '"\\e00e"',
        mymaps: '"\\e01d"',
        infos: '"\\e01f"',
        legends: '"\\e041"',
        routing: '"\\e062"',
        draw: '"\\e01e"',
        measure: '"\\e021"',
        print: '"\\e02f"',
        share: '"\\e02a"',
        download: 'url("/src/assets/images/palette.svg")',
        upload:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'%3E%3C!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --%3E%3Cpath style='fill:white;' d='M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z'/%3E%3C/svg%3E\")",
        uu: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>',
        dd: '"\\f0ee"',
      },
    },
  },
  safelist: [
    'md:bg-route',
    'md:bg-topo_bw',
    'md:bg-topo',
    'md:bg-ortho',
    'md:bg-hybrid',
    'bg-route_sm',
    'bg-topo_bw_sm',
    'bg-topo_sm',
    'bg-ortho_sm',
    'bg-hybrid_sm',
    'hd_md:bg-route_hi',
    'hd_md:bg-topo_bw_hi',
    'hd_md:bg-topo_hi',
    'hd_md:bg-ortho_hi',
    'hd_md:bg-hybrid_hi',
    'hd:bg-route_sm_hi',
    'hd:bg-topo_bw_sm_hi',
    'hd:bg-topo_sm_hi',
    'hd:bg-ortho_sm_hi',
    'hd:bg-hybrid_sm_hi',
    ...generateThemeSafelist(),
    ...generateIconSafelist(),
    {
      pattern: /ol-*/,
    }
  ],
  plugins: [],
}

function generateThemeSafelist() {
  return themes.flatMap(theme => [
    `${theme}-primary`,
    `bg-${theme}-primary`,
    `hover:text-${theme}-primary`,
    `after:content-${theme}`,
    `before:content-${theme}`,
  ])
}
function generateIconSafelist() {
  return icons.flatMap(icon => [
    `after:content-${icon}`,
    `before:content-${icon}`,
  ])
}
function generateThemeColors() {
  return Object.fromEntries(
    themes.flatMap(theme => [
      [`${theme}-primary`, `var(--${theme}-primary)`],
      [`${theme}-secondary`, `var(--${theme}-secondary)`],
      [`${theme}-tertiary`, `var(--${theme}-tertiary)`],
    ])
  )
}

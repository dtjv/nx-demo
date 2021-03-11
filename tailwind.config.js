/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              textDecoration: 'no-underline',
              color: theme('colors.gray.900'),
              '&:hover': {
                color: theme('colors.gray.700'),
              },
            },
          },
        },
        dark: {
          css: {
            // here, i set the default dark mode text color
            color: theme('colors.gray.200'),

            // BUT, i still need to add color settings for these tags.
            a: {
              color: theme('colors.gray.200'),
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h2: {
              color: theme('colors.gray.200'),
            },
            strong: {
              color: theme('colors.gray.200'),
            },
            code: {
              color: theme('colors.gray.200'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

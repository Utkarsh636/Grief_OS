export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F4EF',
        surface: '#FFFFFF',
        ink: '#1F2422',
        muted: '#6E756C',
        line: '#E6E0D6',
        sage: '#4F6F5E',
        'sage-dark': '#3E5A4B',
        'sage-soft': '#E8EFE9',
        clay: '#B4744A',
        'clay-soft': '#F6EAE1',
        'amber-soft': '#FBF1DC',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '14px',
        '2xl': '20px',
        '3xl': '28px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(31,36,34,0.04), 0 8px 24px rgba(31,36,34,0.05)',
        lift: '0 10px 30px rgba(31,36,34,0.10)',
      },
    },
  },
}

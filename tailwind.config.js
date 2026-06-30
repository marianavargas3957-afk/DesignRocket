/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"], // Tailwind가 스캔할 파일 경로
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        background: '#08020e',
        card: '#0d0514',
        'violet-100': '#ece6ff',
        'muted-foreground': 'rgb(150, 156, 177)',
        'gradient-purple': '#9e67fa',
        'gradient-pink': '#fe6abb',
        'gradient-orange': '#ff9c65'
      }
    }
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // responsive screen for mobile,tablet,desktop,etc
    screens:{
      'sm':'340px',
      'md':'540',
      'lg':'992px',
      'xl':'1024px',
      'xxl':'1280px'
    },
    extend: {
      // box shadow
      boxShadow:{
        'shadow-light':'0 17px 20px 0 rgba(255, 255, 255, .2)',
        'shadow-print':'0 0 20px 0 rgba(120,0,255,.4)',
        'shadow-dark':'0 0 20px 0 rgba(0,0,0, .4)'
      },
    },
    // container customize
    container:{
      center:true,
      padding:{
        DEFAULT:'10px',
        sm: '10px',
        lg: '10px',
        xl: '10px',
      }
    },
    // container customize
    // font family customize
    fontFamily:{
      Jost:['"Jost", sans-serif'],
      Lobster:['"Lobster", sans-serif']
    },
    // font family customize
    // animation create
   keyframes:{
    moveUp:{
      "50%":{transform:"translateY(-1rem)"}
    },
    moveRight:{
      "0%":{transform:"translateX(0)"},
      "100%":{transform:"translateX(-10px)"}
   },
   moveDown:{
      '0%':{transform:"rotate(0)"},
      '100%':{transform:"rotate(360deg)"}
   },
  },
  animation:{
    animateMoveUp:"moveUp 3s linear infinite",
    animationMoveRight:"moveRight .9s linear infinite",
    animateRotate:"moveDown 3s linear infinite"
   },
  plugins: [],
}
}

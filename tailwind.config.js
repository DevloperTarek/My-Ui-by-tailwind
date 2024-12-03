/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // responsive screen for mobile,tablet,desktop,etc
    screens:{
      'sm':'340px',
      'md':'540px',
      'lg':'768px',
      'xl':'1170px'
    },
    extend: {},
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

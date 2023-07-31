/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "navBg": "url('assets/ffflux.svg')",
        "groceryBag": "url('assets/grocery_bag.jpg')",
        "recipeBk": "url('assets/recipe_book.png')",
        "handwrtn": "url('assets/handwritten.jpg')",
        "lunchbx": "url('assets/lunch_box.jpg')",
      },
      boxShadow: {
        "grocerySdw": " inset 0px -10px 42px 24px rgba(0,0,0,0.57);"
      }
    },
  },
  plugins: [],
}


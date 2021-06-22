const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'green-001': '#6EE7B7',
        blue: {
          450: '#5F99F7',
        }
      }
    },
    colors: {
      gray: colors.trueGray, //引入默认的颜色
      yellow: colors.amber,
      indigo: colors.indigo,
      red: colors.rose,
      color01: {         //对象语法自定义颜色
        light: '#2c3e50',  //text-color01-light
        DEFAULT: '#93C5FD',  //default 为默认 写法： text-color01
        dark: '#1E3A8A',
      },
      'green-01': '#059669', //字符串 text-green-01
      'green-02': '#065F46',
      primary: colors.rose,  //自定义别名 text-primary-400 针对特定主题
      test001: 'var(--color-test01)', //在index.css中 订阅对应值
      test02: 'var(--color-test02)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

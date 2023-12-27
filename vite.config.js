const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/chart.funnel.js' ),
            name: 'chart.funnel.js',
            fileName: (format) => `chart.funnel.${format}.js`
        }
    }
})
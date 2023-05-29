import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
import data from './data.json';

export default defineConfig({
    base : '/responsive_webpages/',
    build: {
        rollupOptions: {
            input : {
                main: 'index.html',
                bootstrap: 'index-bootstrap.html',
                materialize: 'index-materialize.html',
            }
        },
    },
    plugins: [handlebars({
      context : data
      
  })]
    
});


/*import data from './data.json';
import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite'


/*
const basicContext = {
        title : "Hello this is some text",
        show : false,
        fruits : [
            "apples",
            "oranges",
            "bananas"
        ],
        isClient : true,
        fruitSales : [
            {day : "Monday", apples : 13, oranges : 34},
            {day : "Tuesday", apples : 17, oranges : 28},
            {day : "Thursday", apples : 7, oranges : 45},
        ]
    };*/
/*
    export default {
      plugins: [handlebars({
        context : {
            /*
            previous setup here
            */
/*            basicContext
            data   // add this
        }
      })],
    };
    

*/
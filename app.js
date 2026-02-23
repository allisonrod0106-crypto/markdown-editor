document.addEventListener('DOMContentLoaded', () => {
//creating a vue app with the basic structure
const app = Vue.createApp({
    data() {
        return {
            message: ''
        };
    },

    //setting up a computed property
    computed: {
        //htmlOutput
        htmlOutput(){
            return marked.parse(this.message);
        },
        ///character count
        charCount(){
            const plainText = this.htmlOutput.replace(/<[^>]*>/g, '');
            return plainText.length;
        }
    },
    methods: {
        toggleTheme() {
          this.isDark = !this.isDark;
      
          document.documentElement.setAttribute(
            "data-bs-theme",
            this.isDark ? "dark" : "light"
          );
        }
      }
});



app.mount('#app');
}); 
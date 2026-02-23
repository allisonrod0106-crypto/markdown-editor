document.addEventListener('DOMContentLoaded', () => {
//creating a vue app with the basic structure
const app = Vue.createApp({
    data() {
        return {
            message: '',
            isDark: false
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
        }, 
        //theme icon
        themeIcon(){
            return this.isDark ? "light_mode" : "dark_mode";
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
      },
      mounted() {
        // Load saved Markdown from localStorage
        const savedMessage = localStorage.getItem("markdownMessage");
        if (savedMessage) {
          this.message = savedMessage;
        }
        //load saved theme
        const savedTheme = localStorage.getItem("isDark");
        if (savedTheme == "true") {
            this.isDark = true; 
            document.documentElement.setAttribute("data-bs-theme", "dark");
        } else {
            this.isDark = false;
            document.documentElement.setAttribute("data-bs-theme", "light");
        }
        //watch for changes and save
        this.$watch("message", (newVal) => {
            localStorage.setItem("markdownMessage", newVal);
        });
        this.$watch("isDark", (newVal) => {
            localStorage.setItem("isDark", newVal);
          });
      }
});



app.mount('#app');
}); 
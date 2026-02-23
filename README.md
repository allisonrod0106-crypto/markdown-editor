# Project Description 
The goal of this project is to explore web application development by creating an app with features listed below.  

# How to run locally
node app.js

# Feature list 
- textarea
- preview plane
- uses Vue 3
- uses marked.js
- shows live preview
- Displays character counter
- toggles light/dark theme
- Persists text using localStorage
- Persists theme using localStorage
- Responsive (stacked mobile/split desktop)

# Milestone 1 Quiz 

What is the purpose of git command? 
The git command saves the changes locally

What happens when you push to GitHub? 
The push command saves the changes remotely 

Why should we commit multiple times instead of once at the end? 
Saving changes locally helps to keep track of details and provides better control over the projects evolution. It helps to ensures that the project is ready to be shared and collaborated with. 

What is the difference between local repository and remote repository?
The local repository is only accessible on your computer while a remote repository is accesible on GitHub when you log in from any device.

# Milestone 2 Quiz 

What does display: flex do?
display: flex allows you to control alignment and layment of a container

What is a media query?
A media query is a way to apply styles in CSS under certain conditions. 

Why should responsive design be handled in CSS, not JavaScript?
CSS is faster as it is interepreted by the browser and JavaScript runs after the page loads. CSS is more responsive and allows for cleaner code.  

What happens if media query is placed before base styles?
CSS rules are applied in order, so the base style would overrule the media query if it came first. 

#Milesone 3 Quiz

What is the difference between `data` and `computed` in Vue?
Data holds reactive states like "message" and it triggers a re-render part of the DOM. Computed holds derived or calucated values based on data (ex. htmlOutput)

Why should we not manipulate DOM manually in Vue?
Vue uses a virtual DOM to manage the real DOM. If you manipulate it manually (with getElementByID or addEventListener) it conflicts with Vue's rendering and creates unexpected behavior. 

What does `v-html` do?
Injects raw HTML into a DOM element. 

Why must we strip HTML before counting characters?
The editor converts Markdown to HTML. 

# Milestone 4 Quiz

What is localStorage?
It is a browser feature that allows you to store data as key-value pairs. The data stored here persists across page reloads and browser restarts. 

When does `mounted()` run?
It is a lifecycle hook in Vue that runs after the component is mounted to the DOM. 

What is a Vue watcher?
It observes a reactive property and runs a function when it changes. 

Why should theme state also be persisted?
Users expect their chosen theme to stick between page reloads. 
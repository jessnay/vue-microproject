new Vue({
    el: '#app',
    data: {
        title: 'Welcome to My Vue.js Micro Project',
        description: 'This is a simple demonstration of Vue.js features.',
        userInput: '',
    },
    computed: {
        reversedInput() {
            return this.userInput.split('').reverse().join('');
        }
    },
    methods: {
        reverseInput() {
            this.userInput = this.userInput.split('').reverse().join('');
        }
    }
});

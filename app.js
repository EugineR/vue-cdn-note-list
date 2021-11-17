const App = {
    data() {
        return {
            title: 'My notes',
            placeholder: 'Enter new note',
            notes: ['First note'],
            zeroNotesMessage: 'There are not any notes yet',
            inputValue: ''
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue) {
                this.notes.unshift(this.inputValue)
                this.inputValue = '';
            }
        },
        removeNote(event, index) {
            this.notes.splice(index, 1)
        },
        toUpperCase(value) {
            return value.toUpperCase();
        }
    },
    computed: {
        getDoubledNotesLength() {
            return this.notes.length * 2;
        }
    },
    watch: {
        inputValue(value) {
            console.log(value)
        }
    }

}

Vue.createApp(App).mount('#vue-app')
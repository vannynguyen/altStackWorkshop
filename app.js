// SCROLL DOWN FOR DIRECTIONS

let user;
document.addEventListener('DOMContentLoaded', () => {
  const loggedInUser = localStorage.getItem('username');
  if (loggedInUser != null) {
    document.getElementById('hello').innerText = `Hi, ${loggedInUser}!`;
    document.getElementById('hello').style.display = 'block';
    user = loggedInUser;
  } else {
    user = 'Anonymous';
  }
}, false);

const nav = new Vue({
  el: '#fake-nav',
  methods: {
    open(which, e) {
      e.preventDefault();
      modal.active = which;
      console.log(modal.active);
    },
  },
});

const modal_submit_login = 'Login';
// var user = 'Anonymous';

var modal = new Vue({
  el: '#login-modal',
  data: {
    active: null,
    submitted: null,

    loginSubmit: modal_submit_login,
    loginUser: '',
  },
  methods: {
    addEvent() {
      if (this.event.name) {
        this.event.user = user;
        // push the event to this.events below!

        this.event = { name: '', user: '', description: '', date: '' };
      }
    },
    fetchEvents() {
      const events = [];
      this.events = events;
    },
    close(e) {
      e.preventDefault();
      if (e.target === this.$el) {
        this.active = null;
      }
    },
    deleteEvent(index) {
      if (confirm('Are you sure you want to delete this event?')) {
        // $remove is a Vue convenience method similar to splice
        this.events.splice(index, 1);
      }
    },
    submit(which, e) {
      user = document.getElementById('username').value;
      localStorage.setItem('username', user);
      document.getElementById('hello').innerText = `Hi, ${user}!`;
      document.getElementById('hello').style.display = 'block';
      modal.active = null;
    },
  },
});

// ADD CODE HERE TO CREATE A VUE INSTANCE

const eventsPage = new Vue({

  // We want to target the div with an id of 'events'
  el: '#events',

  // Here we can register any values or collections that hold data
  // for the application
  data: {
    event: { user: '', name: '', description: '', date: '' },
    events: [],
  },

  // Anything within the mounted function will run when the application loads
  mounted() {
    // call fetchEvents here!
    this.fetchEvents();
  },

  // Methods we want to use in our application are registered here
  methods: {
    // add fetchEvents, addEvent, and deleteEvent
  },
});

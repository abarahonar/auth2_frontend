<template>
  <div class="tm-2 container has-text-centered">
    <button
      class="my-6 mx-6 button is-rounded is-success is-light"
      @click="login"
    >
      LOGIN
    </button>
    <button
      class="my-6 mx-6 button is-rounded is-info is-light"
      @click="verify"
    >
      VERIFY
    </button>
    <button
      class="my-6 mx-6 button is-rounded is-danger is-light"
      @click="logout"
    >
      LOGOUT
    </button>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "App",
  methods: {
    login: () => {
      console.log("Login function called");
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then((user) => {
        return user.user.getIdToken().then( async (idToken) => {
          console.log("Doing HTTP request");
          let res = await fetch("https://back.testing.com:3000/login", {
            method: "post",
            credentials: "include",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idToken: idToken })
          });
          if (res.ok) {
            console.log("HTTP request done");
          }
        })
      }).then(() => {
        return firebase.auth().signOut();
      }).then(() => {
        console.log("Login function finished")
      })
    },
    verify: async () => {
      console.log("Get called");
      let res = await fetch("https://back.testing.com:3000/verify", {
        method: "get",
        credentials: "include",
      });
      if (res.ok) {
        console.log("Get done");
      }
    },
    logout: async () => {
      console.log("Del called");
      let res = await fetch("https://back.testing.com:3000/logout", {
        method: "delete",
        credentials: "include",
      });
      if (res.ok) {
        console.log("Del done");
      }
    },
  },
};
</script>

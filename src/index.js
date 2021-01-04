firebase.initializeApp({
    apiKey: "AIzaSyAgEy76g3k3D3yJ_Pyd-3zsbGrROEZGPSc",
    authDomain: "tingeso-55880.firebaseapp.com",
    databaseURL: "https://tingeso-55880.firebaseio.com",
    projectId: "tingeso-55880",
    storageBucket: "tingeso-55880.appspot.com",
    messagingSenderId: "752771580740",
    appId: "1:752771580740:web:33728d44da8eb1f1634d11"
});
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

//Allow pop up on the page
const provider = new firebase.auth.GoogleAuthProvider();
let loggedIn = false;
firebase.auth().signInWithPopup(provider).then(({ user }) => {
    return user.getIdToken().then(async (idToken) => {
        let result = await fetch("https://back.testing.com:3000/login", {
            method: "post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ idToken })
        });
        loggedIn = result.status == 200;
        if (result.ok && result.status == 401) {
            alert('Usted no tiene permiso de autorización')
        }
    })
}).catch((error) => {
    alert(error);
}).then(() => {
    firebase.auth().signOut();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const origin = urlParams.get("origin");
    if (origin != null) {
        const url = `${origin}?loggedIn=${loggedIn}`;
        window.location.href = url;
    } else {
        alert("Dirección de origen no indicada");
    }
})
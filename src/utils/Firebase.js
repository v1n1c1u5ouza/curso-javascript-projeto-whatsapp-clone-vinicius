const firebase = require("firebase");
require('firebase/firestore');

export class Firebase {

    constructor(){

        this._firebaseConfig = {   apiKey: "AIzaSyBywfkKMz-OHH4NbkC0J9O0Hsfu9PNsXGM",
        authDomain: "whatsapp-clone-vinicius.firebaseapp.com",
        projectId: "whatsapp-clone-vinicius",
        storageBucket: "whatsapp-clone-vinicius.appspot.com",
        messagingSenderId: "347321392830",
        appId: "1:347321392830:web:68af16704b4373efddc8ef",
        measurementId: "G-BG26B7GHEL"
      };

        this.init();

    }

    init(){

        if (!window._initializedFirebase) {
            firebase.initializeApp(this._firebaseConfig);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            });


            window._initializedFirebase = true;
        }

    }

    static db(){

        return firebase.firestore();

    }

    static hd(){

        return firebase.storage();

    }

    initAuth(){

        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
            .then(result => {
                
                let token = result.credential.accessToken;
                let user = result.user

                s({
                    user, 
                    token
                });

            })
            .catch(err => {
                f(err);
            }); 

        });

    }

}
 
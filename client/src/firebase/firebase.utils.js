import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAwYNSCbedJzs-saJg0txpcxeeSEcISNxA",
  authDomain: "crown-db-7e544.firebaseapp.com",
  databaseURL: "https://crown-db-7e544.firebaseio.com",
  projectId: "crown-db-7e544",
  storageBucket: "crown-db-7e544.appspot.com",
  messagingSenderId: "275203310086",
  appId: "1:275203310086:web:6fda39c7495ccfc98b3987",
  measurementId: "G-MZ2QREYFCB",
};

export const CreateUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    // Create User Profile

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error in saving user profile [{}]", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  collectionItems
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  collectionItems.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

export const convertCollectionSnapshotsToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;

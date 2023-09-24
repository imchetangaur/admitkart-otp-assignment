import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
	// firebase config goes here
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

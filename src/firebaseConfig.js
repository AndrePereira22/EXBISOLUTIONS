// src/firebaseConfig.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore' // 🔥 IMPORTAR FIRESTORE

const firebaseConfig = {
  apiKey: 'AIzaSyBhj16bLgIIOjKitr2QWMmZfUtpcK723oY',
  authDomain: 'next-crud-4b5fc.firebaseapp.com',
  projectId: 'next-crud-4b5fc',
  storageBucket: 'next-crud-4b5fc.firebasestorage.app',
  messagingSenderId: '784553329805',
  appId: '1:784553329805:web:493e41cce0d289f6230ec4',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app) // 🔥 INSTÂNCIA DO FIRESTORE

export { auth, db }

// src/database/database.module.ts
import { Module, Global } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { serviceAccount } from '../config/firebase.config'; // Importing the service account key

@Global() // Makes the providers in this module available everywhere
@Module({
  providers: [
    {
      provide: 'FIRESTORE', // Token to inject Firestore instance
      useFactory: () => {
        // Initialize Firebase Admin SDK if it hasn't been initialized yet
        if (!admin.apps.length) {
          admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
          });
        }
        // Return the Firestore instance
        return admin.firestore();
      },
    },
  ],
  exports: ['FIRESTORE'], // Export the Firestore instance for use in other modules
})
export class DatabaseModule {}

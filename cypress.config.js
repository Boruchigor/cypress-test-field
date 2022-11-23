/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from 'cypress';
import reset from './prisma/reset.cjs';
import seed from './prisma/seed.cjs';

export default defineConfig({
  projectId: 'xdac6f',
  e2e: {
    baseUrl: 'http://localhost:3000',
    experimentalSessionAndOrigin: true,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        reset() {
          return reset();
        },
        seed() {
          return seed();
        },
      });
    },
  },
});

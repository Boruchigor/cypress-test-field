import { defineConfig } from 'cypress';
import reset from './prisma/reset.cjs';
import seed from './prisma/seed.cjs';

export default defineConfig({
  projectId: 'hmsp64',
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

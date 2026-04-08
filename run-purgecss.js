import fs from 'fs';
import { PurgeCSS } from 'purgecss';

(async () => {
  const purgeCSSResult = await new PurgeCSS().purge({
    content: ['./src/**/*.tsx', './src/**/*.ts', './index.html'],
    css: ['./src/styles/main.css'],
  });

  fs.writeFileSync('./src/styles/main.css', purgeCSSResult[0].css, 'utf-8');
  console.log('Unused CSS removed successfully.');
})();
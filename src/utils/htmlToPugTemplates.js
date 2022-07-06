const { readdir, readFile, writeFile } = require('fs/promises');
const html2pug = require('html2pug');

const TEMPLATES_PATH = './src/express/templates';
const MARKUP_PATH = './markup';
const TEMPLATES_NAME_MAP = {
  'main': 'main.html',
  'login': 'sign-in.html',
  'sign-up': 'registration.html',
  'search': 'search-1.html',
  'post-detail': 'post-user.html',
  'articles-by-category': 'publications-by-category.html',
  'comments': 'admin-comments.html',
  'my': 'admin-publications.html',
  'post': 'admin-add-new-post-empty.html',
  'all-categories': 'admin-categories.html',
  '500': '500.html',
  '404': '404.html',
};

(async function htmlToPugTemplates() {
  const markupFiles = await readdir(MARKUP_PATH);

  for (const [templateName] of Object.entries(TEMPLATES_NAME_MAP)) {
    try {
      const markupFile = markupFiles.find(file => file === TEMPLATES_NAME_MAP[templateName]);
      if (!markupFile) {
        console.info(`Markup file for ${templateName} does not exist`);
        continue;
      }

      const templateMarkup = await readFile(`${MARKUP_PATH}/${markupFile}`, 'utf8');
      const templatePug = html2pug(templateMarkup);
      await writeFile(`${TEMPLATES_PATH}/${templateName}.pug`, templatePug);

    } catch (error) {
      console.error(error);
    }
  }
})();


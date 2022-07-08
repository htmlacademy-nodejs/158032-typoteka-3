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
const MIGRATIONS_MAP = [
  [/href='\.\//g, "href='/"],
  [/href='css\//g, "href='/css/"],
  [/src='img\//g, "src='/img/"],
  [/src='js\//g, "src='/js/"],
  [/.+(?=body)/s, "extends shared/layout\nblock body\n  "],
  [/footer.+2019/s, "include shared/footer"],
  [/script.+/s, "include shared/scripts"],
];

(async function htmlToPugTemplates() {
  const markupFiles = await readdir(MARKUP_PATH);

  for (const [templateName, markupFileName] of Object.entries(TEMPLATES_NAME_MAP)) {
    try {
      const markupFile = markupFiles.find(file => file === markupFileName);
      if (!markupFile) {
        console.info(`Markup file for ${templateName} does not exist`);
        continue;
      }

      const templateMarkup = await readFile(`${MARKUP_PATH}/${markupFile}`, 'utf8');
      let templatePug = html2pug(templateMarkup);

      for (const [fromRegExp, toString] of MIGRATIONS_MAP) {
        templatePug = templatePug.replace(fromRegExp, toString);
      }

      await writeFile(`${TEMPLATES_PATH}/${templateName}.pug`, templatePug);
    } catch (error) {
      console.error(error);
    }
  }
})();


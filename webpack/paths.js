const path = require('path');
const fs = require('fs');

const root = path.resolve(__dirname, '../');
const entryPath = path.resolve(root, 'src', 'index.ts');
const outputPath = path.resolve(root, 'dist');

const browserEntry = () => {
    const indexBrowser = path.resolve('../', 'index.browser.ts');
    if (fs.existsSync(indexBrowser)) {
        return indexBrowser;
    }
    return entryPath;
};

module.exports = {
    root,
    outputPath,
    entryPath,
    browserEntryPath: browserEntry(),
    chunkFilename: '[name].chunk.[chunkhash:8].js',
    examplePath: {
        html: path.resolve(__dirname, '../', 'example/index.html'),
        js: path.resolve(__dirname, '../', 'example/index.ts'),
    },
    cssFolder: 'css',
    jsFolder: 'js',
};

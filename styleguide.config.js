const path = require('path');

module.exports = {
  title: 'Oli - Style Guide',
  ignore: ['src/components/**/index.{js, jsx, ts, tsx}'],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    return `import { ${name} } from '${componentPath.replace(/\.[^/.]+$/, '')}';`;
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
  propsParser: (filePath, source, resolver, handlers) => {
    const { ext } = path.parse(filePath);
    return ext === '.tsx'
      ? require('react-docgen-typescript').parse(filePath, source, resolver, handlers)
      : require('react-docgen').parse(source, resolver, handlers);
  },
};

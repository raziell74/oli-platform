const path = require('path');

module.exports = {
  components: ['src/components/**/*.{ts,tsx}'],
  ignore: ['src/**/index.{ts,tsx}'],
  // We need to override how to decide on what an example file is, in order
  // to remove default which tries to document undocumented components. Ugh.
  // So, only document components for which we also have an explicit
  // documentation file named the same as the component file, but ending in
  // ".md" instead.
  getExampleFilename: (cpath) => {
    return cpath.replace(/\.(tsx?)$/, '.md');
  },
  // Show import commands without the component filename extension and only
  // for the module; also remove the first "src/" path component.
  getComponentPathLine: (cpath) => {
    const cname = ['.tsx', '.ts'].reduce((name, ext) => path.basename(name, ext), cpath);
    const cdir = path.dirname(cpath).replace(/^src\//, '');
    return `import { ${cname} } from ${cdir}`;
  },
  // How uncivilized: do not list components lacking an example.
  skipComponentsWithoutExample: true,
  // Always expand the props and methods of components.
  usageMode: 'expand',
  // Support rendering prop types of typescript components.
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
    compilerOptions: { noEmit: false },
  }).parse,
  // Replace the standard wrapper for example component usage code with our
  // own wrapper which brings in the Material UI theme.
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguidist/MuiThemeWrapper.tsx'),
  },
  // Tell webpack what to look for and where and how to load it.
  webpackConfig: {
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      // https://webpack.js.org/configuration/resolve/#resolvemodules;
      // we're allowing absolute imports to be satisfied from the src/
      // directory.
      modules: [path.resolve(__dirname, 'src/'), 'node_modules'],
      alias: {
        // Could also be covered by a modules clause, but we are
        // sticking with an alias instead to cover only exactly
        // absolute "styleguidist/..." imports.
        styleguidist: path.join(__dirname, 'styleguidist'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/react'],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                // Important! Avoids "Error: TypeScript emitted no output for..." errors
                compilerOptions: {
                  noEmit: false,
                },
              },
            },
          ],
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules',
        },
        {
          test: /\.svg$/,
          loader: 'url-loader',
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },
  },
};

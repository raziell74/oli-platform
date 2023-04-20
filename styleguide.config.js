const path = require('path');

module.exports = {
  title: 'Oli - Style Guide',
  ignore: ['src/components/**/index.{js, jsx, ts, tsx}', 'src/**/*.test.{ts, tsx}'],
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Getting Started',
      content: 'docs/introduction.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Building Components',
          content: 'docs/how-to-style-guide.md',
          description: 'How to Style Guide',
        },
        {
          name: 'Testing Process',
          content: 'docs/testing.md',
        },
      ],
    },
    {
      name: 'UI Components',
      content: 'docs/oli-ui.md',
      components: 'src/components/**/*.tsx',
      ignore: ['src/components/mui-styled/*.*', '**/index.*', '**/*.test.*'],
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'Material UI',
      content: 'docs//material-ui/mui.md',
      sections: [
        {
          name: 'Button',
          content: 'docs/material-ui/Button.md',
          description:
            'Buttons allow users to take actions, and make choices, with a single tap. [Documentation](https://mui.com/material-ui/react-button/)',
        },
        {
          name: 'Button Group',
          content: 'docs/material-ui/ButtonGroup.md',
          description:
            'The ButtonGroup component can be used to group related buttons. [Documentation](https://mui.com/material-ui/react-button-group/)',
        },
        {
          name: 'Floating Action Button',
          content: 'docs/material-ui/FAB.md',
          description:
            'A Floating Action Button (FAB) performs the primary, or most common, action on a screen. [Documentation](https://mui.com/material-ui/react-floating-action-button/)',
        },
      ],
    },
  ],
  theme: {
    baseBackground: '#fdfdfc',
    link: '#274e75',
    linkHover: '#90a7bf',
    border: '#e0d2de',
    font: ['Helvetica', 'sans-serif'],
  },
  styles: function styles(theme) {
    return {
      Playground: {
        preview: {
          paddingLeft: 0,
          paddingRight: 0,
          borderWidth: [[0, 0, 1, 0]],
          borderRadius: 0,
        },
      },
      Code: {
        code: {
          // make inline code example appear the same color as links
          color: theme.color.link,
          fontSize: 14,
        },
      },
    };
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    return `import { ${name} } from '${componentPath.replace(/\.[^/.]+$/, '')}';`;
  },

  // Override Styleguidist components
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'src/styleguide/components/Logo'),
    // SectionsRenderer: path.join(__dirname, 'src/styleguide/components/StyleGuideRenderer'),
    // StyleGuideRenderer: path.join(__dirname, 'src/styleguide/components/StyleGuideRenderer'),
    Wrapper: path.join(__dirname, 'src/styleguide/components/Wrapper'),
  },
  propsParser: (filePath, source, resolver, handlers) => {
    const { ext } = path.parse(filePath);
    return ext === '.tsx'
      ? require('react-docgen-typescript').parse(filePath, source, resolver, handlers)
      : require('react-docgen').parse(source, resolver, handlers);
  },
};

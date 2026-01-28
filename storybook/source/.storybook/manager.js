import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';

addons.setConfig({
  theme: {
    ...themes.normal,
    brandImage: './images/logo.svg',
    brandUrl: 'https://univaultoffice.github.io/',
  },
});

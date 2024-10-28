import {type StorybookConfig} from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    check: false,
    /**
     * For improved speed use react-docgen instead of react-docgen-typescript
     * Use react-docgen-typescript for verbose documentation of mantine components
     */
    reactDocgen: 'react-docgen-typescript', // use react-docgen instead of react-docgen-typescript to improve speed
    reactDocgenTypescriptOptions: {
      // Speeds up Storybook build time
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },

      // Filter out third-party props from node_modules except @mantine packages
      propFilter: (prop) => (prop.parent ? !/node_modules\/(?!react-aria-components)/.test(prop.parent.fileName) : true),

      // Makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,

      // Makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
    },
  },
};
export default config;

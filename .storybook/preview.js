export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <body className="default">
      <div className="page">
        <div className="page__content">
          <div data-portal-component-type="region" data-portal-region="main">
            <Story />
          </div>
        </div>
      </div>
    </body>
  ),
];

require("../src/css/main.css");

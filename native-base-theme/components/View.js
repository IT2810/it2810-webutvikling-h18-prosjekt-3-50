import variable from "./../variables/platform";

export default (variables = variable) => {
  const viewTheme = {
    ".padder": {
      padding: variables.contentPadding
    },

    /* Added */
    margin: 16,
  };

  return viewTheme;
};

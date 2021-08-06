const addTimeDropdownStyles = {
  control: () => ({
    display: 'flex',
  }),
  input: () => ({
    color: 'transparent',
  }),
  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    color: '#363a4471'
  }),
  indicatorSeparator: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: '#363a4471'
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      alignSelf: 'center',
      justifySelf: 'center',
      textJustify: 'center',
      marginLeft: '4%',
      letterSpacing: '3px',
      color: '#000000',
      fontFamily: 'Julius Sans One, sans-serif',
      letterSpacing: '3px',
    }
  },
};

export default addTimeDropdownStyles;
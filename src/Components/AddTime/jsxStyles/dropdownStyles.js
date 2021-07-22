const addTimeDropdownStyles = {
  control: (base) => ({
    ...base,
    height: 20,
    minHeight: 35,
    backgroundColor: '#c6fc80bd',
    display: 'flex',
  }),
  input: () => ({
    color: 'transparent',
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      alignSelf: 'center',
      justifySelf: 'center',
      textJustify: 'center',
      marginLeft: '4%',
      letterSpacing: '3px',
      color: '#2b2f30'
    }
  },
};

export default addTimeDropdownStyles;
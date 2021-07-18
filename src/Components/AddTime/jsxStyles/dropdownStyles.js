const addTimeDropdownStyles = {
  control: () => ({
    display: 'flex',
    minHeight: '30px',
    height: '55px',
  }),
  input: () => ({
    color: 'transparent',
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      alignSelf: 'center',
      justifySelf: 'center',
      fontSize: '1.5em',
      textJustify: 'center',
      marginLeft: '17%',
      letterSpacing: '3px',
      color: '#2b2f30'
    }
  },
};

export default addTimeDropdownStyles;
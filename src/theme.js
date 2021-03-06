import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';

export const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 50%;
  max-height: 50%;
`;

export const CheckBoxLabel = styled.label`
  position: relative;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background-image: url(https://i.postimg.cc/857jHw2q/Screenshot-2020-04-16-at-1-07-06-PM.png);
  transition: background-image .90s;
  background-size: cover;
  transition: 0.9s;
  color: #0626a2;
  cursor: pointer;
   border-color: #0626a2;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    border-color: #f8cc0588;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #f7c93380;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.9s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  border-color: #0626a2;
  &:checked + ${CheckBoxLabel} {
    background-image: url(https://i.postimg.cc/Hn0nstVK/Screenshot-2020-04-16-at-1-07-19-PM.png);
    transition: background-image .90s;
    &::after {
      content: '';
      display: block;
      border-color: #F8CB05
      color:#F8CB05;
      border-radius: 50%;
      background: #ecf0f38e;
      width: 18px;
      height: 18px;
      margin-left: 3px;
      transform: translate(100%);
      transition: all .9s;
    }
  }
`;

export const lightTheme = {
  body: '#EEEEEE',
  welcomeMsg: '#6E6355',
  textColor: '#000',
  textColorOpp: '#fff',
  textShadow: '#6E6355FF',
  navBarColor: '#2383D4',
  headingColor: '#2483d4',
  buttonBackgroundColor: '#2483d4',
  formBackground: '#6E6355',
  buttonTextColor: '#ececec',
  contactFormInner: '#EEEEEE',
  teamGridBackground: '#369bf44d',
  teamGridText: '#080109dc',
  border: '1px solid #0b0f164b'
}

export const darkTheme = {
  body: '#212128',
  welcomeMsg: '#8b8884',
  textColor: '#fff',
  textColorOpp: '000',
  textShadow: '#a8a09d',
  navBarColor: '#9DC7E4',
  headingColor: '#9DC7E4',
  backgroundColor: '#9DC7E4',
  formBackground: '#8b8884',
  buttonTextColor: '#000000',
  contactFormInner: '#292931b9',
  teamGridBackground: '#1c7769a4',
  teamGridText: '#fef7f6',
  border: '1px solid #f8f8ff'
}

export const GlobalStyles = createGlobalStyle`
 .App {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.textColor};
    transition: .3s ease;
 }
 .welcome-msg {
    color: ${props => props.theme.welcomeMsg};
 }
 .app-header, .app-header a, .about-us-title {
    color: ${props => props.theme.headingColor};
    text-shadow: ${props => props.theme.textShadow};
 }
 .menu-item {
    color: ${props => props.theme.textColorOpp};
 }
 .trip-form, .contact-container {
    background-color: ${props => props.theme.formBackground};
    box-shadow: $shadow-heavy;
  button {
      background-color: ${props => props.theme.buttonBackgroundColor};
      color: ${props => props.theme.buttonTextColor};
    }
 }
 .contact-form {
    background-color: ${props => props.theme.body};
 }
 .bm-menu {
    background-color: ${props => props.theme.headingColor};
 }
 .bm-overlay {
    background: rgba(0, 0, 0, 0);
 }
 .bio-container {
    border: ${props => props.theme.border};
 }
 .team-grid {
    background-color: ${props => props.theme.teamGridBackground};
 }
 .row-title {
    color: ${props => props.theme.teamGridText};
 }
`
import CSSModules from 'react-css-modules';

export default (component, styles) => {
  return CSSModules(component, styles, {errorWhenNotFound: false})
};

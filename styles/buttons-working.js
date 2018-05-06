import css from 'styled-jsx/css';

export default css`
  
  @import 'variables';
  
  .rdc-btn {
    font-weight: 500;
    padding: 0.75em 1.5em;
    display: inline-block;
    border-radius: $border-radius;
    border: 1px solid $color-dark;
    font-size: 1em;
    cursor: pointer;
    &:hover {
       background: blue;
     }
  }

`;



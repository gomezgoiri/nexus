import styled from 'styled-components';

export default styled.div`
  @media (${props => props.theme['--screen-medium']}) {
    background: ${props => props.theme['--color-light']};
    height: calc(100% - 2.5rem);
    position: fixed;
    top: 2.5rem;
    left: 32rem;
    width: calc(100% - 32rem);
  }
`;

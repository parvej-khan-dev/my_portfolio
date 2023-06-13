import styled from 'styled-components';

export const ExternalLinks = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
 
  padding: .75rem 1rem;
  background-image: linear-gradient(270deg,${props => props.theme.colors.background2} 0%, ${props => props.theme.colors.accent1} 100%);
  color: #fefefe;
  transition-duration: 0.3s;
  transition-property: background-image;
  border-radius: 0.6rem;
  cursor:pointer;

  &:hover {
    background-image: linear-gradient(270deg, ${props => props.theme.colors.accent1} 0%, ${props => props.theme.colors.background2} 100%);
  }
  
  &.link-to{
    margin: 2rem auto;
    min-height: 40px;
    max-width: 160px;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

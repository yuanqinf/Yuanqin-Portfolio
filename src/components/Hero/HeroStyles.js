import styled, { keyframes } from 'styled-components';
import { ChevronDown } from '@styled-icons/bootstrap/ChevronDown'



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

export const LinkIcon = styled.a`
  width: 100%;
`;

const breatheAnimation = keyframes`
 {
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(5px);
  }
}
`;

export const AnimatedIcon = styled(ChevronDown)`
  width: 10%;
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
	margin-bottom: 32px;
  color: white;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 6%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 8%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
`;
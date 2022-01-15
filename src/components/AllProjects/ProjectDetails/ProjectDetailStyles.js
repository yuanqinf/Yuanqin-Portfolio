import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: ${(props) => props.row ? "row" : "column"};
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0"} ;
  margin: 0 auto;
  max-width: 1080px;
  box-sizing: content-box;
  position: relative;
  place-items: center;
  justify-content: center;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0"} ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const ProjectTitle = styled.h2`
  font-weight: 500;
  text-align: center;
  font-size: ${(props) => props.main ? '56px' : '44px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
//   width: max-content;
//   max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.88) 80.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '6px'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '50px' : '38px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '4px'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '24px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '2px'};
    max-width: 100%;
  }
`

export const ProjectText = styled.p`
  font-weight: ${(props) => props.main ? '600' : '400'};
  font-size: ${(props) => props.main ? '20px' : '16px'};
  max-width: 100%;
  font-style: ${(props) => props.partner ? 'italic' : ''};
  line-height: 30px;
  text-align: ${(props) => props.desc ? 'left' : 'center'};
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: ${(props) => props.partner ? 'rgba(238, 238, 238, 0.7)' : 'rgba(255, 255, 255, 1)'};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.main ? '18px' : '14px'};
    line-height: 25px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.main ? '14px' : '12px'};
    line-height: 18px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const ProjectGridContainer = styled.section`
  display: grid;
  border-radius: 1%;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 2rem;
  place-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
  background-color: RGBA(255, 255, 255, 0.05);
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`

export const ProjectGridInfo = styled.div`
  border-radius: 20px;
//   box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
//   text-align: left;
  overflow: hidden;  
  width: 100%;
  opacity: 1;
`;

export const ProjectDivider = styled.div`
  width: 80%;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.colorAlt ?
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

    margin: ${(props) => props.divider ? "4rem 0" : ""};

  @media ${(props) => props.theme.breakpoints.md} {
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 2px;
  }
`

export const Img = styled.img`
  width:80%;
  height:80%;
  border-radius: 1%;
  object-fit: cover;
  overflow: hidden;  
  margin: 10px 10px 10px 10px;
`
export const GifImg = styled.img`
  width: ${(props) => props.big ? "90%" : "45%"} ;
  height: ${(props) => props.big ? "90%" : "45%"} ;
  border-radius: 1%;
  object-fit: cover;
  overflow: hidden;  
  margin: 10px 10px 10px 10px;
`

export const PlayBtn = styled.button`
  color: #FFF;
  background: none;
  border: 2px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  width: 39%;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 2px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
`
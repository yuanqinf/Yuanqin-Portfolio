import styled from 'styled-components';

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

export const AboutText = styled.p`
  font-weight: ${(props) => props.main ? '600' : '400'};
  font-size: ${(props) => props.main ? '24px' : '14px'};
  max-width: ${(props) => props.main ? '80%' : '35%'};
  font-style: ${(props) => props.partner ? 'italic' : ''};
  line-height: 28px;
  text-align: ${(props) => props.desc ? 'left' : 'center'};
  padding-bottom: 2rem;
  color: ${(props) => props.partner ? 'rgba(238, 238, 238, 0.7)' : 'rgba(255, 255, 255, 1)'};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.main ? '18px' : '12px'};
    line-height: 20px;
    padding-bottom: 24px;
    max-width: ${(props) => props.main ? '80%' : '25%'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.main ? '14px' : '10px'};
    line-height: 15px;
    padding-bottom: 16px;
    max-width: ${(props) => props.main ? '80%' : '50%'};
  }
`

export const AboutDivider = styled.div`
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

export const LogoImg = styled.img`
  width:25%;
  height:25%;
  border-radius: 1%;
  object-fit: cover;
  margin-bottom: 10px;
  overflow: hidden;  
`

export const Img = styled.img`
  width:35%;
  height:35%;
  border-radius: 1%;
  object-fit: cover;
  overflow: hidden;  
  margin: 10px 30px 10px 10px;
`

export const RefLink = styled.a`
	font-size: 16px;
	line-height: 20px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	margin-left: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
    cursor: pointer;
		color: #fff;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 12px;
		line-height: 18px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 8px;
		line-height: 4px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`
import styled from 'styled-components';

export const ElipseOne = styled.div`
    width: 600px;
    height:600px;
    background-image: radial-gradient(#32C0FD 0%, #FF00B8 80% );
    opacity: 0.6;
    border-radius: 100% 40%;
    display: flex;
    position: fixed;
    left: 73%;
    bottom: 48%;
    filter: blur(90px);
    
    z-index: 0;

    animation: animationBlur 12s ;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes animationBlur {
        from{
            left: 75%;
            bottom: 48%;
            filter: blur(90px);
        }
        to{
            left: 63%;
            bottom: 46%;
            filter: blur(200px);
        }
    }
`;
export const ElipseTwo = styled.div`
    width: 600px;
    height:600px;
    background-image: radial-gradient( #FF00B8 0% , #32C0FD 80%);
    opacity: 0.5;
    border-radius: 120% 900%;
    display: flex;
    position: fixed;
    right: 83%;
    top: 18%;
    filter: blur(90px);
    
    z-index: 0;

    animation: animationBlur2 9s ;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes animationBlur2 {
        from{
            right: 85%;
            top: 18%;
            filter: blur(90px);
        }
        to{
            right: 63%;
            top: 23%;
            filter: blur(200px);
        }
    }
`
export const ElipseThree = styled.div`
    width: 600px;
    height:600px;
    background-image: radial-gradient( #FF00B8 0% , #32C0FD 80%);
    opacity: 0.5;
    border-radius: 120% 900%;
    display: flex;
    position: fixed;
    right: 83%;
    top: 18%;
    filter: blur(90px);
    
    z-index: 0;
`
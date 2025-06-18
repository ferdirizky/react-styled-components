import './App.css'
import styled from 'styled-components';

const Title = styled.h1`
color : blue;
font-size : 50px;
`;

const Section = styled.section`
color : red;
background-color : papayawhip;
margin-bottom : 10px;
padding : 10px;
`;

const Button = styled.button`
background-color : ${props => props.primary ? 'blue' : 'white'};
color : ${props => props.primary ? 'white' : 'blue'};
padding : 10px;
border : 2px solid blue;
margin-right : 5px;
&:hover {
background : red;}
`;

const GreenButton = styled(Button)`
background : green;
border : 2px solid green;
`;

function App() {

  return (
    <>
    <Title>Ini contoh membuat Title</Title>
    <Section>ini contoh membuat section</Section>
    <Button>Submit</Button>
    <Button primary>Primary</Button>
    <GreenButton primary>Green Button</GreenButton>
    </>
  )
}

export default App

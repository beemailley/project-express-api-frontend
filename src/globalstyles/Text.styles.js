import styled from 'styled-components';

export const PrimaryHeader = styled.h1`
text-align: center;
width: 100%;
margin: 5px;
font-family: 'Quattrocento', serif;
font-size: xx-large;
`

export const SecondaryHeader = styled.h2`
    text-align: center;
    width: 100%;
    margin: 5px;
    font-family: 'Quattrocento', serif;
`

export const EndpointHeader = styled.h3`
    text-align: left;
    width: 90%;
    margin: 15px 0;
    padding: 0 0 0 40px;
`

export const Link = styled.a`
/* unvisited link */
&:link {
    color: white;
}

/* visited link */
&:visited {
    color: white;
}

/* mouse over link */
&:hover {
    color: #e6b800;
}

/* selected link */
&:active {
    color: white;
}
`
export const List = styled.ul`
    text-align: left;
    width: 90%;
    margin: 5px;
    padding: 0 0 0 40px;
    list-style-type: none;
`

export const CenteredText = styled.p`
    text-align: center;
`
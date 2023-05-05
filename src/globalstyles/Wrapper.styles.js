import styled from 'styled-components/macro';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: ${(props) => props.flexdirection || 'column'};
    flex-wrap: ${(props) => props.flexwrap || 'nowrap'};
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 90%;
    max-width: 650px;
    /* max-height: 650px;
    overflow-x: hidden;
    overflow-y: auto; */
    margin: 3% auto;
    background-color: rgb(0, 26, 51, .6);
    color: white;
    border-radius: 7px;
`
import styled from 'styled-components/macro';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 90%;
    max-width: 600px;
    margin: 5px auto;
    background-color: rgb(0, 13, 26, .75);
    color: white;
    border-radius: 7px;
    box-shadow: 2px 2px rgb(255, 255, 255, .5);

    p {
        margin: 3px;
    }
`
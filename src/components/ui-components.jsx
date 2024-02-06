// ui-components.jsx
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';



const UlMensajes = styled.ul`
    max-width: 800px;
    margin: 10px auto;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0;
    overflow-y: auto;
`;

const LiMensaje = styled.li`
    background-color: ${({ theme }) => theme === 'dark' ? 'lightblack':'lightgray'};
    border: 2px solid dodgerblue;
    padding: 10px 20px;
    border-radius: 10px;
    width: fit-content;
    max-width: 70%;
    align-self: flex-start;
    box-shadow: ${({ theme }) => theme === 'dark' ?   
    '10px 4px 10px rgba(192, 192, 192, 0.3)'
    :
    '10px 4px 10px rgba(0, 0, 0, 0.2)'
};
    position: relative;
    font-size: 16px;
`;

export { UlMensajes, LiMensaje };

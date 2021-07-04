import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;

        a {
            text-decoration: none;
        }
        h1, h2, h3, h4, p, strong, span {
            margin: 0;
        }
    }
`;
import styled from "styled-components";

export const SidebarComponent = styled.div`
    width: 100%;
    padding-top: 45px;

    display: flex;
    position: absolute;
    align-items: center;
    
    gap: 45px;
    
    .primary {
        padding-left: 5%;
    }

    a {
        color: #FFF;
        font-family:"Ubuntu", sans-serif;
        font-weight: 400;
        font-size: 24px;
    }
`;
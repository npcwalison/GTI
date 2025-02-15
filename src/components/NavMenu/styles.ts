import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: var(--white-color);

    h1 {
        font-size: 32px;
        font-weight: bold;
    }

    .center {
        width: clamp( 420px, 100%, 1440px);
        height: 100%;
        margin: 0 auto;
        padding: 0 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ul {
            list-style: none;
            display: flex;

            li {
                margin: 0 14px;

                button {
                    border: none;
                    background: none;
                    font-weight: 400;
                    font-size: 16px;
                    cursor: pointer;
                    color: var(--gray-color-800);
                    transition: weight 0.4s ease-in-out;

                    &:hover {
                        font-weight: 600;
                    }
                }
            }
        }
        #hidden {
            width: 50px;
        }
    }
`;

export default Container;
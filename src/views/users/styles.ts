import styled from "styled-components";

export const ModalUser = styled.div`
    width: 1000px;
    height: 650px;
    background-color: var(--gray-color-100);
    box-shadow: 0px 0px 4px rgba(34, 34, 34, 0.4);
    position: absolute;
    left: calc(50% - 500px);
    top: calc(50% - 325px);

    .title {
        width: 100%;
        height: 34px;
        background: var(--gray-color-400);
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: grab;

        p {
            color: #ffffff;
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            margin-left: 24px;
        }

        .buttons {
            display: flex;

            button {
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                width: 34px;
                height: 34px;
                border: none;
                background: none;

                &:hover {
                    background-color: rgba(34, 34, 34, 0.2);
                }
            }
        }
    }
`;

export const Menu = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    button {
        border: 1px solid var(--gray-color-400);
        color: var(--gray-color-400);
        border-bottom: none;
        margin: 0 1px;
        padding: 4px 8px;
        font-size: 11px;
        cursor: pointer;
    }
`;

import styled from 'styled-components';

export default styled.div<{ $opacity?: number }>`
    background: rgba(255, 255, 255, ${(props) => props.$opacity ?? 0.9});
    padding: 20px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
`;

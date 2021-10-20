import styled, {css} from 'styled-components';
import image from "assets/images/malezycie.jpg";

const Tile = styled.div`
  width: 200px;
  height: 300px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  padding: 20px;
  border-radius: 3px;
  transition: transform 0.3s;
  background-image: url(${image});
  background-size: 133px 200px;
  background-repeat: no-repeat;
  background-position: center 20px;

  &:hover {
    transform: scale(1.05);
  }

  ${({ secondary }) =>
    secondary &&
    css`
      width: 800px;
      background-position: 20px center;
    `}
`;

    export default Tile;
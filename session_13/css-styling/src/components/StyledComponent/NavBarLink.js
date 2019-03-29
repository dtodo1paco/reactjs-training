import styled from 'styled-components';
import NormalA from './StyledA';

const A = styled(NormalA)`
  padding: 2em 0;
  {props.color}
`;

export default A;
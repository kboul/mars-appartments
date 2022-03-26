import styled from "styled-components";

const Card = styled.div`
  border: 0px;
`;

const CardBody = styled.div`
  padding: 0;
`;

// remove bootstrap button blue outline when clicked
const CardContainer = styled.div`
  cursor: pointer;

  /* {
      span:focus
    border: none !important
    outline: none !important
    } */
`;

export default { Card, CardBody, CardContainer };

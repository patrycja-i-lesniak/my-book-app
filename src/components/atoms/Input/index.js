import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  /* position: relative; */
  width: 100%;
  display: flex; flex-direction: column;
`;

const StyledField = styled.input`
  color: ${({ theme }) => theme.colors.lipstick};
  font-size: 1.5rem;
  border: none;
  line-height: 2;
  border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 1.3rem;
  }
`;

const StyledLabel = styled.label`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.grey};
`;

const Input = ({ name, type, onChange, onBlur, values }) => (
  <StyledWrapper>
    <StyledField
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={values}
    />
    <StyledLabel>{name}</StyledLabel>
  </StyledWrapper>
);


Input.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Input; 
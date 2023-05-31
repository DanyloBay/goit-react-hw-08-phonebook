import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const Text = styled.p`
  font-weight: 600;
  color: var(--main-text-color);
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 80%;
  height: 40px;
  padding: 0 10px 0 10px;
  border: 1px solid var(--second-bg-color);
  outline: none;
  color: var(--main-text-color);
  font-size: 14px;
  :focus {
    border-color: var(--accent-bg-color);
  }
  ::placeholder {
    font-size: 12px;
    color: var(--main-text-color);
  }
`;

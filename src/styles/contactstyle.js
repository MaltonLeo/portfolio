import styled from "styled-components";

export const Wrap = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h2`
  margin: 0 0 18px;
  font-size: 1.8rem;
`;

export const Form = styled.form`
  display: grid;
  gap: 14px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #dfe3ea;
  outline: none;
  &:focus {
    border-color: #6c63ff;
    box-shadow: 0 0 0 3px #6c63ff22;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #dfe3ea;
  outline: none;
  resize: vertical;
  &:focus {
    border-color: #6c63ff;
    box-shadow: 0 0 0 3px #6c63ff22;
  }
`;

export const Submit = styled.button`
  justify-self: start;
  padding: 12px 22px;
  border-radius: 10px;
  border: none;
  background: #6c63ff;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    filter: brightness(0.95);
  }
`;

export const Hint = styled.p`
  color: #7b828e;
  margin: 6px 0 0;
  font-size: 0.9rem;
`;

export const Links = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: #6c63ff;
  }
  a:hover {
    text-decoration: underline;
  }
`;

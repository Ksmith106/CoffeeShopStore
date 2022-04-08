import styled from "styled-components";


const LoginPageStyles = styled.section`
  margin: 5rem auto 0;
  max-width: 580px;
  h2 {
    text-align: center;
    font-size: 2rem;
  }
  .Toastify__toast {
    background-color: #565656;
      color:white;
}
.Toastify__progress-bar--error {
    background-color: #12f8ff;
}
.Toastify__close-button {
    color:white;
    opacity:1;
}
.Toastify__toast-icon {
    fill:white;
}
`;
const FormControl = styled.div`
  margin: 2rem 0;
`;

export {LoginPageStyles, FormControl}
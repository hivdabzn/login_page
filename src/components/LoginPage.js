import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loginUser } from "../redux/actions/authActions";
import { FaUser, FaLock } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth?.error);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values) => {
    dispatch(loginUser(values.username, values.password));
  };

  return (
    <Container>
      <LoginBox>
        <Title>
          Welcome to <span>EasyDEV</span>
        </Title>
        <Subtitle>Start your business easily</Subtitle>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Label>Username</Label>
              <InputGroup>
                <FaUser className="icon" />
                <Field name="username" component="input" placeholder="Name" />
              </InputGroup>
              <Label>Password</Label>
              <InputGroup>
                <FaLock className="icon" />
                <Field
                  name="password"
                  component="input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <EyeButton
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </EyeButton>
              </InputGroup>
              <Options>
                <label>
                  <Field name="rememberMe" component="input" type="checkbox" />
                  Remember me
                </label>
                <ForgotPassword>Forgot a password?</ForgotPassword>
              </Options>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <LoginButton type="submit">Sign In</LoginButton>
              <CreateAccountButton>Create Account</CreateAccountButton>
              <Separator>Or Easily Using</Separator>
              <SocialButtons>
                <SocialButton className="facebook">F</SocialButton>
                <SocialButton className="google">G+</SocialButton>
              </SocialButtons>
            </form>
          )}
        />
      </LoginBox>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f4f4;
`;

const LoginBox = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 350px;
`;

const Title = styled.h2`
  margin-bottom: 5px;
  font-weight: normal;
  span {
    color: #3498db;
    font-weight: bold;
  }
`;

const Subtitle = styled.p`
  color: #777;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  .icon {
    position: absolute;
    left: 10px;
    color: #aaa;
  }

  input {
    width: 100%;
    padding: 12px 12px 12px 40px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    transition: border 0.3s;
  }

  input:focus,
  input:hover {
    border-color: #2ecc71;
  }
`;

const EyeButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const CreateAccountButton = styled.button`
  width: 100%;
  padding: 10px;
  background: white;
  border: 1px solid #3498db;
  color: #3498db;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`;

const ForgotPassword = styled.button`
  background: none;
  border: none;
  color: #3498db;
  cursor: pointer;
  font-size: 14px;
`;

const Separator = styled.p`
  text-align: center;
  color: #aaa;
  margin: 15px 0;
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const SocialButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.facebook {
    background: #3b5998;
  }
  &.google {
    background: #db4437;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

export default LoginPage;

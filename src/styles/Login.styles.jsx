import styled from "styled-components";

export const LoginButton = styled.button`
    background-color: #1db954;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    margin: 2%;
`

export const LoginLink = styled.a`
    color: #ffff;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
`

export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LoginInfo = styled.div`
    background-color: #282a2a;
    width: 30%;
    border-radius: 8px;
    color: #efdfdf;
`
export const Title = styled.h2`
    text-align: center;
    padding: 1rem;
    font-family: "AvenirBlack";
    font-size: 40px;
`

export const Description = styled.p`
    padding: 0 1rem 1rem 1rem;
    font-size: 18px;
    font-family: "Avenir";
`

export const NavBar = styled.div`
    margin: 20px;
    display: flex;
    justify-content: center;
`

export const NavLink = styled.a`
    margin: 1vw 1vw 0 1vw;
    background-color: rgb(239, 223, 223);
    color: rgb(128,0,0);
    border-radius: 10%;
    padding: 1vw;
    text-decoration: none;
    &:hover {
        background-color: rgb(128,0,0);
        color: rgb(239, 223, 223);
  }
`
import styled from "styled-components";
import searchIcon from "../assets/searchIcon.svg";
import axios from "axios";
import { useState } from "react";

export default function Search(props: HeaderProps & UserNameProps & UserInfoProps) {
  
  const [statusCode , setStatusCode] = useState(200);

  const request = async () => {
    try{ const response = await axios.get(
      `https://api.github.com/users/${props.userName}`
     );
      const data = response.data;
      setStatusCode(response.status)
      if (response.status ==200) {
        props.setUserInfo(data);
      }
    } catch(error) {
      setStatusCode(404);
    }
  }; 
  
  return (
    <SearchContainer isDark={props.isDark}>
      <img src={searchIcon} alt="searcIcon" />
      <input type="text" placeholder="Search username… " onChange={(event) => {
        props.setUserName(event.target.value)
      }}/>
      {statusCode != 200 ? <p className="noResult">No results</p> : null}
      <button onClick={() => {
        request();
      }}>Search</button>
    </SearchContainer>
  );
}

const SearchContainer = styled.div<{ isDark: boolean }>`
  width: 328px;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  background: ${(props) => (props.isDark ? "#1E2A47" : "#FEFEFE")};
  border-radius: 15px;
  border: none;
  margin: 36px 0 16px 0;
  position: relative;
  input {
    width: 180px;
    height: 25px;
    margin: 0 7px 0 10px;
    font-size: 13px;
    font-weight: 400;
    color: ${(props) => (props.isDark ? "#ffffff" : "#4B6A9B")};
    background: ${(props) => (props.isDark ? "#1E2A47" : "#FEFEFE")};
    outline: none;
    border: none;
    &::placeholder {
    color: ${(props) => (props.isDark ? "#ffffff" : "#4B6A9B")};
    }
  }
  
  .noResult {
   font-weight: 700;
   font-size: 12px;
   color: #F74646;
   position: absolute;
   left: 240px;
   top: 58px;
  }
   
  button {
    width: 84px;
    height: 46px;
    background: #0079ff;
    border-radius: 10px;
    border: none;
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
  }

  /* tablet styles */
  @media only screen and (min-width: 768px) {
     width: 574px;
     height: 70px;
     padding-left: 32px;
     input {
    width: 254px;
    margin: 0 122px 0 22px;
    font-size: 18px;
  }
  .noResult {
    font-size: 15px;
    top: 28px;
    left: 360px;
  }
  button {
    width: 106px;
    height: 50px;
    font-size: 16px;
  }
  
  /* desktop styles */
  @media only screen and (min-width: 1440px) {
    width: 730px;
    input {
      margin: 0 280px 0 24px;
    }
    .noResult {
      left: 500px;
    }
    button:hover {
      cursor: pointer;
      background: #60ABFF;
      transition: 0.3s;
    }
}
`;
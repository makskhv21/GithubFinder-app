import styled from "styled-components";
import searchIcon from "../assets/searchIcon.svg";
import axios from "axios";

export default function Search(props: HeaderProps & UserNameProps & UserInfoProps) {
  const request = async () => {
    try{ const response = await axios.get(
      `https://api.github.com/users/${props.userName}`
     );
     const data = response.data;
      props.setUserInfo(data);
    } catch(error) {
      props.setUserInfo(null);
    }
  }; 
  
  return (
    <SearchContainer isDark={props.isDark}>
      <img src={searchIcon} alt="searcIcon" />
      <input type="text" placeholder="Search username… " onChange={(event) => {
        props.setUserName(event.target.value)
      }}/>
      {props.userInfo == null ? <p>error</p> : null}
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
`;
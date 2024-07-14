import styled from "styled-components";
import moonIcon from "../assets/moonIcon.svg";
import sunIcon from "../assets/sunIcon.svg";


export default function Header(props: HeaderProps) {
  return (
    <HeaderContaier isDark={props.isDark}>
      <h1>Find Developer</h1>
      <div className="dark-light">
        <p>{props.isDark ? "LIGHT" : "DARK"}</p>
        <img
          src={props.isDark ? sunIcon : moonIcon}
          onClick={() => {
            props.setIsDark(!props.isDark);
          }}
        />
      </div>
    </HeaderContaier>
  );
}

const HeaderContaier = styled.div<{isDark: boolean }>`
  width: 328px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#222731")};
  }
  .dark-light {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  p {
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    text-align: right;
    letter-spacing: 2.5px;
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#4b6a9b")}; 
  } 
`;
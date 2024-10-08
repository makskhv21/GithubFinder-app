import styled from "styled-components";
import moonIcon from "../assets/moonIcon.svg";
import sunIcon from "../assets/sunIcon.svg";

export default function Header(props: HeaderProps) {
  return (
    <HeaderContaier isDarkTheme={props.isDarkTheme}>
      <h1>Find Developer</h1>
      <div className="dark-light" onClick={() => {
          props.setIsDarkTheme(!props.isDarkTheme);
        }}>
        <p>{props.isDarkTheme ? "LIGHT" : "DARK"}</p>
        <img
          src={props.isDarkTheme ? sunIcon : moonIcon}
          onClick={() => {
            props.setIsDarkTheme(!props.isDarkTheme);
          }}
        />
      </div>
    </HeaderContaier>
  );
};

const HeaderContaier = styled.div<{isDarkTheme: boolean }>`
  width: 330px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 30px;
    line-height: 34px;
    color: ${(props) => (props.isDarkTheme ? "#FFFFFF" : "#222731")};
  }
  .dark-light {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  p {
    font-weight: 700;
    font-size: 17px;
    line-height: 19px;
    text-align: right;
    letter-spacing: 2.5px;
    color: ${(props) => (props.isDarkTheme ? "#FFFFFF" : "#4b6a9b")}; 
  }
   
  /* tablet styles */
  @media only screen and (min-width: 768px) {
    width: 574px;
    .dark-light:hover {
      cursor: pointer;
    }
    .dark-light p:hover {
      color:  ${(props) => props.isDarkTheme ? "#90A4D4" : "#222731"} ;
      transition: 0.3s;
    }
    .dark-light img:hover {
      filter:  ${(props) => props.isDarkTheme ? "invert(74%) sepia(20%) saturate(606%) hue-rotate(186deg) brightness(220%) contrast(97%)" : "invert(14%) sepia(23%) saturate(486%) hue-rotate(182deg) brightness(10%) contrast(96%)"};
      transition: 0.2s;
    }
  }

  /* desktop styles */
  @media only screen and (min-width: 1440px) {
    width: 730px;
  }
`;
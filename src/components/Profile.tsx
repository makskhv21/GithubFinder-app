import moment from 'moment';
import styled from "styled-components";
import locationIcon from "../assets/locationIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import twwiterIcon from "../assets/twitterIcon.svg";
import companyIcon from "../assets/companyIcon.svg";

export default function Profile(props: HeaderProps & UserInfoProps) {
  const formattedDate = moment(props.userInfo?.created_at).format("DD MMM YYYY");
  
  const detailsBox = [
    { name: 'Repos', stat: props.userInfo?.public_repos },
    { name: 'Followers', stat: props.userInfo?.followers },
    { name: 'Following', stat: props.userInfo?.following },
  ];

  return (
    <ProfileContainer isDarkTheme={props.isDarkTheme} userInfo={props.userInfo}>
        <div className="userInfo">
          <img src={props.userInfo?.avatar_url} alt="userAvatar" />
          <div className="mainInfo">
            <p className="name">{props.userInfo?.name}</p>
            <p className="login">@{props.userInfo?.login}</p>
            <p className="creationTime">Joined {formattedDate}</p>
          </div>
        </div>
        <p className="bio">{props.userInfo?.bio == null ? "No bio available" : props.userInfo.bio}</p>
        <div className="followers">
          {detailsBox.map((infoContainer, index) => (
            <div className="infoContainer" key={index}>
              <p className="statName">{infoContainer.name}</p>
              <p className="stat">{infoContainer.stat}</p>
            </div>
          ))}
        </div>
        <div className="wrapper">
          {[
            { icon: locationIcon, alt: 'locationIcon', value: props.userInfo?.location },
            { icon: websiteIcon, alt: 'websiteIcon', value: props.userInfo?.blog },
            { icon: twwiterIcon, alt: 'websiteIcon', value: props.userInfo?.twitter_userNickname },
            { icon: companyIcon, alt: 'companyIcon', value: props.userInfo?.company },
          ].map((item, index) => (
            <div className={!item.value  ? "nullValue wrapperInfo" : "wrapperInfo"}  key={index}>
              <img src={item.icon} alt={item.alt} />
              <p >{!item.value  ? 'Not Available' : item.value}</p>
            </div>
          ))}
        </div>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div<{ isDarkTheme: boolean , userInfo: Info | null}>`
  width: 330px;
  height: 520px;
  background: ${(props) => (props.isDarkTheme ? "#1E2A47" : "#FEFEFE")};
  border-radius: 15px;
  border: none;
  display: flex;
  flex-direction: column;
  padding: 34px 0 0 26px;
  box-shadow: ${(props) =>
    !props.isDarkTheme ? " 0px 16px 30px -10px rgba(70, 96, 187, 0.198567)" : null};
  
  .userInfo {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .userInfo img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: none;
  }
  .mainInfo {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .name {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => (props.isDarkTheme ? "#FFFFFF" : "#2B3442")};
  }
  .login {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: #0079ff;
  }
  .creationTime {
    font-size: 13px;
    line-height: 19px;
    color: ${(props) => (props.isDarkTheme ? "#FFFFFF" : "#697C9A")};
  }
  .bio {
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    color: ${(props) => (props.isDarkTheme ? "#FFFFFF" : "#4B6A9B")} ;
    margin-top: 34px;
  }
  .followers {
    width: 280px;
    height: 85px;
    display: flex;
    gap: 28px;
    border-radius: 10px;
    background: ${(props) => (props.isDarkTheme ? "#141D2F" : "#F6F8FF")};
    margin: 24px 0;
    padding: 20px 0 0 40px;
  }
  .infoContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .statName {
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    color: ${(props) => (props.isDarkTheme ? "#FFFFFF" : "#4B6A9B")};
  }
  .stat {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => (props.isDarkTheme ? "#FFFFFF" : "#2B3442")};
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .wrapperInfo {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .nullValue {   
    opacity: 0.5;
  }
  .wrapperInfo img {
    filter: ${(props)=> (props.isDarkTheme ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(326deg) brightness(1000%) contrast(102%)" : null)} ;
  }
  .wrapperInfo p, .nullValue p {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: ${(props) => (props.isDarkTheme ? "#FFFFFF" : "#4b6a9b")}; 
  }
  
  /* tablet styles */
  @media only screen and (min-width: 768px) {
    width: 574px;
    height: 480px;
    padding: 40px 0 0 40px;
    
    .userInfo {
      gap: 40px;
    }
    .userInfo img {
      width: 116px;
      height: 116px;
    }
    .name {
      font-size: 26px;
      line-height: 38px;
    }
    .login {
      font-size: 16px;
      line-height: 24px;
    }
    .creationTime {
      font-size: 15px;
      line-height: 22px;
    }
    .bio {
      font-size: 15px;
      margin-top: 24px;
    }
    .followers {
      width: 492px;
      gap: 98px;
      margin: 32px 0;
      padding: 16px 0 0 32px;
    }
    .infoContainer {
      align-items: start;
    }
    .statName {
      font-size: 13px;
      line-height: 19px;
    }
    .stat {
      font-size: 22px;
      line-height: 33px;
    }
    .wrapper {
      width: 440px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 18px;
    }

  /* desktop styles */
  @media only screen and (min-width: 1440px) {
    width: 730px;
    height: 444px;
    padding: 48px 0 0 48px;
    position: relative;
  
    .userInfo {
      align-items: flex-start;
    }
    .mainInfo {
      gap: 2px;
    }
    .creationTime {
      position: absolute;
      top: 52px;
      right: 48px;
    }
    .bio {
      margin: -20px 0 0 154px;
    }
    .followers {
      width: 480px;
      gap: 98px;
      margin: 32px 0 36px 152px;
      padding: 16px 0 0 32px;
    }
    .wrapper {
      margin-left: 152px;
    }
  }
`;
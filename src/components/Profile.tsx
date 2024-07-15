import styled from "styled-components"
import locationIcon from "../assets/locationIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import twwiterIcon from "../assets/twitterIcon.svg"
import companyIcon from "../assets/companyIcon.svg"
import moment from 'moment';

export default function Profile(props: HeaderProps & UserInfoProps) {

    const formattedDate = moment(props.userInfo?.created_at).format('DD MMM YYYY');
    
    const infoBoxes = [
      { name: 'Repos', stat: props.userInfo?.public_repos },
      { name: 'Followers', stat: props.userInfo?.followers },
      { name: 'Following', stat: props.userInfo?.following },
    ];

    return (
      <ProfileContainer isDark={props.isDark} userInfo={props.userInfo}>
          <div className="userInfo">
            <img src={props.userInfo?.avatar_url} alt="userAvatar" />
            <div className="mainInfo">
              <p className="name">{props.userInfo?.name}</p>
              <p className="login">@{props.userInfo?.login}</p>
              <p className="createdAt">Joined {formattedDate}</p>
            </div>
          </div>
          <p>{props.userInfo?.bio}</p>
          <div className="followers">
            {infoBoxes.map((infoBox, index) => (
              <div className="infoBox" key={index}>
                <p className="statName">{infoBox.name}</p>
                <p className="stat">{infoBox.stat}</p>
              </div>
            ))}
          </div>
          <div className="wrapper">
            {[
              { icon: locationIcon, alt: 'locationIcon', value: props.userInfo?.location },
              { icon: websiteIcon, alt: 'websiteIcon', value: props.userInfo?.blog },
              { icon: twwiterIcon, alt: 'websiteIcon', value: props.userInfo?.twitter_username },
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

const ProfileContainer = styled.div<{ isDark: boolean , userInfo: Info | null}>`
  width: 328px;
  height: 518px;
  background: ${(props) => (props.isDark ? "#1E2A47" : "#FEFEFE")};
  border-radius: 15px;
  border: none;
  display: flex;
  flex-direction: column;
  padding: 32px 0 0 24px;
  box-shadow: ${(props) =>
    !props.isDark ? " 0px 16px 30px -10px rgba(70, 96, 187, 0.198567)" : null};
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
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#2B3442")};
  }
  .login {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: #0079ff;
  }
  .createdAt {
font-size: 13px;
    line-height: 19px;
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#697C9A")};
  }
  .followers {
    width: 280px;
    height: 85px;
    display: flex;
    gap: 28px;
    border-radius: 10px;
    background: ${(props) => (props.isDark ? "#141D2F" : "#F6F8FF")};
    margin: 24px 0;
    padding: 20px 0 0 40px;
  }
  .infoBox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .statName {
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#4B6A9B")};
  }
  .stat {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#2B3442")};
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
    filter: ${(props)=> (props.isDark ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(326deg) brightness(1000%) contrast(102%)" : null)} ;
  }
  .wrapperInfo p, .nullValue p {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#4b6a9b")}; 
  }
`;
import styled from "styled-components"
import locationIcon from "../assets/locationIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import twwiterIcon from "../assets/twitterIcon.svg"
import companyIcon from "../assets/companyIcon.svg"
import moment from 'moment';

export default function Profile(props: HeaderProps & UserInfoProps) {

    const formattedDate = moment(props.userInfo?.created_at).format('DD MMM YYYY');
    console.log(props.userInfo?.blog);

    return (
        <ProfileContainer isDark={props.isDark}>
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
            <div className="infoBox">
              <p className="statNme">Repos</p>
              <p className="stat">{props.userInfo?.public_repos}</p>
            </div>
            <div className="infoBox">
              <p className="statNme">Followers</p>
              <p className="stat">{props.userInfo?.followers}</p>
            </div>
            <div className="infoBox">
              <p className="statNme">Following</p>
              <p className="stat">{props.userInfo?.following}</p>
            </div>
          </div>
          <div className="wrapper">
            <div className="wrapperInfo">
              <img src={locationIcon} alt="locationIcon" />
              <p>{props.userInfo?.location == null ? "Not Available" : props.userInfo?.location}</p>
            </div>
             <div className="wrapperInfo">
              <img src={websiteIcon} alt="websiteIcon" />
              <p>{props.userInfo?.blog == null ? "Not Available" : props.userInfo?.blog}</p>
            </div>
             <div className="wrapperInfo">
              <img src={twwiterIcon} alt="websiteIcon" />
              <p>{props.userInfo?.twitter_username == null ? "Not Available" : props.userInfo?.twitter_username}</p>
            </div>
             <div className="wrapperInfo">
              <img src={companyIcon} alt="companyIcon" />
              <p>{props.userInfo?.company == null ? "Not Available" : props.userInfo?.company}</p>
            </div>
          </div>
        </ProfileContainer>
    );
}

const ProfileContainer = styled.div<{ isDark: boolean }>`
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
  .statNme {
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
  .wrapperInfo img {
    filter: ${(props)=> (props.isDark ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(326deg) brightness(1000%) contrast(102%)" : null)} ;
  }
  .wrapperInfo p {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#4b6a9b")}; 
  }
`;
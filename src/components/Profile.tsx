import styled from "styled-components"
import moment from 'moment';

export default function Profile(props: HeaderProps & UserInfoProps) {
    const createdAt = props.userInfo?.created_at;
    const formattedDate = moment(createdAt).format('DD MMM YYYY');
    
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
        </ProfileContainer>
    );
};

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
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#697C9A")} ;
  }
`;
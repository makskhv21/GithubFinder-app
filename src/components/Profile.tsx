import styled from "styled-components"

export default function Profile(props :HeaderProps & UserInfoProps) {
    return(
        <ProfileContainer isDark={props.isDark} >
            <p>{props.userInfo?.followers}</p>
            <img src={props.userInfo?.avatar_url} alt="" />
        </ProfileContainer>
    )
}

const ProfileContainer = styled.div<{isDark: boolean }>`
    width: 328px;
    height: 518px;
    background:  ${(props)=> (props.isDark ? "#1E2A47" : "#FEFEFE")} ;
    border-radius: 15px;
    border: none;
    display: flex;
    flex-direction: column;
    padding: 32px 0 0 24px;
    box-shadow: ${(props)=> (!props.isDark ? " 0px 16px 30px -10px rgba(70, 96, 187, 0.198567)" :  null)} ;
`;
interface HeaderProps {
    setIsDarkTheme: (isDarkTheme: boolean) => void;
    isDarkTheme: boolean;
}
  
interface UserNicknameProps {
    setUserNickname: (userNickname: string) => void;
    userNickname: string;
}
  
interface UserInfoProps {
    setUserInfo: (userInfo: Info | null ) => void;
    userInfo: Info | null;
}
  
interface Info {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admi: boolean;
    name: string,
    company: string | null,
    blog: string | null,
    location: string | null,
    email: string | null,
    hireable: string | null,
    bio: string | null,
    twitter_userNickname: string | null,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string,
};
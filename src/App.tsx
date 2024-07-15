import axios from "axios";
import { useState , useEffect} from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Search from "./components/Search";
import Profile from "./components/Profile";

function App() {
  const [isDarkTheme , setIsDarkTheme] = useState(false);
  const [userInfo , setUserInfo] = useState<Info | null>(null);
  const [userNickname , setuserNickname] = useState<string>("makskhv21");

  useEffect(() => {
    const request = async () => {
      try { 
        const response = await axios.get(
          `https://api.github.com/users/${userNickname}`
        );
        const data = await response.data;
        setUserInfo(data);
      } catch(error) {
        console.log();  
      }
    };
    request();
  }, []);

  return (
    <>
      <GlobalStyles isDarkTheme={isDarkTheme}  />
      <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <Search isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} userNickname={userNickname} setUserNickname={setuserNickname} userInfo={userInfo} setUserInfo={setUserInfo} />
      <Profile isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} userInfo={userInfo} setUserInfo={setUserInfo} />
    </>
  )
};

export default App;
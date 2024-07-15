import { useState , useEffect} from "react"
import GlobalStyles from "./styles/GlobalStyles"
import Header from "./components/Header";
import Search from "./components/Search";
import Profile from "./components/Profile";
import axios from "axios";

function App() {
  const [isDark , setIsDark] = useState(false);
  const [userInfo , setUserInfo] = useState<Info | null>(null);
  const [userName , setUserName] = useState<string>("octocat")

  useEffect(() => {
    const request = async () => {
      try { 
        const response = await axios.get(
          ` https://api.github.com/users/${userName}`
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
    <GlobalStyles isDark={isDark}  />
    <Header isDark={isDark} setIsDark={setIsDark} />
    <Search isDark={isDark} setIsDark={setIsDark} userName={userName} setUserName={setUserName} userInfo={userInfo} setUserInfo={setUserInfo} />
    <Profile isDark={isDark} setIsDark={setIsDark} userInfo={userInfo} setUserInfo={setUserInfo} />
    </>
  )
}

export default App
import './App.css';
import Amplify from "aws-amplify"
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react"

// 하기 코드의 경우, Amplify를 통해서 aws-exports.js가 만들어진 후에 사용합니다.
// import awsconfig from "./aws-exports"
// Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <AmplifySignOut />
      메인화면
    </div>
  );
}

export default withAuthenticator(App);

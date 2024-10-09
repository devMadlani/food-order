import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User : <UserContext.Consumer>
            {({loggedInUser})=> <h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        {/* <User name={"Dev Madlani"} /> */}
        <UserClass name={"Dev Madlani(class)"} location={"Porbandar"} />
        <UserClass name={"Rajesh Madlani(class)"} location={"Porbandar"} />
      </div>
    );
  }
}

export default About;

import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo:{
        
      }
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/devMadlani");
    const json = await data.json()
    this.setState({
      userinfo:json
    })
    // console.log(json)
  }
  componentDidUpdate(){
    console.log("component did update")
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="border border-e w-[200px] min-h-[100px] mx-auto p-3 hover:shadow-xl m-4">
        <h1 className="text-lg font-medium">
          Name:{" "}
          <span className="text-sm font-normal">
            {this.state.userinfo.message}
          </span>
        </h1>
        <h1 className="text-lg font-medium">
          Location:{" "}
          <span className="text-sm font-normal">{this.state.userinfo.documentation_url}</span>
        </h1>
        <h1 className="text-lg font-medium">
          Contact: <span className="text-sm font-normal">8866174136</span>
        </h1>
      </div>
    );
  }
}
export default UserClass;

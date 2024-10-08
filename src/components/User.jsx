import { useState } from "react";
const User = (props) => {
    const {name} = props
    const [count,setCount] = useState(1)
  return (
    <div className="border border-e w-[200px] min-h-[100px] mx-auto p-3 shadow-xl m-4">
      <h1>Count = {count}</h1>
      <h1 className="text-lg font-medium">
        Name: <span className="text-sm font-normal">{name}</span>
      </h1>
      <h1 className="text-lg font-medium">
        Location: <span className="text-sm font-normal">Surat</span>
      </h1>
      <h1 className="text-lg font-medium">
        Contact: <span className="text-sm font-normal">8866174136</span>
      </h1>
    </div>
  );
};
export default User;
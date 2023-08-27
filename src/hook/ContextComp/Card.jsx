import User from "./User";
import Button from "./Button";
import Input from "./Input";
export default function Card() {
    return (
      <div className="card">
        <User/>
        <Input/>
        <Button/>
      </div>
    )
}

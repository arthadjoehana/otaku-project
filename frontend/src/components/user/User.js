import "./user.css";

export default function User(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <p className="user">
      {props.username}
    </p>
  );
}

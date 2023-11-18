import { useRecoilValue } from "recoil";
import { useIssues } from "../../selector/Selector";
import "./messages.css";

const Messages = () => {
  const useIssuesItem = useRecoilValue(useIssues);

  return (
    <>
      <div className="messageContainer">
        <h1 className="messageHeader">inbox messages</h1>
        {useIssuesItem.issues.map((issuevalue, index) => {
         return(
          <>
           <div className="messageDetailsContainer">
            <div className="issuesContainer">
            <span className="messageName"><b>Name:</b> {issuevalue.name}</span>
          <span className="messageName"><b>status:</b> {issuevalue.title}</span>
          <span className="messageName"><b>status:</b> {issuevalue.status}</span>
            </div>
          
          <p className="MessageDetails">
           <b>Description:</b >{issuevalue.description}
          </p>
        </div>
          </>
         )
        })}
        
      </div>
    </>
  );
};

export default Messages;

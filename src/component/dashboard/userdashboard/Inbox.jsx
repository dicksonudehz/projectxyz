import './inbox.css'
import { useRecoilValue } from "recoil";
import { inbox } from '../../../selector/Selector';

const Inbox = () => {
  const Messages = useRecoilValue(inbox);
  console.log(Messages.data.issues, 'this are the message from the inbox ')
  
  return (
    <>
      <div className="inboxContainer">
        <h1 className="inboxHeader">inbox inboxs</h1>
        <div className="inboxDetailsContainer">
          {Messages && Messages.data.issues.map((issue, index) => {
            return(
              <>
               <span className="inboxName">{issue.title}</span>
          <p className="inboxDetails">
          {issue.description}
          </p>
              </>
            )
          })}
         
        </div>
      </div>
    </>
  )
}

export default Inbox

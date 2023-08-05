import "./nomessages.css";
import AnnouncementIcon from "@mui/icons-material/Announcement";
const NoMessages = () => {
  return (
    <>
      <div className="noMessageContainer">
        <h1 className="noMessageHeader">inbox messages</h1>
        <div className="noMessageDetailsContainer">
          <div className="noMessageConIcon">
            <AnnouncementIcon className="noMessageIcon" />
          </div>
          <p className="noMessagesDetails">
            <b>You don't have any messages Here</b> <br />
            you will be able to see all the messages that we send you. Stay
            tuned
          </p>
        </div>
      </div>
    </>
  );
};

export default NoMessages;

import Page from "../UI/Page";
import facebook from "../../Assets/facebook.svg";
import twitter from "../../Assets/twitter.svg";
import instagram from "../../Assets/instagram.svg";
import twitch from "../../Assets/twitch.svg";

const Contact = () => {
  return (
    <Page className="flex items-start justify-center gap-20 pt-60">
      <a
        href="https://www.youtube.com/watch?v=phNQspsqPCI&ab_channel=HI_VR"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={facebook} alt="fb icon" className="h-20" />
      </a>
      <a
        href="https://www.youtube.com/watch?v=phNQspsqPCI&ab_channel=HI_VR"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={twitter} alt="twitter icon" className="h-20" />
      </a>
      <a
        href="https://www.youtube.com/watch?v=phNQspsqPCI&ab_channel=HI_VR"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={instagram} alt="insta icon" className="h-20" />
      </a>
      <a
        href="https://www.youtube.com/watch?v=phNQspsqPCI&ab_channel=HI_VR"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={twitch} alt="twitch icon" className="h-20" />
      </a>
    </Page>
  );
};

export default Contact;

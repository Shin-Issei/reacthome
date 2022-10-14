import giticon from "../Images/githubicon.png";
import logo from "../Images/logo.svg";
import odin from "../Images/odin-lined.png";
function AllLinks() {
  return (
    <div className="links">
      <Link
        linkID="GitLink"
        Linkurl="https://github.com/"
        linkText="GitHub"
        src={giticon}
      />
      <Link
        linkID="ReactLink"
        Linkurl="https://reactjs.org/docs/components-and-props.html"
        linkText="React Tutorial"
        src={logo}
      />
      <Link
        linkID="TOP-Link"
        Linkurl="https://www.theodinproject.com/paths/full-stack-javascript?"
        linkText="The Odin Project"
        src={odin}
      />
    </div>
  );
}

function Link(props) {
  return (
    <div className="link-icombo">
      <a href={props.Linkurl} id={props.linkID}>
        {props.linkText}
      </a>
      <a href={props.Linkurl} id={props.linkID}>
        <img src={props.src} alt="None" width="40vw"></img>
      </a>
    </div>
  );
}

export { AllLinks };

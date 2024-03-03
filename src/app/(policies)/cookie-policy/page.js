import React from "react";
import "../policies.scss";

function page() {
  return (
    <section className="main-wrapper pb-5">
      <div className="header">
        <div className="content d-flex px-4 d-flex flex-column justify-content-center position-relative h-100">
          <div className="logo-wrapper">
            <h1 className="logo position-absolute" style={{ top: "1rem" }}>
              stampd
            </h1>
          </div>
          <h1 className="fw-bold">Cookie Policy</h1>
          <h3 className="fs-6 mt-1">Last Updated: February 14, 2024</h3>
        </div>
      </div>
      <div className="content px-4 mt-5">
        <p className="text">{`This Cookie Policy explains how Stampd Loyalty Cards ("Company," "we," "us," and "our") uses cookies and similar technologies to recognize you when you visit our website at  https://www.stampd.ca ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.`}</p>
        <p>
          In some cases we may use cookies to collect personal information, or
          that becomes personal information if we combine it with other
          information.
        </p>
        <h4 className="fw-bold subTitle">What are cookies?</h4>
        <p>
          Cookies are small data files that are placed on your computer or
          mobile device when you visit a website. Cookies are widely used by
          website owners in order to make their websites work, or to work more
          efficiently, as well as to provide reporting information.
        </p>
        <p>
          {`Cookies set by the website owner (in this case, Stampd Loyalty Cards) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.`}
        </p>
        <h4 className="fw-bold subTitle">Why do we use cookies?</h4>
        <p>
          {`We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.`}
        </p>
        <h4 className="fw-bold subTitle">
          What about other tracking technologies, like web beacons?
        </h4>
        <p>
          {`Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enables us to recognize when someone has visited our Website or opened an email including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of email marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.`}
        </p>
        <h4 className="fw-bold subTitle">
          Do you use Flash cookies or Local Shared Objects?
        </h4>
        <p>
          {` Websites may also use so-called "Flash Cookies" (also known as Local
            Shared Objects or "LSOs") to, among other things, collect and store
            information about your use of our services, fraud prevention, and
            for other site operations.`}
        </p>
        <p>
          {`If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the Website Storage Settings Panel. You can also control Flash Cookies by going to the Global Storage Settings Panel and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to "information" on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).`}
        </p>
        <p>{`Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.`}</p>
      </div>
    </section>
  );
}

export default page;

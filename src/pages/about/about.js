import Page from "../page";
import headshot from "../../res/headshotsqr.jpg";
import "./about.css";

export default () => {
  return (
    <Page className="__abt-page" terminal>
      <div className="__abt-wrapper">
        <p>
          <img alt="head-shot" src={headshot} />
          I'm the 'Method Decorator', a Senior Fullstack Engineer based in
          Oakland, CA. I have spent the better part of my career wrangling
          JavaScript and Python into submission. While I'm not interrogating
          Pull Requests, or explaining why “it works on my machine,” I've
          probably tunneled into a remote Raspberry Pi to continue working on my
          secret plan for World Domination.
        </p>
        <p>
          My hero ark began not with textbooks, but with RuneScape and a burning
          desire for full rune armor. Tired of manually mining rune essence like
          a peasant, I discovered botting scripts—clunky, inefficient, but
          filled with potential. With a few tweaks, I optimized these bots to
          out-mine every noob in Varrock. Before I knew it, I wasn’t just
          farming gold—I was debugging loops, optimizing algorithms, and
          accidentally DDoSing myself. Fast forward a decade later, I'm still
          writing code… only now, I get paid for it instead of risking a
          perma-ban.
        </p>
      </div>
    </Page>
  );
};

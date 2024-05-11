import { FC, useState } from 'react';
import {
  Code,
  Contact,
  Flame,
  Github,
  Highlighter,
  Home,
  Image as ImageIcon,
  Instagram,
  Layers,
  Linkedin,
  LucideEye,
  Projector,
  Scissors,

  ScreenShare,

  WholeWord,

  X,

} from 'lucide-react';
import List from '../ui/List';
import { useContact, useMenu } from '../Provider';
import { Props } from 'next/script';
import ContactMe from '../ContactForm/ContactMe';
import Router from 'next/router';

interface MenuProps {}

const Menu: FC<MenuProps> = ({ }) => {
  const [showContactMe, setShowContactMe] = useState(false);
  const { showMenuVisibility } = useMenu();
  const { setFormVisibility } = useContact();
  const openHeroPage = () => {
    // Add your logic here to open the "Hero" page
    Router.push('/hero'); // Assuming 'hero' is the route for the Hero component page
  };
  return (
    <div
      className="flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5"
      onClick={() => showMenuVisibility(false)}
    >
      <div className="block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
        <X className={`text-primary`} />
      </div>
      <span>
      <List
        link=""
        effect="slideUp"
      >
        <Home /> Home
      </List>
      </span>
      <List
        link="https://65a6874c7cb25c09c90952f7--jocular-basbousa-e89524.netlify.app/"
        effect="slideUp"
      >
        <WholeWord /> About Me
      </List>
      <List
        link="https://www.linkedin.com/in/imran-ali13/"
        effect="slideUp"
      >
        <Contact /> Contact
      </List>
      <List effect="slideUp">
        <Highlighter  /> For Project scroll down
      </List>
      {/* List 2 */}
      <div className="mt-5">Socials</div>
      <List
        target="_blank"
        link="https://www.instagram.com/imranali.dev/"
        effect="slideUp"
      >
        <Instagram color="#b5179e" /> Instagram
      </List>
      <List target="_blank" link="https://github.com/imranali-dev" effect="slideUp">
        <Github color="#2a9d8f" /> Github
      </List>
      <List
        target="_blank"
        link="https://vercel.com/imran-alis-projects"
        effect="slideUp"
      >
        <ScreenShare color="#e63946" /> Check Out My Work
      </List>
      <List
        target="_blank"
        link="https://stackoverflow.com/users/22842200/imran-ali"
        effect="slideUp"
      >
        <Layers color="#f77f00" /> Stack overflow
      </List>
      {/* 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 */}
      <List
        target="_blank"
        link="https://www.linkedin.com/in/imran-ali13?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        effect="slideUp"
      >
        <Linkedin color="#0277b5" /> Linkedin
      </List>

      {/* List 3 */}
      {/* <div className="mt-5">Projects</div>
            <List
                target="_blank"
                link="https://github.com/"
                effect="slideUp"
            >
                <Shirt /> Ez CLothing
            </List>
            <List
                target="_blank"
                link="https://github.com/"
                effect="slideUp"
            >
                <ShoppingCart /> eCommerce
            </List>
            <List
                target="_blank"Linkedin
                link="https://github.com/"
                effect="slideUp"
            >
                <Ticket /> Lottery
            </List>
            <List
                target="_blank"
                link="https://github.com/-webrtc"
                effect="slideUp"
            >
                <Share2 /> File Sharing
            </List>
            <List
                target="_blank"
                link="https://github.com//dalleClone"
                effect="slideUp"
            >
                <ImageIcon /> Dalle Clone
            </List>
            <List
                target="_blank"
                link="https://snake-.vercel.app/"
                effect="slideUp"
            >
                <Scissors /> Ex Clone
            </List> */}
    </div>
  );
};

export default Menu;

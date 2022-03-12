import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import './toy.css';

export default function Abe(){
   return (
       <div className="hwai">
          <p className="yon"> Copyright © CODING HUB 2022. </p>
          <p className="yon">All rights reserved.</p>
          <p className="yon"> Follow Us: <a href="https://www.instagram.com/klrahul7080/"><InstagramIcon/></a> <a href="https://www.facebook.com/profile.php?id=100043468223500"><FacebookIcon/></a> <a href="https://twitter.com/RahulGu95108304"><TwitterIcon/></a> <a href="https://github.com/klrahul123"><GitHubIcon/> </a> </p>

       </div>
   );
}
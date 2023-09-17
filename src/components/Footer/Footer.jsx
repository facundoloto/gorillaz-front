import { CFooter, CLink } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css'
//import '@coreui/coreui/dist/css/coreui.min.css'
import "nes.css/css/nes.min.css";
import './Footer.css';

export function Footer() {
  return (
    <div className="nes-container is-centered ">
      <div className="footer">
        <CFooter className='contain-footer'>
          <div>
            <span>Facundo Loto</span>
          </div>
          <div>
            <CLink href="https://github.com/facundoloto">GitHub</CLink>
          </div>
          <div>
            <CLink href="https://www.linkedin.com/in/facundo-emanuel-loto-496384177/">Linkedin</CLink>
          </div>
        </CFooter>
      </div>
    </div>
  );
};
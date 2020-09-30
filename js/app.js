import { closeSidebar, openEverything } from './closeFunctionality/index.js';

(function app() {
  const sidebar = new Sidebar();
  sidebar.setContent([
    {
      name: 'ENGAGE',
      active: true,
      content: `<iframe src="https://app.meet.ps/attendee/templatetest" width="400" height="600" style="border:none;"></iframe>`,
    },
    {
      name: 'AGENDA',
      active: false,
      content: `<div class="agenda">
      <div class="date">
        Thursday, July 30, 2020
      </div>
      <div class="agenda-box">
        <div class="time-slot">
          <i class="far fa-clock"></i> 10:05am - 10:50am
        </div>
        <div class="agenda-information">
          <div class="title">
            The Science of COVID
          </div>
          <div class="subheading">
            Epidemiology, Transmission and Testing
          </div>
          <div class="moderators">
            <p class="moderators_title">MODERATORS</p>
            <p class="moderators_description">Arnold Donald, Gloria Guevara</p>
          </div>
          <div class="speakers">
            <p class="speakers_title">SPEAKERS</p>
            <p class="speakers_description">Dr. Steven Gordon, Dr. William Morice, Dr. Schultz-Cherry, Dr. Joshua Wolf</p>
          </div>
        </div>
      </div>

      <div class="agenda-box">
        <div class="time-slot">
          <i class="far fa-clock"></i> 11:00am - 11:50am
        </div>
        <div class="agenda-information">
          <div class="title">
            Treatment & Prevention of COVID
          </div>
          <div class="subheading">
            Prevention, Treatment and Cures
          </div>
          <div class="moderators">
            <p class="moderators_title">MODERATORS</p>
            <p class="moderators_description">Arnold Donald, Gloria Guevara</p>
          </div>
          <div class="speakers">
            <p class="speakers_title">SPEAKERS</p>
            <p class="speakers_description">Dr. Julio Frenk, Dr. Adolfo Garcia-Sastre, Dr. Jewel Mullen, Dr. Vivek Murthy</p>
          </div>
        </div>
      </div>
    </div>`,
    },
    {
      name: 'SPEAKERS',
      active: false,
      content: `<div class="speaker-card">
    <div class="speaker-info">
      <img src="https://images.marinelink.com/images/maritime/arnold-donald-photo-carnival-112132.jpeg" alt="Donald Arnold">
      <div class="name">Arnold Donald</div>
      <div class="title">
        President & Chief Executive Officer
      </div>
      <div class="organization">
        Carnival Corporation & PLC
      </div>
    </div>
    <div class="speaker-description">
      Arnold Donald is President  Chief Executive Officer of Carnival Corporation & PLC, the world's largest travel and leisure company.
      
      Their nine cruise brands -- Carnival Cruise Line, Holland America, Princess, Seabourn, AIDA, Costa Cunard, P&O UK, and P&O Australia are based throughout North America, Europe, Australia and Asia.
     
    </div>
  </div>
  
  <div class="speaker-card">
  <div class="speaker-info">
    <img src="https://www.phocuswrightconference.com/remote.jpg.ashx?width=350&height=350&scale=both&mode=crop&urlb64=aHR0cDovL3Bob2N1c3dyaWdodC5ibG9iLmNvcmUud2luZG93cy5uZXQvcGN3L1VTLVNwZWFrZXJQaG90b3MvcGMxNy1ndWV2YXJhLWcuanBn&hmac=5tjbTBTuWDk&src=http://phocuswright.blob.core.windows.net/pcw/US-SpeakerPhotos/pc17-guevara-g.jpg" alt="Donald Arnold">
    <div class="name">Gloria Guevara</div>
    <div class="title">
      President & CEO
    </div>
    <div class="organization">
      World Travel & Tourism Council
    </div>
  </div>
  <div class="speaker-description">
    Gloria joined WTTC in August 2017, 
    following a varied career in Travel & Tourism. Recognised as one of the most influential women in Mexico by CNN and Expansion, Gloria began her professional career in 1989 at NCR Corporation working in the Latin America, Middle East, and Africa regions. Since 1995 she has worked for the travel industry, starting at the Sabre Travel Network and Sabre Holdings, she was later CEO of JV Sabre Mexico reporting to a board of directors from AeroMexico
   
  </div>
</div>`,
    },
    {
      name: 'NETWORK',
      active: false,
      content: `<div class="date" style="text-align: center">Breakout Room #1</div>
      
      <div class="time-slot" style="margin: 20px 0; text-align: center">
          <i class="far fa-clock"></i> 12:30pm - 1:15pm
        </div>
        <div style="width: 100%; margin-bottom: 50px;">
          <button class="breakout-button" style="text-align: center; display: block; margin: 0 auto">Attend Room</button>
       </div>

       <hr class="style-two">
       <div class="date" style="text-align: center; margin-top: 50px">Breakout Room #2</div>
      
      <div class="time-slot" style="margin: 20px 0; text-align: center">
          <i class="far fa-clock"></i> 1:30pm - 2:15pm
        </div>
        <div style="width: 100%; margin-bottom: 50px;">
          <button class="breakout-button" style="text-align: center; display: block; margin: 0 auto">Attend Room</button>
       </div>

       <hr class="style-two">

       
       <div class="date" style="text-align: center; margin-top: 50px">Breakout Room #3</div>
      
      <div class="time-slot" style="margin: 20px 0; text-align: center">
          <i class="far fa-clock"></i> 3:00pm - 4:00pm
        </div>
        <div style="width: 100%; margin-bottom: 50px;">
          <button class="breakout-button" style="text-align: center; display: block; margin: 0 auto">Attend Room</button>
       </div>

       <hr class="style-two">
      `,
    },
  ]);

  const sidebarElement = sidebar.getSidebar();

  document.body.querySelector('.video-app').append(sidebarElement);
  sidebar.onClose(closeSidebar);

  function setUpListeners() {
    document.body.addEventListener('click', (event) => {
      const clickedButton = event.target;

      if (clickedButton.closest('.open-container')) {
        sidebar.openSidebar();
        openEverything();
      }
    });
  }
  setUpListeners();
})();

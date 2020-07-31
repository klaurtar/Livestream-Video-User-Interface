(function app() {
  const sidebar = new Sidebar();
  sidebar.setContent([
    {
      name: 'AGENDA',
      active: true,
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
  ]);
  const sidebarElement = sidebar.getSidebar();

  document.body.querySelector('.video-app').append(sidebarElement);
})();


jQuery(document).ready(function () {

    // Room Types
    var roomTypes = [
      {
        img: 'images/scholarship-room.jpg',
        title: 'The Scholarship Room',
        desc: 'The Scholar Ship Room is one of our most popular spaces, with two-story ceilings an a panoramic view of the Salt Lake Valley.',
        stats: ['5400 Sq ft', '24’ Ceiling', '900 Reception Guests', '500 Classroom / Theater Guests', '350 Rounds Table']
      },
      {
        img: 'images/mezzaine-room.jpg',
        title: 'The Mezzanine Room',
        desc: 'The Mezzanine Room is the perfect space to host a smaller events or an overflow area from the larger Scholarship room.',
        stats: ['10 Round Tables', '100 Reception Guests']
      },
      {
        img: 'images/varsity-room.jpg',
        title: 'The Varsity Room',
        desc: 'The Varsity Room features one-story ceilings and an all-glass wall to the west, where sunsets over The Great Salt Lake wow our guests nightly.',
        stats: ['5400 Sq ft', '9’ Ceiling', '900 Reception Guests', '500 Classroom / Theater Guests', '350 Rounds Table']
      },
      {
        img: 'images/stadium-bowl.jpg',
        title: 'Stadium Bowl & Concourse',
        desc: 'Our stadium is a great venue to host your next concert, large event, or even the next Winter Olymics. Our large capacity will sure wow your guests.',
        stats: ['Bowl + Field Capacity: 52,000', 'Bowl Capacity: 45,017', 'Field Seated Guests: 7,000']
      },
      {
        img: 'images/conference-room.jpg',
        title: 'Conference & Marketing Rooms',
        desc: 'Our conference rooms are great for smaller events. Each room can be staged with AV services, and fully stocked with drinks and snacks.',
        stats: ['2 Large Conference Rooms', 'Smaller Business Suites', 'Wifi and Tech Services Available']
      },
    ]
    var $roomCards = $('.room-cards');
  
    // Iterate over Rooms 
    jQuery.map( roomTypes, function( element, index ) {
  
      var roomImg = element.img;
      var roomTitle = element.title;
      var roomDesc = element.desc;
      var roomStats = element.stats;
      var roomStatsFinalArray = [];
  
      // Build Stats List Items
      jQuery.map(roomStats, function( element, index ) {
        roomStatsFinalArray.push(`
          <li>`+ element +`</li>
        `);
      });
  
      // Build Room Cards
      $roomCards.append(`
      <div class="room-card bg-white">
          <div class="room-card-header-img" style="background-image:url('`+ roomImg +`'); background-position: center center;"></div>
          <div class="room-card-body">
              <div class="room-card-title">`+ roomTitle +`</div>
              <p>`+ roomDesc +`</p>
              <ul class="room-card-stats">
              `+ roomStatsFinalArray.join('') +`
              </ul>
          </div>
          <div class="room-card-cta">
              <a class="btn small white bg-red" href="rooms.html">EXPLORE MORE</a>
          </div>
      </div>
      `);
    });
      
  });
   

// Owl Carousel Slider
if(jQuery('.owl-carousel').length){
    jQuery('.owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin:10,
        navText : ["",""],
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
        
    })
}

// Modal Popup
jQuery(document).ready(function(){
    jQuery('.open').click(function(){
        jQuery('.modal-overlay, .modal-content').addClass('active');
    });
    jQuery('.close, .modal-overlay').click(function(){
        jQuery('.modal-overlay, .modal-content').removeClass('active');
    })
});

$(function(){

  galleries = [
    {
          "galleryName": "Angell Gallery",
          "galleryWebsite": "http://www.angellgallery.com/",
          "neighbourhood": "Dupont West",
          "galleryType": "Commercial",
          "food": "Sometimes cheese and meat platters. Often no food.",
          "alcohol": "Average 5 dollar beer/ wine, depending on the opening, sometimes free. ",
          "stingeMeter": "Average",
          "satisfaction": "2"
        },
        {
          "galleryName": "Christopher Cutts",
          "galleryWebsite": "http://www.cuttsgallery.com/",
          "neighbourhood": "Bloordale",
          "galleryType": "Commercial",
          "food": "Avergage selelction of meat and cheese plates, sometimes no food.",
          "alcohol": "Free drinks!",
          "stingeMeter": "Average",
          "satisfaction": "3"
        },
        {
          "galleryName": "MOCCA",
          "galleryWebsite": "http://mocca.ca/",
          "neighbourhood": "Dupont West",
          "galleryType": "Public",
          "food": "TBA",
          "alcohol": "TBA",
          "stingeMeter": "TBA",
          "satisfaction": "0"
        },
        {
          "galleryName": "Onsite at OCADU",
          "galleryWebsite": "http://www.ocadu.ca/gallery/onsite",
          "neighbourhood": "Kensington/Chinatown",
          "galleryType": "Public",
          "food": "Very good selection of cheese and meats, variety of other foods.",
          "alcohol": "Cheap beer/wine selection.",
          "stingeMeter": "Good",
          "satisfaction": "5"
        },
        {
          "galleryName": "Project Gallery",
          "galleryWebsite": "http://projectgallerytoronto.com/",
          "neighbourhood": "East End",
          "galleryType": "DIY",
          "food": "Various cheeses, fruits and veggie platters /dependant on opening.",
          "alcohol": "Average prices, depandant on the opening varies.  ",
          "stingeMeter": "Generous",
          "satisfaction": "3"
        },
        {
          "galleryName": "Textile Museum of Canada",
          "galleryWebsite": "http://www.textilemuseum.ca/home",
          "neighbourhood": "Central",
          "galleryType": "Public",
          "food": "Various cheeses, fruits and veggie platters /dependant on opening.",
          "alcohol": "Free drinks!",
          "stingeMeter": "Good",
          "satisfaction": "5"
        },
        {
          "galleryName": "YYZ artist Outlet",
          "galleryWebsite": "http://www.yyzartistsoutlet.org/",
          "neighbourhood": "401 Richmond",
          "galleryType": "Artist Run Center",
          "food": "Average cheese plates, not meant to feed the hungry.",
          "alcohol": "Free drinks!",
          "stingeMeter": "Average",
          "satisfaction": "3"
        },
        {
          "galleryName": "Cooper Cole",
          "galleryWebsite": "http://coopercolegallery.com/exhibitions",
          "neighbourhood": "Dupont West",
          "galleryType": "Commercial",
          "food": "No food.",
          "alcohol": "Cheap to Free drinks!",
          "stingeMeter": "Average",
          "satisfaction": "2"
        },
        {
          "galleryName": "Gladstone exhibition spaces",
          "galleryWebsite": "http://www.gladstonehotel.com/",
          "neighbourhood": "Queen West",
          "galleryType": "Commercial",
          "food": "Very little to no food.",
          "alcohol": "Extremely expensive drinks selection.",
          "stingeMeter": "Extremely Stingly",
          "satisfaction": "1"
        },
        {
          "galleryName": "Drake Hotel Exhibition Spaces",
          "galleryWebsite": "http://www.thedrakehotel.ca/",
          "neighbourhood": "Queen West",
          "galleryType": "Commercial",
          "food": "Very little to no food.",
          "alcohol": "Extremely expensive drinks selection.",
          "stingeMeter": "Extremely Stingly",
          "satisfaction": "1"
        },
        {
          "galleryName": "Gallery TPW",
          "galleryWebsite": "http://gallerytpw.ca/",
          "neighbourhood": "Bloordale",
          "galleryType": "Artist Run Center",
          "food": "Very good selection of cheese, fruits and meats, variety of other foods.",
          "alcohol": "Very cheap to free drinks!",
          "stingeMeter": "Generous",
          "satisfaction": "4"
        },
        {
          "galleryName": "Clint Roenisch",
          "galleryWebsite": "http://clintroenisch.com/",
          "neighbourhood": "Bloordale",
          "galleryType": "Commercial",
          "food": "A great selection and generous portions of expensive cheeses, cold cuts, and fruits amazing selection of jams, and various other kinds of food dependant on the opening.",
          "alcohol": " $4 / beer or wine, dependant on the opening sometimes free. ",
          "stingeMeter": "Good",
          "satisfaction": "4"
        },
        {
          "galleryName": "Katzman Contemporary",
          "galleryWebsite": "http://www.katzmancontemporary.com/",
          "neighbourhood": "Dupont West",
          "galleryType": "Commercial",
          "food": "A selection of chips, nuts and various other snacks, very dependant on the opening.",
          "alcohol": "Beer and wine by donation.",
          "stingeMeter": "Average",
          "satisfaction": "4"
        },
        {
          "galleryName": "Xpace Cultural Center",
          "galleryWebsite": "http://www.xpace.info/",
          "neighbourhood": "Bloordale",
          "galleryType": "Public",
          "food": "A great selection of samosas, sometimes other random snacks. Well stocked.",
          "alcohol": "cheap selection of good craft beer and some wine.",
          "stingeMeter": "Generous",
          "satisfaction": "4"
        },
        {
          "galleryName": "MKG 127",
          "galleryWebsite": "http://www.mkg127.com/",
          "neighbourhood": "Dundas West",
          "galleryType": "Commercial",
          "food": "Very rarely any food.",
          "alcohol": "Sometimes free drinks, othertimes $5 beer and wine.",
          "stingeMeter": "Stingy",
          "satisfaction": "2"
        },
        {
          "galleryName": "Videofag",
          "galleryWebsite": "https://www.facebook.com/Videofag",
          "neighbourhood": "Kensington/Chinatown",
          "galleryType": "DIY",
          "food": "Dependant on exhibition.",
          "alcohol": "Dependant on the exhibition, $5 beer and wine selection.",
          "stingeMeter": "Generous",
          "satisfaction": "1"
        },
        {
          "galleryName": "G Gallery",
          "galleryWebsite": "http://ggalleryprojects.ca/",
          "neighbourhood": "Queen West",
          "galleryType": "Public",
          "food": "Dependant on exhibition, a selection of random and mismatched snacks. Never filling.",
          "alcohol": "$5 beer/ wine selecton.",
          "stingeMeter": "Average",
          "satisfaction": "1"
        },
        {
          "galleryName": "Art Metropole",
          "galleryWebsite": "http://artmetropole.com/",
          "neighbourhood": "Dundas West",
          "galleryType": "Artist Run Center",
          "food": "Usually a good chips selection.",
          "alcohol": "Cheap to free drinks!",
          "stingeMeter": "Generous",
          "satisfaction": "4"
        },
        {
          "galleryName": "Trinity Square Video",
          "galleryWebsite": "http://www.trinitysquarevideo.com/",
          "neighbourhood": "401 Richmond",
          "galleryType": "Artist Run Center",
          "food": "A great selection of samosas, cheeses, fruits, cured meats and sometimes sushi. Well stocked!",
          "alcohol": "Cheap to free drinks!",
          "stingeMeter": "Generous",
          "satisfaction": "5"
        },
        {
          "galleryName": "Scrap Metal Gallery",
          "galleryWebsite": "http://www.scrapmetalgallery.com/",
          "neighbourhood": "Bloordale",
          "galleryType": "Commercial",
          "food": "A good selection of meats and cheeses, usually higher end selection of snacks.",
          "alcohol": "Cheap to free drinks!",
          "stingeMeter": "Good",
          "satisfaction": "4"
        },
        {
          "galleryName": "Daniel Faria",
          "galleryWebsite": "http://danielfariagallery.com/",
          "neighbourhood": "Bloordale",
          "galleryType": "Commercial",
          "food": "Very rarely any food.",
          "alcohol": "Sometimes free/ sometimes 5 dollar beer. Served by very handsome men generally.",
          "stingeMeter": "Stingy",
          "satisfaction": "2"
        },
        {
          "galleryName": "Whippersnapper Gallery",
          "galleryWebsite": "http://www.whippersnapper.ca/",
          "neighbourhood": "Kensington/Chinatown",
          "galleryType": "Artist Run Center",
          "food": "Usually a selection of cheap fruits, some chips and varying snacks, dependant on the opening.",
          "alcohol": "Sometimes free (specially if your friends with the artist/gallery workers) otherwise by donation.",
          "stingeMeter": "Generous",
          "satisfaction": "3"
        },
        {
          "galleryName": "MULHERIN / NO FOUNDATION",
          "galleryWebsite": "http://www.katharinemulherin.com/",
          "neighbourhood": "Queen West",
          "galleryType": "Commercial",
          "food": "No food.",
          "alcohol": "$4-5 selection of drinks, dependant on the opening.",
          "stingeMeter": "Average",
          "satisfaction": "2"
        },
        {
          "galleryName": "Erin Stump Projects",
          "galleryWebsite": "http://erinstumpprojects.com/",
          "neighbourhood": "Dupont West",
          "galleryType": "Commercial",
          "food": "No food.",
          "alcohol": "Free Drinks!",
          "stingeMeter": "Good",
          "satisfaction": "3"
        },
        {
          "galleryName": "8-11",
          "galleryWebsite": "http://8eleven.org/",
          "neighbourhood": "Kensington/Chinatown",
          "galleryType": "DIY",
          "food": "Unlimited Chips with membership/if you dont have a membership no one will judge you.",
          "alcohol": "Selection of good beers/depending on the opening other drinks, usually average priced",
          "stingeMeter": "Generous",
          "satisfaction": "2"
        },
        {
          "galleryName": "AGO - First Thursdays, and other events",
          "galleryWebsite": "http://www.ago.net/",
          "neighbourhood": "Kensington/Chinatown",
          "galleryType": "Public",
          "food": "Food not free.",
          "alcohol": "Extremely expensive drinks selection.",
          "stingeMeter": "Extremely Stingly",
          "satisfaction": "1"
        },
        {
          "galleryName": "PowerPlant - General/VIP Receptions",
          "galleryWebsite": "http://www.thepowerplant.org/",
          "neighbourhood": "Central",
          "galleryType": "Public",
          "food": "Usually a good selection of food for receptions, dependant on the opening varies. ",
          "alcohol": "Average priced drinks.",
          "stingeMeter": "Good",
          "satisfaction": "4"
        },
        {
          "galleryName": "Susan Hobbs",
          "galleryWebsite": "http://www.susanhobbs.com/",
          "neighbourhood": "Tecumseth",
          "galleryType": "Commercial",
          "food": "No Food",
          "alcohol": "$5 selection of beers and wine.",
          "stingeMeter": "Stingy",
          "satisfaction": "1"
        },
        {
          "galleryName": "Prefix Photo",
          "galleryWebsite": "http://www.prefix.ca/",
          "neighbourhood": "401 Richmond",
          "galleryType": "Commercial",
          "food": "There is a good selection of sushi at their openings!",
          "alcohol": "Drinks are pay what you can",
          "stingeMeter": "Good",
          "satisfaction": "4"
        },
        {
          "galleryName": "Division Gallery",
          "galleryWebsite": "http://www.galeriedivision.com/toronto/exhibitions?language=en",
          "neighbourhood": "Dupont West",
          "galleryType": "Commercial",
          "food": "No Food",
          "alcohol": "Free Drinks!",
          "stingeMeter": "Good",
          "satisfaction": "3"
        },
        {
          "galleryName": "OCAD Student Gallery",
          "galleryWebsite": "http://studentgallery.ocad.ca/",
          "neighbourhood": "Kensington/Chinatown",
          "galleryType": "Public",
          "food": "A great selection of chips, cheese plates, cured meats, various dips. Overall excellent choices specially if you arrive early.",
          "alcohol": "$3 Beer/wine selection.",
          "stingeMeter": "Good",
          "satisfaction": "5"
        },
        {
          "galleryName": "Mercer Union",
          "galleryWebsite": "http://www.mercerunion.org/",
          "neighbourhood": "Bloordale",
          "galleryType": "Artist Run Center",
          "food": "Usually a selection samosas, sometimes crackers. not well stocked, arrive early.",
          "alcohol": "$4-5 selection of cheap beers/wines.",
          "stingeMeter": "Good",
          "satisfaction": "3"
        },
        {
          "galleryName": "Open Studio",
          "galleryWebsite": "http://www.openstudio.on.ca/",
          "neighbourhood": "401 Richmond",
          "galleryType": "Artist Run Center",
          "food": "Average cheese and fruits plates, not meant to feed the hungry.",
          "alcohol": "$4-5 selection of cheap beers/wines.",
          "stingeMeter": "Average",
          "satisfaction": "2"
        },
        {
          "galleryName": "A Space",
          "galleryWebsite": "http://www.aspacegallery.org/",
          "neighbourhood": "401 Richmond",
          "galleryType": "Artist Run Center",
          "food": "Average cheese and fruits plates, not meant to feed the hungry.",
          "alcohol": "$4-5 selection of cheap beers/wines.",
          "stingeMeter": "Average",
          "satisfaction": "2"
        },
        {
          "galleryName": "InterAccess",
          "galleryWebsite": "http://www.interaccess.org/",
          "neighbourhood": "Queen West",
          "galleryType": "Artist Run Center",
          "food": "A great selecton of food plates, cheeses, dips, sushi.",
          "alcohol": "Reasonably priced beer and wine.",
          "stingeMeter": "Generous",
          "satisfaction": "4"
        },
        {
          "galleryName": "Younger than Beyonce Gallery",
          "galleryWebsite": "http://www.ytbgallery.com/",
          "neighbourhood": "East End",
          "galleryType": "DIY",
          "food": "Often catered, plus fruits & veggies, candy, chips plates.",
          "alcohol": "$6 Craft beer & $8 wine.",
          "stingeMeter": "Generous",
          "satisfaction": "3"
        },
        {
          "galleryName": "Whitespace Studio Projects",
          "galleryWebsite": "https://www.facebook.com/theotherwhitehouse/?fref=ts",
          "neighbourhood": "Kensington/Chinatown",
          "galleryType": "DIY",
          "food": "Usually some sort of snack.",
          "alcohol": "$4 Beer usually.",
          "stingeMeter": "Generous",
          "satisfaction": "2"
        },
        {
          "galleryName": "Paul Petro Gallery",
          "galleryWebsite": "http://www.paulpetro.com/",
          "neighbourhood": "Queen West",
          "galleryType": "Commercial",
          "food": "A selection of snacks, sometimes samosas.",
          "alcohol": "Cheap or Free drinks!",
          "stingeMeter": "Good",
          "satisfaction": "3"
        },
        {
          "galleryName": "Birch Contemporary",
          "galleryWebsite": "http://birchcontemporary.com",
          "neighbourhood": "Tecumseth",
          "galleryType": "Commercial",
          "food": "Usually a great selection of Sushi! or otherwise amazing expensive food.",
          "alcohol": "Cheap or Free drinks!",
          "stingeMeter": "Good",
          "satisfaction": "5"
        },
        {
          "galleryName": "Diaz Contemporary",
          "galleryWebsite": "http://www.diazcontemporary.com",
          "neighbourhood": "Tecumseth",
          "galleryType": "Commercial",
          "food": "No Food.",
          "alcohol": "Free wine and beer flows liberally.",
          "stingeMeter": "Average",
          "satisfaction": "3"
        },
        {
          "galleryName": "Pari nadimi",
          "galleryWebsite": "http://parinadimigallery.com/Site/index.php",
          "neighbourhood": "Tecumseth",
          "galleryType": "Commercial",
          "food": "Some crackers.",
          "alcohol": "Cheap wine, usually runs out quick.",
          "stingeMeter": "Stingy",
          "satisfaction": "1"
        },
        {
          "galleryName": "Neubacher Shor",
          "galleryWebsite": "http://www.neubachersor.com",
          "neighbourhood": "Dupont West",
          "galleryType": "Commercial",
          "food": "No Food.",
          "alcohol": "Free drinks!",
          "stingeMeter": "Average",
          "satisfaction": "3"
        },
        {
          "galleryName": "Le gallery",
          "galleryWebsite": "http://www.le-gallery.ca",
          "neighbourhood": "Dundas West",
          "galleryType": "Commercial",
          "food": "No Food.",
          "alcohol": "Free drinks!",
          "stingeMeter": "Generous",
          "satisfaction": "3"
        },
        {
          "galleryName": "Art Gallery of York University",
          "galleryWebsite": "http://theagyuisoutthere.org/everywhere/",
          "neighbourhood": "York",
          "galleryType": "Public",
          "food": "A selection of fruits, crackers and cheese, including a giant wheel of brie.",
          "alcohol": "Free Wine.",
          "stingeMeter": "Average",
          "satisfaction": "3"
        }
    ];

// SEARCH - neighbourhood + gallery type search

  var isthistrue = false;
  // on clicking submit, do this:
  $('form.advancedSearch').on('submit', function(event){
    $('div.container').empty();
    event.preventDefault();

    // shows Search Results title
    $('#search-title').removeClass('hide');

    // smooth scroll
    $('html, body').animate ({
        scrollTop: $("#search-title").offset().top
    })

    // grabs the value of the neighbourhood from the form
    var location = $('select').val();
    // console.log(location);

    // returns all Types of galleries that are checked on the checkbox
    var userSelection;
    var userSelectionArray = []
    //empty variable that equals an array for later to be filled with gallery type
    $('input:checked').each(function() {
      //for each checkbox thats checked it runs through each checked item.
      userSelection = $(this).val();
      //then userSelection is input by the value of whats checked by user
      userSelectionArray.push(userSelection);
    });
    //the push will add the user selection checked by user into the array
    console.log(userSelectionArray);

    // compares neighbourhood value to all of gallery neighbourhood values
    for (var i = 0; i < galleries.length; i++) {
      //for loop to go through all of the galleries.
      if (galleries[i].neighbourhood === location) {
        //this if shows if gallery equals the neighbourhood selected
        for(var j = 0; j < userSelectionArray.length; j++) {
          //for loop shows the value of j being smaller than the empty array but its filling it with the user selection for type of gallery as long as its smaller than the user selection. 
          if(userSelectionArray[j] === galleries[i].galleryType) {
            //so when the array with gallery type equals the the gallery indexed then show in bellow div 
            console.log('inside append')
            
            var stars = [];
              for (m = 0; m < galleries[i].satisfaction; m++) {
                  stars.push('<i class="fa fa-star"></i>');
              }
              stars = stars.join(" ");
              console.log(stars);

            $('div.container')
              .append('<div class="results"><h4>' + galleries[i].galleryName + '</h4><p class="gallery-tag">' + galleries[i].neighbourhood + '</p><p class="gallery-tag">' + galleries[i].galleryType + '</p><div class="results-food"><i class="fa fa-cutlery"></i><p class="gallery-subtitle">Food</p><p>' + galleries[i].food + '</p></div><div class="results-drink"><i class="fa fa-glass"></i><p class="gallery-subtitle">Drinks</p><p>' + galleries[i].alcohol + '</p></div><p class="gallery-subtitle">Overall Thirst/Hunger Satisfaction</p><p>' + stars + '</p><p class="gallery-subtitle">Stinge-Meter*</p><p class="stinge-resource">*Based on overall resources</p><p>' + galleries[i].stingeMeter + '</p><a href="' + galleries[i].galleryWebsite + '" target="blank""><i class="fa fa-link"></i> Visit Website</a></div>');
            isthistrue = true;
            
          } else if (isthistrue == false) {
            $('div.results').html('<p> No results recorded. </p>');
          };
          console.log(galleries[i].galleryType + ' ' + userSelectionArray[j])
        }
      }
    }; 
   }); // end of neighbourhood search

  

// SEARCH - autocomplete
  
  // collects all the gallery names to add to the autocomplete list
  var autoc = []; 
  //just an empty array that will later be used to push gallery name into to store date
  for (var x = 0; x < galleries.length; x++) {
  //when starting at gallery 0 and going to the length of the gallery list, and adding one to each recorded gallery name in the array till the end
    autoc.push(galleries[x].galleryName);
  // push out the value of gallery list [galleryname]
  };

  var availableTags = autoc;
  //so we've defined availableTags as the autoc that we've made values for above.
      $( "#searchfield" ).autocomplete({
        source: availableTags
        // position: {my : 'right+10 top', at : 'right+20 bottom'}
      });

galleries.satisfaction = parseInt(galleries.satisfaction);
console.log(galleries[18].satisfaction);



  $('form.search').on('submit', function(event){
    // $('div.results').empty();
    event.preventDefault();

    // adds Search Results title
    $('#search-title').removeClass('hide');
    var searchstring = $('#searchfield');

    // smooth scroll
    $('html, body').animate ({
        scrollTop: $("#search-title").offset().top
    })

    for (i = 0; i < galleries.length; i++) {

      // console.log(galleries[i].satisfaction);
      
      
      if (searchstring.val() == galleries[i].galleryName) {
        
      
        var stars = [];
          for (m = 0; m < galleries[i].satisfaction; m++) {
              stars.push('<i class="fa fa-star"></i>');
          }
          stars = stars.join(" ");
          console.log(stars);

        $('div.container').html('<div class="results"><h4>' + galleries[i].galleryName + '</h4><p class="gallery-tag">' + galleries[i].neighbourhood + '</p><p class="gallery-tag">' + galleries[i].galleryType + '</p><div class="results-food"><i class="fa fa-cutlery"></i><p class="gallery-subtitle">Food</p><p>' + galleries[i].food + '</p></div><div class="results-drink"><i class="fa fa-glass"></i><p class="gallery-subtitle">Drinks</p><p>' + galleries[i].alcohol + '</p></div><p class="gallery-subtitle">Overall Thirst/Hunger Satisfaction</p><p>' + stars + '</p><p class="gallery-subtitle">Stinge-Meter*</p><p class="stinge-resource">*Based on overall resources</p><p>' + galleries[i].stingeMeter + '</p><a href="' + galleries[i].galleryWebsite + '" target="blank""><i class="fa fa-link"></i> Visit Website</a></div>');



          // var userSelection;
          // var userSelectionArray = []
          // //empty variable that equals an array for later to be filled with gallery type
          // $('input:checked').each(function() {
          //   //for each checkbox thats checked it runs through each checked item.
          //   userSelection = $(this).val();
          //   //then userSelection is input by the value of whats checked by user
          //   userSelectionArray.push(userSelection);
          // });

      }


      // else {
      //   $('div.results').html('<p> There are no galleries with that name listed </p>');
      // };
    };
  }); 
 //convert string of stars into a number galleries[i].satisfaction
 //  write a for loop that that assigns every number a star, upto no more than the value of gallery satisfaction

 // var galleries[i].satisfaction = parseInt(galleries[i].satisfaction);
 // console.log(galleries[i].satisfaction) 



}); // end of document ready
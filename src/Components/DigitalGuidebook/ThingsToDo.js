import LocalSeeIcon from '@mui/icons-material/LocalSee';
import DownhillSkiingRoundedIcon from '@mui/icons-material/DownhillSkiingRounded';
import ParkRoundedIcon from '@mui/icons-material/ParkRounded';
import BigBoulderPic from '../../photos/attractions/bigboulder.jpg'
import HawkFallsPic from '../../photos/attractions/hawkfalls.jpg'
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import ToDoCategory from './ToDoCategory';
import '../../style/ThingsToDo.css';
import HunanHousePic  from '../../photos/restaurat/Chinese.jpg';
import Paintball from '../../photos/attractions/paintball.jpg'
import IndoorWaterPark from '../../photos/attractions/indoorwater.jpg'
import PoolRoundedIcon from '@mui/icons-material/PoolRounded';
import GorillaPic from '../../photos/attractions/gorilla.jpg';
import DirectionsRunRoundedIcon from '@mui/icons-material/DirectionsRunRounded';

function ThingsToDo() {

  const attractions = [
    {
      image: BigBoulderPic,
      name: 'Big Boulder Ski Resort',
      rating: 4.8,
      distance: 4.2,
      category: 'ski',
      description: 'Two Resorts. Mountains of Memories...Come join us and take your Poconos experience to the next level! Check out our hours of operations below to get the most from your visit.',
      typeIcon: <DownhillSkiingRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image: HawkFallsPic,
      name: 'Hawk Falls',
      rating: 4,
      distance: 10,
      category: 'parks',
      description: "Hawk Falls is a 25-foot tall waterfall along Hawk Run in the southeastern corner of the park. The waterfall is actually located fairly close to Interstate 476 (you can even see a large bridge from the top of the falls), but it’s fortunately far enough away that the sound of traffic doesn’t impair the serenity of the area.",
      typeIcon: <ParkRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image:Paintball,
      name: "Skirmish Paintball",
      rating: 4.8,
      distance: 3.5,
      category: 'adventure',
      description: 'Skirmish Paintball is home to over 50 of the best paintball maps on the planet. It spans 750 acres of prime Pocono Mountain real estate.Our paintball maps contain everything you could possibly want in field topography. We have open fields, dense woods, creeks, bridges, swamps, rhododendron trees, forts, villages, TWO CASTLES, cargo containers, tanks, airplanes, speedball arenas, as well as inflatable bunkers. You name it – Skirmish has it!',
      typeIcon: <DirectionsRunRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image:IndoorWaterPark,
      name: "Kalahari Indoor/Outdoor Waterparks",
      rating: 4.8,
      distance: 22.8,
      category: 'waterpark',
      description: 'The largest Indoor Water park in the country. With 220,000 sq ft, filled with Wet. Wild. Fun. What are you waiting for? Come splash around where it\'s always 84 and sunny!',
      typeIcon: <PoolRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image:GorillaPic,
      name: "Gorilla Grove Treetop Adventures",
      rating: 4.8,
      distance: 22.8,
      category: 'adventure',
      description: 'Gorilla Grove Treetop Adventures is a park that offers fun and exciting activities for all ages. You can play mini golf, laser tag, zip line, and rope course in a jungle-themed setting. Whether you want to challenge yourself, have a family outing, or enjoy a date night, Gorilla Grove Treetop Adventures is the place to go!',
      typeIcon: <DirectionsRunRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image:GorillaPic,
      name: "Gorilla Grove Treetop Adventures",
      rating: 4.8,
      distance: 20.1,
      category: 'adventure',
      description: 'This is an indoor water park that is part of the Split Rock Resort. It has three four-story slides, a wave pool, an activity pool, and a FlowRider surfing attraction',
      typeIcon: <PoolRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    }



  ]
  
  const restaurants = [
    {
      image: HunanHousePic,
      name: 'Mommy Sorry',
      rating: 4.8,
      distance: 4.2,
      description: 'Two Resorts. Mountains of Memories...Come join us and take your Poconos experience to the next level! Check out our hours of operations below to get the most from your visit.',
      typeIcon: <RestaurantRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    }
  ]

  // Historic Jim Thorpe 
  // Jack Frost 
  // Split Rock Waterpark
  // Lake Harmony
  // Big Boulder Lake
  // Pocono Raceway
  // 
  // Bear Mountain Butterfly Sanctuary
  // Hickory Run State Park
  // Fishing allowed with PA Fishing License (catch and release rule in effect).
  // Sleigh Rides at Daisy Field Farms
  // Mount Airy Casino
  // Split Rock Golf Course
  // Split Rock water park
  // Kalahari Resort - America's Largest Indoor Waterpark
  // Poconos Outdoor Adventure
  
 
  
  // Blue Mountain
  // Camelback


  // Barley Creek Brewing Comp
   // Blue Ridge Vineyard
   // Mountain View Winery
   // Pocono Wine Trail


    // The Crossing Premium Outlets
  


  const categories = [

    {
     icon: LocalSeeIcon ,
      title: 'Attractions',
      items: attractions
    },
    {
      icon: RestaurantRoundedIcon,
      title: 'Restaurants & Bars',
      items: restaurants
    },
    {
      icon: LocalGroceryStoreRoundedIcon,
      title: 'Stores',
      items: attractions
    }
  ]

  return (
    <>
      {categories.map((category) => (
        <ToDoCategory key={category.title} {...category} />
      ))}
    </>
  );
}

export default ThingsToDo;
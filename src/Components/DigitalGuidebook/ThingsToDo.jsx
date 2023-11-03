import React from 'react';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import DownhillSkiingRoundedIcon from '@mui/icons-material/DownhillSkiingRounded';
import ParkRoundedIcon from '@mui/icons-material/ParkRounded';
import BigBoulderPic from '../../photos/attractions/Big Boulder (web).jpg'
import HawkFallsPic from '../../photos/attractions/Hawk-Falls-PA (web).jpg'
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import ToDoCategory from './ToDoCategory';
import '../../style/ThingsToDo.css';
import HunanHousePic  from '../../photos/restaurat/Chinese.jpg';
import Paintball from '../../photos/attractions/paintball (web).jpg'
import IndoorWaterPark from '../../photos/attractions/indoorwater (web).jpg'
import PoolRoundedIcon from '@mui/icons-material/PoolRounded';
import GorillaPic from '../../photos/attractions/gorilla (web).jpg';
import WWRafting from '../../photos/attractions/poconowhitewater (web).jpg';
import DirectionsRunRoundedIcon from '@mui/icons-material/DirectionsRunRounded';
import ButterflyPic from '../../photos/attractions/butterfly (web).jpg';
import SplitRockPic from '../../photos/attractions/splitrockresort (web).jpg';
import HickoryRunPic from '../../photos/attractions/hickoryrun (web).jpg';
import PoconoRacePic from '../../photos/attractions/pocono-raceway-finish-line-748x470 (web).jpg'
import PoconoAdvPic from '../../photos/attractions/poconooutdooradventures (web).jpg'
import JimThorpePic from '../../photos/attractions/jimthorpe (web).jpg';
import JackFrostPic from '../../photos/attractions/jack-frost (web).jpg';
import MountainViewWinePic from '../../photos/attractions/Winery-Rain-Garden-Photo-mountainview (web).jpg';
import BlueRidgeWinePic from '../../photos/attractions/BRW+Sunset+Photo (web).jpg';
import MountAiryPic from '../../photos/attractions/mountairycasino (web).jpg';
import WaterRoundedIcon from '@mui/icons-material/WaterRounded';
import SportsMotorsportsRoundedIcon from '@mui/icons-material/SportsMotorsportsRounded';
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded';
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';


function ThingsToDo() {
  // 2 - summer and winter
  // 0 - winter only
  // 1 - summer only


  const attractions = [
    {
      image:Paintball,
      name: "Skirmish Paintball",
      season: 2,
      rating: 4.8,
      distance: 3.5,
      category: 'adventure',
      description: 'Engage in thrilling paintball battles at Skirmish Paintball, a vast outdoor arena with diverse game fields. Perfect for groups, relish team-based challenges amidst natural terrain, just minutes away.',
      typeIcon: <SportsMotorsportsRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image: HawkFallsPic,
      name: 'Hawk Falls',
      popularity: 2,
      rating: 4,
      distance: 4.5,
      category: 'parks',
      description: "Discover Hawk Falls, a scenic natural waterfall nestled in Hickory Run State Park. A short hike leads to this peaceful spot where you can enjoy the sights, take photos, and unwind in nature's lap.",
      typeIcon: <ParkRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image:HickoryRunPic,
      name: "Hickory Run State Park",
      season: 2,
      rating: 4.8,
      distance: 4.5,
      category: 'adventure',
      description: 'Explore Hickory Run State Park, a lush haven offering hiking, swimming, and picnicking spots. With over 40 miles of trails and a picturesque boulder field, it\'s a nearby nature retreat for all seasons.',
      typeIcon: <ParkRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image: BigBoulderPic,
      name: 'Big Boulder Ski Resort',
      season: 2,
      rating: 4.8,
      distance: 6.8,
      category: 'ski',
      description: 'Enjoy a snow adventure at Big Boulder Mountain, offering a variety of ski trails for all levels. Purchase a ticket and also gain access to Jack Frost Mountain, doubling your frosty fun nearby.',
      typeIcon: <DownhillSkiingRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image:WWRafting,
      name: "Pocono Whitewater Rafting",
      season: 1,
      rating: 4.8,
      distance: 7.3,
      category: 'adventure',
      description: 'Embark on a refreshing adventure with Pocono Whitewater Rafting. Glide down the scenic Lehigh River, experience thrilling rapids, and enjoy a day of bonding with nature, all just a short drive away.',
      typeIcon: <WaterRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image:ButterflyPic,
      name: "Blue Mountain Butterfly Sanctuary",
      season: 0,
      rating: 4.8,
      distance: 7.9,
      category: 'adventure',
      description: 'Step into a world of color at Bear Mountain Butterfly Sanctuary. Interact with vibrant butterflies, learn about nature, and partake in fun, educational activities. It\'s a short, magical excursion from your stay.',
      typeIcon: <ParkRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image:SplitRockPic,
      name: "Split Rock Resort",
      season: 0,
      rating: 4.8,
      distance: 8.3,
      category: 'adventure',
      description: 'Indulge in a relaxing retreat at Split Rock Resort, nestled amidst the beautiful Poconos. With a water park, movie theater, bowling, and more, it\'s a nearby haven of leisure and fun for all guests.',
      typeIcon: <WaterRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image:PoconoRacePic,
      name: "Pocono Raceway",
      season: 0,
      rating: 4.8,
      distance: 9.2,
      category: 'adventure',
      description: 'Experience the rush at Pocono Raceway, a premier race circuit with a distinctive triangular design. Catch exhilarating motorsports events or drive a race car on the track. A fast-paced adventure not far from you.',
      typeIcon: <SportsMotorsportsRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image:PoconoAdvPic,
      name: "Pocono Outdoor Adventures",
      season: 0,
      rating: 4.8,
      distance: 9.3,
      category: 'adventure',
      description: 'Embark on an adventure with Poconos Outdoor Adventures. From UTV tours and paintball to river trips, there\'s a myriad of activities to satisfy your thrill-seeking spirit, all within a short drive from your stay.',
      typeIcon: <SportsMotorsportsRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image:JimThorpePic,
      name: "Historic Jim Thorpe",
      season: 0,
      rating: 4.8,
      distance: 14,
      category: 'adventure',
      description: 'Discover Jim Thorpe, a quaint town blending natural beauty and rich history. Explore scenic trails, vintage train rides, and charming downtown shops. It\'s a picturesque getaway just a short drive away.',
      typeIcon: <AddLocationAltRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image:JackFrostPic,
      name: "Jack Frost Ski Resort",
      season: 0,
      rating: 4.8,
      distance: 15,
      category: 'adventure',
      description: 'Carve through the snow at Jack Frost Ski Resort, a family-friendly destination with a variety of ski and snowboard trails. Buying a ticket here also grants access to Big Boulder Mountain, offering double the winter fun nearby.',
      typeIcon: <DownhillSkiingRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    }, 
    {
      image:IndoorWaterPark,
      name: "Kalahari Indoor/Outdoor Waterparks",
      popularity: 1,
      rating: 4.8,
      distance: 22.8,
      category: 'waterpark',
      description: 'Splash around at Kalahari, the largest indoor water park in the country. It offers a mix of indoor/outdoor pools, slides, and lazy rivers, making it a perfect nearby getaway for water enthusiasts!',
      typeIcon: <WaterRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image:GorillaPic,
      name: "Gorilla Grove Treetop Adventures",
      season: 0,
      rating: 4.8,
      distance: 22.8,
      category: 'adventure',
      description: 'Unleash your inner Tarzan at Gorilla Grove Treetop Adventures. Navigate through rope courses, glide down zip lines, and enjoy aerial games. It\'s a treetop escapade close by for thrill-seekers of all ages.',
      typeIcon: <SportsMotorsportsRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image:MountAiryPic,
      name: "Mount Airy Casino",
      season: 0,
      rating: 4.8,
      distance: 24,
      category: 'adventure',
      description: 'Try your luck at Mount Airy Casino, a modern gaming haven with a plethora of slots and table games. Beyond gambling, enjoy live entertainment, dining, and spa services. A versatile outing just a short drive away.',
      typeIcon: <CasinoRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
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

  const categories = [

    {
     icon: LocalSeeIcon ,
      title: 'Attractions',
      items: attractions
    },
    {
      icon: RestaurantRoundedIcon,
      title: 'Food & Drinks',
      items: restaurants
    },
    {
      icon: LocalGroceryStoreRoundedIcon,
      title: 'Stores',
      items: []
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
import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import DownhillSkiingRoundedIcon from '@mui/icons-material/DownhillSkiingRounded';
import ParkRoundedIcon from '@mui/icons-material/ParkRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';

import WaterRoundedIcon from '@mui/icons-material/WaterRounded';
import SportsMotorsportsRoundedIcon from '@mui/icons-material/SportsMotorsportsRounded';
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded';
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import ToDoCategory from './ToDoCategory';
import { useNavigate } from 'react-router-dom';

import BigBoulderPic from '../../photos/attractions/Big Boulder (web).jpg';
import HawkFallsPic from '../../photos/attractions/Hawk-Falls-PA (web).jpg';
import HunanHousePic from '../../photos/restaurat/Chinese.jpg';
import Paintball from '../../photos/attractions/paintball (web).jpg';
import IndoorWaterPark from '../../photos/attractions/indoorwater (web).jpg';
import GorillaPic from '../../photos/attractions/gorilla (web).jpg';
import WWRafting from '../../photos/attractions/poconowhitewater (web).jpg';
import ButterflyPic from '../../photos/attractions/butterfly (web).jpg';
import SplitRockPic from '../../photos/attractions/splitrockresort (web).jpg';
import HickoryRunPic from '../../photos/attractions/hickoryrun (web).jpg';
import PoconoRacePic from '../../photos/attractions/pocono-raceway-finish-line-748x470 (web).jpg';
import PoconoAdvPic from '../../photos/attractions/poconooutdooradventures (web).jpg';
import JimThorpePic from '../../photos/attractions/jimthorpe (web).jpg';
import JackFrostPic from '../../photos/attractions/jack-frost (web).jpg';

import MountAiryPic from '../../photos/attractions/mountairycasino (web).jpg';
import BellaMiaPhoto from '../../photos/restaurat/bellamia.jpg';
import ClubhousePhoto from '../../photos/community/clubhouseview.jpg';


function ThingsToDo() {
  const navigate = useNavigate();

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  const styles = {
    container: {
      padding: '24px 20px',
      paddingBottom: '40px',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(180deg, #f8fffe 0%, #ffffff 100%)',
      minHeight: '100%',
    },
    heroSection: {
      textAlign: 'center',
      marginBottom: '24px',
      animation: 'fadeInUp 0.6s ease-out',
    },
    greeting: {
      fontSize: '14px',
      color: '#7AC7C4',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '8px',
    },
    title: {
      fontSize: '26px',
      fontWeight: '700',
      color: '#2D3748',
      margin: '0 0 8px 0',
      letterSpacing: '-0.5px',
    },
    subtitle: {
      fontSize: '15px',
      color: '#718096',
      lineHeight: '1.5',
    },
    categoriesContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '24px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '12px',
    },
    button: {
      background: 'linear-gradient(135deg, #7AC7C4 0%, #5BB5B2 100%)',
      borderRadius: '12px',
      padding: '14px 28px',
      fontSize: '15px',
      fontWeight: '600',
      textTransform: 'none',
      boxShadow: '0 4px 15px rgba(122, 199, 196, 0.3)',
    },
  };

  const attractions = [
    {
      image: Paintball,
      name: "Skirmish Paintball",
      season: 2,
      rating: 4.8,
      distance: 3.5,
      category: 'adventure',
      description: 'Engage in thrilling paintball battles at Skirmish Paintball, a vast outdoor arena with diverse game fields. Perfect for groups seeking team-based challenges amidst natural terrain.',
      typeIcon: <SportsMotorsportsRoundedIcon style={{ color: "#7AC7C4" }} />
    },
    {
      image: HawkFallsPic,
      name: 'Hawk Falls',
      popularity: 2,
      rating: 4,
      distance: 4.5,
      category: 'parks',
      description: "Discover Hawk Falls, a scenic natural waterfall nestled in Hickory Run State Park. A short hike leads to this peaceful spot where you can enjoy the sights and unwind in nature.",
      typeIcon: <ParkRoundedIcon style={{ color: "#7AC7C4" }} />
    },
    {
      image: HickoryRunPic,
      name: "Hickory Run State Park",
      season: 2,
      rating: 4.5,
      distance: 4.5,
      category: 'adventure',
      description: 'Explore Hickory Run State Park, a lush haven offering hiking, swimming, and picnicking spots. With over 40 miles of trails and a picturesque boulder field, it is a nature retreat for all seasons.',
      typeIcon: <ParkRoundedIcon style={{ color: "#7AC7C4" }} />
    },
    {
      image: BigBoulderPic,
      name: 'Big Boulder Ski Resort',
      season: 2,
      rating: 4.8,
      distance: 6.8,
      category: 'ski',
      description: 'Enjoy a snow adventure at Big Boulder Mountain, offering a variety of ski trails for all levels. Purchase a ticket and also gain access to Jack Frost Mountain.',
      typeIcon: <DownhillSkiingRoundedIcon style={{ color: "#7AC7C4" }} />
    },
    {
      image: WWRafting,
      name: "Pocono Whitewater Rafting",
      season: 1,
      rating: 4.8,
      distance: 7.3,
      category: 'adventure',
      description: 'Embark on a refreshing adventure with Pocono Whitewater Rafting. Glide down the scenic Lehigh River, experience thrilling rapids, and enjoy a day of bonding with nature.',
      typeIcon: <WaterRoundedIcon style={{ color: "#7AC7C4" }} />
    },
    {
      image: ButterflyPic,
      name: "Blue Mountain Butterfly Sanctuary",
      season: 0,
      rating: 4.8,
      distance: 7.9,
      category: 'adventure',
      description: 'Step into a world of color at Bear Mountain Butterfly Sanctuary. Interact with vibrant butterflies, learn about nature, and partake in fun, educational activities.',
      typeIcon: <ParkRoundedIcon style={{ color: "#7AC7C4" }} />
    },
    {
      image: SplitRockPic,
      name: "Split Rock Resort",
      season: 0,
      rating: 4.8,
      distance: 8.3,
      category: 'adventure',
      description: 'Indulge in a relaxing retreat at Split Rock Resort, nestled amidst the beautiful Poconos. With a water park, movie theater, bowling, and more, it is a haven of leisure and fun.',
      typeIcon: <WaterRoundedIcon style={{ color: "#7AC7C4" }} />
    },
    {
      image: PoconoRacePic,
      name: "Pocono Raceway",
      season: 0,
      rating: 4.8,
      distance: 9.2,
      category: 'adventure',
      description: 'Experience the rush at Pocono Raceway, a premier race circuit with a distinctive triangular design. Catch exhilarating motorsports events or drive a race car on the track.',
      typeIcon: <SportsMotorsportsRoundedIcon style={{ color: "#7AC7C4" }} />
    },
    {
      image: PoconoAdvPic,
      name: "Pocono Outdoor Adventures",
      season: 0,
      rating: 4.8,
      distance: 9.3,
      category: 'adventure',
      description: 'Embark on an adventure with Poconos Outdoor Adventures. From UTV tours and paintball to river trips, there is a myriad of activities to satisfy your thrill-seeking spirit.',
      typeIcon: <SportsMotorsportsRoundedIcon style={{ color: "#7AC7C4" }} />
    },
    {
      image: JimThorpePic,
      name: "Historic Jim Thorpe",
      season: 0,
      rating: 4.8,
      distance: 14,
      category: 'adventure',
      description: 'Discover Jim Thorpe, a quaint town blending natural beauty and rich history. Explore scenic trails, vintage train rides, and charming downtown shops.',
      typeIcon: <AddLocationAltRoundedIcon style={{ color: "#7AC7C4" }} />
    },
    {
      image: JackFrostPic,
      name: "Jack Frost Ski Resort",
      season: 0,
      rating: 4.8,
      distance: 15,
      category: 'adventure',
      description: 'Carve through the snow at Jack Frost Ski Resort, a family-friendly destination with a variety of ski and snowboard trails. Tickets also grant access to Big Boulder Mountain.',
      typeIcon: <DownhillSkiingRoundedIcon style={{ color: "#7AC7C4" }} />
    },
    {
      image: IndoorWaterPark,
      name: "Kalahari Indoor/Outdoor Waterparks",
      popularity: 1,
      rating: 4.8,
      distance: 22.8,
      category: 'waterpark',
      description: 'Splash around at Kalahari, the largest indoor water park in the country. It offers a mix of indoor/outdoor pools, slides, and lazy rivers for water enthusiasts!',
      typeIcon: <WaterRoundedIcon style={{ color: "#7AC7C4" }} />
    },
    {
      image: GorillaPic,
      name: "Gorilla Grove Treetop Adventures",
      season: 0,
      rating: 4.8,
      distance: 22.8,
      category: 'adventure',
      description: 'Unleash your inner Tarzan at Gorilla Grove Treetop Adventures. Navigate through rope courses, glide down zip lines, and enjoy aerial games for thrill-seekers of all ages.',
      typeIcon: <SportsMotorsportsRoundedIcon style={{ color: "#7AC7C4" }} />
    },
    {
      image: MountAiryPic,
      name: "Mount Airy Casino",
      season: 0,
      rating: 4.8,
      distance: 24,
      category: 'adventure',
      description: 'Try your luck at Mount Airy Casino, a modern gaming haven with a plethora of slots and table games. Beyond gambling, enjoy live entertainment, dining, and spa services.',
      typeIcon: <CasinoRoundedIcon style={{ color: "#7AC7C4" }} />
    }
  ];

  const restaurants = [
    {
      image: ClubhousePhoto,
      name: 'Clubhouse Towamensing',
      rating: 4.5,
      distance: 0.1,
      description: 'Steps away from us. Local American restaurant with a view.',
      typeIcon: <RestaurantRoundedIcon style={{ color: "#7AC7C4" }} />
    },
    {
      image: BellaMiaPhoto,
      name: 'Bella Mia Pizzeria',
      rating: 4.0,
      distance: 2.1,
      description: 'Local Italian restaurant and ice cream shop.',
      typeIcon: <RestaurantRoundedIcon style={{ color: "#7AC7C4" }} />
    },
    {
      image: HunanHousePic,
      name: 'Hunan House',
      rating: 4.0,
      distance: 2.4,
      description: 'Local Chinese restaurant.',
      typeIcon: <RestaurantRoundedIcon style={{ color: "#7AC7C4" }} />
    },
  ];

  const categories = [
    {
      icon: LocalSeeIcon,
      title: 'Attractions',
      items: attractions,
      color: '#7AC7C4',
    },
    {
      icon: RestaurantRoundedIcon,
      title: 'Food & Drinks',
      items: restaurants,
      color: '#F5BD41',
    },
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.greeting}>Discover</div>
        <h1 style={styles.title}>Things To Do</h1>
        <p style={styles.subtitle}>
          Explore the best attractions, dining, and activities near 194 Bishop
        </p>
      </div>

      {/* Categories */}
      <div style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <ToDoCategory key={category.title} {...category} index={index} />
        ))}
      </div>

      {/* Back Button */}
      <div style={styles.buttonContainer}>
        <Button
          startIcon={<ArrowBackRoundedIcon />}
          onClick={() => navigate('/bishop/digitalguidebook')}
          variant="contained"
          style={styles.button}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}

export default ThingsToDo;

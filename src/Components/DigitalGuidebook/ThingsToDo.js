import LocalSeeIcon from '@mui/icons-material/LocalSee';
import DownhillSkiingRoundedIcon from '@mui/icons-material/DownhillSkiingRounded';
import ParkRoundedIcon from '@mui/icons-material/ParkRounded';
import BigBoulderPic from '../../bigboulder.jpg'
import HawkFallsPic from '../../hawkfalls.jpg'
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import ToDoCategory from './ToDoCategory';
import '../../style/ThingsToDo.css';
import HunanHousePic  from '../../OIP.jpg';

function ThingsToDo() {

  const attractions = [
    {
      image: BigBoulderPic,
      name: 'Big Boulder Ski Resort',
      rating: 4.8,
      distance: 4.2,
      description: 'Two Resorts. Mountains of Memories...Come join us and take your Poconos experience to the next level! Check out our hours of operations below to get the most from your visit.',
      typeIcon: <DownhillSkiingRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
    },
    {
      image: HawkFallsPic,
      name: 'Hawls Falls',
      rating: 4,
      distance: 10,
      description: "Hawk Falls is a 25-foot tall waterfall along Hawk Run in the southeastern corner of the park. The waterfall is actually located fairly close to Interstate 476 (you can even see a large bridge from the top of the falls), but it’s fortunately far enough away that the sound of traffic doesn’t impair the serenity of the area.",
      typeIcon: <ParkRoundedIcon style={{ color: "#7AC7C4" }} /> // replace with an actual MUI icon
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
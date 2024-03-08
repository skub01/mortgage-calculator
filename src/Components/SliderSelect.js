import { Typography } from '@mui/material';
import SliderComponent from './Common/SliderComponent';

const SliderSelect = () => {
  return (
    <>
    <Typography> Slider 1 </Typography>
    <SliderComponent min={0} max={50} defaultValue={20}/>
    <Typography> Slider 2 </Typography>
    <SliderComponent min={100} max={200} defaultValue={150}/>
    <Typography> Slider 3</Typography>
    <SliderComponent min={0} max={10} defaultValue={2}/>
    </>
  );
};

export default SliderSelect;

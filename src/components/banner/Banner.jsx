
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    background: #FFC0CB;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #ADD8E6;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Harry's Blog</Heading>
            <br></br>
            <SubHeading>Let's explore the world of blogs together!</SubHeading>
        </Image>
    )
}

export default Banner;
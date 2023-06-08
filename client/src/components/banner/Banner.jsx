import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.unsplash.com/photo-1583752028088-91e3e9880b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fFRSQURJTkd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 100px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 15px;
    color: #FFFFFF;
    background: #000000;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>STARTER</Heading>
            <SubHeading>TOWARDS THE TOP</SubHeading>
        </Image>
    )
}

export default Banner;
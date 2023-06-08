import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h1">STARTER</Typography>
                <Text variant="h5">Welcome to <b>STARTER</b>, your go-to destination for insightful and comprehensive information about the world of stocks and investing.

At our stock blogging site, we are passionate about providing readers with valuable knowledge, expert analysis, and up-to-date news to help them navigate the complex and dynamic stock market. Whether you are a seasoned investor looking for in-depth market analysis or a beginner seeking guidance on how to start investing, our blog is designed to cater to your needs.

Our team of experienced financial writers and market experts are dedicated to delivering high-quality content that covers a wide range of topics related to stocks and investing. From fundamental analysis and technical indicators to market trends and investment strategies, our blog articles aim to provide readers with actionable insights and practical advice.

We believe that education is the foundation of successful investing. That's why we strive to make our blog a valuable learning resource for individuals at all levels of expertise. We break down complex concepts into easy-to-understand terms, providing readers with the tools and knowledge they need to make informed investment decisions.

In addition to educational content, our blog also features market updates, company analysis, and news articles that highlight the latest happenings in the stock market. We keep our readers informed about major market events, economic indicators, corporate earnings, and other factors that can impact stock prices.

We encourage interaction and community engagement through our comments section, where readers can share their thoughts, ask questions, and engage in discussions with other like-minded individuals. We believe that the exchange of ideas and perspectives enhances the learning experience and helps investors broaden their understanding of the stock market.

Whether you are interested in individual stocks, ETFs, dividend investing, or long-term wealth building, our stock blogging site aims to provide you with the resources and insights to make informed investment decisions and achieve your financial goals.

Join us on this exciting journey of exploring the world of stocks and investing. Stay up-to-date with the latest market trends, gain valuable knowledge, and connect with a community of investors who share your passion. We invite you to bookmark our blog and subscribe to our newsletter to receive regular updates and exclusive content.

Thank you for visiting our stock blogging site. We look forward to being your trusted source of information and empowering you to navigate the stock market with confidence. Happy investing!
                    
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;
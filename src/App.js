import './App.scss';
import Header from './components/header/header';
import {Title, Description, Subtitle} from './components/titles/title';
import {WhiteButton, DarkButton, GreenButton, SmallVoidButton} from './components/buttons/buttons';
import BanAd1 from './img/bannerad1.png'; import BanAd2 from './img/bannerad2.png'; import BanAd3 from './img/bannerad3.png'; import BanAd4 from './img/bannerad4.png'; import BanAd5 from './img/bannerad5.png';
import BanBg1 from './img/bannerbg1.png';import BanBg2 from './img/bannerbg2.png';import BanBg3 from './img/bannerbg3.png';import BanBg4 from './img/bannerbg4.png';
import Map from './img/map.png';
import HowIcon1 from './img/howicon1.png';
import {Footer} from './components/footer/footer';

function App() {
  return(
    <div className='body'>
      <Header/>
      <div className='banner'>
        <div className='banner_bgs'>
          <div className='banner_bg banner_bg1-3'>
            <img className='banner_bg1' src={BanBg1}/>
            <img className='banner_bg3' src={BanBg3}/>
          </div>
        </div>
        <div className='banner_container'>
          <div className='banner_block'>
            <div className='banner_subtitle'>Sustainability on Demand</div>
            <Title>Helping the World Go Carbon Neutral</Title>
            <Description>Our Sustainability-as-a-Service platform calculates and purchases carbon offsets to neutralize the environmental impact of everyday activities like ecommerce deliveries, ridesharing, flights, and more.</Description>
            <div className='banner_btns'>
              <WhiteButton>Get Started</WhiteButton>
              <DarkButton>Let's Talk</DarkButton>
            </div>
          </div>
        </div>
        <a href='#'>
          <div className='ad_banner_container'>
            <img src={BanAd1}/><img src={BanAd2}/><img src={BanAd3}/><img src={BanAd4}/><img src={BanAd5}/>
          </div>
        </a>
      </div>
      <div className='map'>
        <div className='map_container'>
          <div className='map_block'>
            <Subtitle>Cloverly API</Subtitle>
            <Title>Offset Your Carbon Footprint in Real Time</Title>
            <Description>Cloverly's powerful API calculates the impact of common carbon-intensive activities in real time and uses verified, quality carbon offset projects to neutralize them. Ready to get started? Create an account to integrate the Cloverly API for free, or contact us for custom solutions.</Description>
            <div className='map_btns'>
              <GreenButton>Get Started for Free</GreenButton>
              <DarkButton>Let's Talk</DarkButton>
            </div>
          </div>
          <img src={Map} className='map_img'/>
        </div>
      </div>
      <div className='how'>
        <div className='how_container'>
          <div className='how_left'>
            <Subtitle>How It Works</Subtitle>
            <Title>Connecting the Carbon Offset Infrastructure for a More Sustainable World</Title>
            <Description>Businesses and consumers count on Cloverly to offset their carbon footprint and create positive environmental change based on real-time business activities. Whether you implement our ready-to-use applications or install our API as part of a custom integration, Cloverly can help you go greener, faster.</Description>
            <SmallVoidButton>Learn More</SmallVoidButton>
          </div>
          <div className='how_right'>
            <div className='how_block'>
              <img src={HowIcon1}/>
              <Title>Matching the Offset</Title>
              <Description>The Cloverly API can find and match the best offset per transaction. If your customer orders a product in California, for example, we might partner with an improved forest management project in California to keep the benefit local.</Description>
            </div>
            <div className='how_block'>
              <img src={HowIcon1}/>
              <Title>Transaction Transparency</Title>
              <Description>We believe in transparency and fully validated transactions. That's why every time you (or your customers) choose to offset an emission-producing activity with Cloverly, we provide real-time transactional data to show the location, type, and amount of carbon offset.</Description>
            </div>
            <div className='how_block'>
              <img src={HowIcon1}/>
              <Title>Verified Sources</Title>
              <Description>To effectively neutralize carbon emissions, we know that quality matters. That's why Cloverly works with reputable, internationally recognized suppliers who track and verify registered carbon offset projects.</Description>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App;

import logo from './logo.svg';
import './App.css';
import IdCard from './components/Id';
import moment from 'moment';
import Greetings from './components/Greetings';
import Random from './components/Random.js';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={moment('1992-07-14').format('ddd MMM D YYYY')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={moment('1988-05-11').format('ddd MMM D YYYY')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <div>
        <hr></hr>
        <Greetings lang="de">Ludwig</Greetings>
      </div>
      <div>
        <Greetings lang="fr">François</Greetings>
      </div>
      <hr></hr>
      <div>
        <Random min={1} max={6} />
      </div>
      <div>
        <Random min={1} max={100} />
      </div>
      <hr></hr>
      <div>
        <BoxColor r={255} g={0} b={0} />
      </div>
      <hr></hr>
      <div>
        <BoxColor r={128} g={255} b={0} />
      </div>
      <hr></hr>
      <div class="credit-cards">
        <div>
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />
        </div>
        <div>
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />
        </div>
        <div>
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </div>
      </div>
      <hr></hr>
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <hr></hr>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <hr></hr>
      <div>
        <LikeButton />
        <LikeButton />
      </div>
      <hr></hr>
      <div>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
      </div>
    </div>
  );
}

export default App;

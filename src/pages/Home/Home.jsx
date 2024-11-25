import { Container, ImageBackground, TextWrapper, Text, Message} from './Home.styled';
import image from '../../images/telephone.jpg';

const Home = () => {
  return (
    <Container>
      <ImageBackground imageUrl={image} />
      <TextWrapper>
        <Text>PhoneBook</Text>
        <Message>If you want to use the PhoneBook, please register / login to your account.</Message>
    </TextWrapper>
    </Container>
  );
};

export default Home;


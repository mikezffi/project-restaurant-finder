import React, { useState } from 'react';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from 'react-slick';

import logo from '../../assets/logo.svg';
import restaurant from '../../assets/restaurante-fake.png';

import { Wrapper, Container, Search, Logo, CarouselTitle, Carousel, Map } from './styles';
import { Card } from '../../components';

const Home = () => {
	const [inputValue, setInputValue] = useState("");

	const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
		adaptiveHeight: true,
  };

	return (
		<Wrapper>
			<Container>
				<Search>
					<Logo src={logo} alt="restaurant logo" />
					<TextField
						label='Search places'
						outlined
						trailingIcon={<MaterialIcon role="button" icon="search" />}
						>
						<Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
					</TextField>
					<CarouselTitle>Na sua Área</CarouselTitle>
					<Carousel {...settings}>
						<Card photo={restaurant} title="nome seila" />
						<Card photo={restaurant} title="nome seila" />
						<Card photo={restaurant} title="nome seila" />
						<Card photo={restaurant} title="nome seila" />
						<Card photo={restaurant} title="nome seila" />
						<Card photo={restaurant} title="nome seila" />
						<Card photo={restaurant} title="nome seila" />
						<Card photo={restaurant} title="nome seila" />
					</Carousel>
				</Search>
			</Container>
			<Map />
		</Wrapper>
	)
};
export default Home;
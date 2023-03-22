import { Link } from 'react-router-dom';

const About = () => {
	const id = 'x3245';
	return (
		<div>
			<h1>Acerca de nosotros</h1>
			<Link to='/'>Home</Link>
			<br />
			<Link to={`/usuarios/${id}`}>Mi Perfil</Link>
		</div>
	);
};

export default About;

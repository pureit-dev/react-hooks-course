import React from 'react';
import PropTypes from 'prop-types';

const styles = {
	content: {
		fontSize: '35px',
		position: 'absolute',
		left: '0',
		right: '0',
		marginTop: '20px',
		textAlign: 'center',
	},
};

export default function Loading({ text, speed = 300 }) {
	const [content, setContent] = React.useState('loading');
	const id = React.useRef(null);

	React.useEffect(() => {
		id.current = window.setInterval(() => {
			content === text + '...'
				? setContent(text)
				: setContent((prevContent) => prevContent + '.');
		}, speed);

		return window.clearInterval(id.current);
	}, [text, speed, content]);
	return <p style={styles.content}>{content}</p>;
}

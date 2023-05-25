import React from 'react';

export const ThemeContext = React.createContext({
	theme: null,
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = React.useState('light');

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	const value = { theme, toggleTheme };

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

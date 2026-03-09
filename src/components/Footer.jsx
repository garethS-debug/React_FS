import React from 'react'

export default function Footer() {
	return (
		<footer style={{backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px'}}>
			<small>© {new Date().getFullYear()} Your Name</small>
		</footer>
	)
}

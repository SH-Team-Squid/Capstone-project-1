import React, { useState } from 'react'
import sh_logo from '../img/sh-two.png'
import search from '../img/search.svg'
import speech from '../img/speech.svg'

const Main = () => {
	const [value, setValue] = useState('')

	const handleInput = (searchValue) => {
		setValue(searchValue)
	}

	return (
		<section>
			{value !== '' ? (
				<p>{value}</p>
			) : (
				<img src={sh_logo} alt='side_hustle_ng' className='sh_logo' />
			)}
			<div className='search-bar'>
				<img src={search} alt='search-icon' />
				<input type='text' onChange={(e) => handleInput(e.target.value)} />
				<img src={speech} alt='speech-icon' width='13' />
			</div>
			<div className='texts'>
				<p>Google Search</p>
				<p>I'm Feeling lucky</p>
			</div>
			<div className='languages'>
				<p>Google Offered in: </p>
				<p>
					<span>Hausa</span>
					<span>Igbo</span>
					<span>Ede Yoruba</span>
					<span>Nigerian Pidgin</span>
				</p>
			</div>
		</section>
	)
}

export default Main

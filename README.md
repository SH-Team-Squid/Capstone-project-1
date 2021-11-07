# Team Squid: Capstone Project 1

Our goal was to recreate Google Homepage by replacing the Google logo with the Sidehustle logo and changing the logo based on the input value.

## Tech used

-  React js

## How to navigate the project

-  We have two folder, 'components' and 'img'
-  The components folder contains three components, "Header, Footer, Main" and also houses the logic.
-  The image folder contains the images used in the project.
-  The 'Header' component renders the header of the page and the 'Footer' renders the footer.
-  The 'Main' component contains the jsx that renders the sidehustle logo, the input box and also the logic that changes the logo.
-  We were able to change the logo to the current input value by assigning the value to a state and updating it with setState.
-  We are using ternary operator to update the state based on a certain condition when the user start typing in the input field and when the field is empty.

```js
{
	value !== '' ? (
		<p>{value}</p>
	) : (
		<img src={sh_logo} alt='side_hustle_ng' className='sh_logo' />
	)
}
```

## Links

-  Live link - [Team Squid SH Capsone Project](https://sh-capstone-project-1.netlify.app/)
-  Repo - [Capsone Project 1](https://github.com/SH-Team-Squid/Capstone-project-1)

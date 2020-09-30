## API

Are you tired of searching on Warframe.market over and over again just to find your dream riven mod with affordable price? If you are, then this project is what you're looking for.

This project is utilises the hidden [APIs](https://docs.google.com/document/d/1121cjBNN4BeZdMBGil6Qbuqse-sWpEXPpitQH5fb_Fo/edit#heading=h.i0vvhdxwiace) Warframe.market provides to retrieve and filter the auction data. You can set the following filters to help search for the mod:
- attributes (what attributes the riven mod should have)
- has negative attribute or not
- price cap
- name of the weapon(s) (could be a single weapon or a set of weapon, depending on your settings)

## Additional Requirement

Running this project solely isn't enough to launch the tool, it requires a backend server (no need to deploy to cloud server, localhost is good to go) that handles the HTTP requests with Warframe.market. This is due to the **Cross-Origin Resource Sharing (CORS) rules**.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.



# Installation
1. In the root directory run `yarn install` or `npm install`

#### iOS Simulator
1.  `cd` into the `ios/` directory and run `pod install`
2.  In the root directory, run `yarn run ios` or `npm run ios`

#### Android (didn't have time to test :()
1. Use physical device (preferred)
2. Check `adb devices`
3. Make sure you have correct path in .bash_profile
4. In the root directory, run `yarn run android` or `npm run android`

#### Test
1. Example test for Card component. Run `npm test`

##### What I did
1. Since we are using local json list, there was no need for handling API side effects with useEffect, so I left comments on imitating the calls.
2. Usually backend includes information of pageSize param, with the requirements I didn't add that the list but created a pagination function, assuming each page has 5 items.
3. Nifty project didn't have typescript and test, so I spent more time to showcase these part of the code.
4. Overall, there's a lot to improve with file structure and tokenize loose strings where it's possible.
5. There is a bug with image_url rendering the same images, I didn't have time to debug that :( , but I substituted 11th item with another url and it shows it.

I hope the project is not too raw :) 


# Cricinfo-Extracter
## About Cricinfo-Extracter
Made a web scrapper which has ability to scrap the WorldCup 2019 matches and keep those matches in excel and folders.
The purpose of this project is to extract information of worldcup 2019 from cricinfo and present that information in the form of excel and pdf scorecards. The application can be used
to solve real purpose problems of extracting large information from websites.

## TECH STACK USED
 -  JAVASCRIPT
 -  NPM Modules
    -  Minimist--> Takes command line arguments
    -  Axios--> For making http request <br>
    -  JSDOM--> For getting information from dom tree
    -  EXCEL4NODE--> Used to make excel filr
    -  PDF_LIB--> Used to make scorecards in the form of pds
 
 ## FEATURES AND FUNCTIONS
 Dowloading data in the form of HTML by making a http request using axios as we are not using any browser so axios will help to achieve this.
 Reading HTML and extracting important and useful information using Jsdom
 Converting matches to teams using Array Manipulation
 Making of excel file and adding important stuff in that excel using excel4node library
 Making pdf and making changes to Template pdf using pdf-lib library.
 
 ## TO RUN THIS ON YOUR LOCAL
   First fork this to your profile, then clone it to your desktop
   
   Then install libraries 
   ```bash
  npm install minimist
  npm install axios
  npm install pdf-lib
  npm install excel4node
  npm install jsdom
  
  ```
  
  To run this project use this command
  
  ```bash
  node --source="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415?ex_cid=ipl2021:google_cpc:search:dsa_feed:msn&gclid=Cj0KCQjw-4SLBhCVARIsACrhWLVv_gGK-NVT1D36fINNofAKdPwIUdjuwmCWE-PuMJCRl3rGClYu5N4aAuJWEALw_wcB" --dataFolder=data --excel=WorldCup.csv
 ```
## Code Summary
1. Read the command line arguments using minimist.

2. Read the HTML file use axios and convert it to DOM using JSDOM.

3. Using HTML elements and their class read the data which we need and push it into a JSO object.

4. Using the above JSO object with all match details we make another JSO which has team details using array manipulation.

5. Using the teams JSO and excel4node create an excel file with every team match details in a sheet.

6. Make folders using fs.

7. Make a template.pdf using MS Word beforehand, and add the data in that pdf for each team and its matches using pdf-lib.


## CONTACT
In case of any suggestions or enquires, feel free to reach out to me.
 
 




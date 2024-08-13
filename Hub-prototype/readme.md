# Insights Hub assignment

In this assignment, I was tasked to develop a front-end prototype, that demonstrates the key features of an Insights Hub. The main key objectives are to showcase my skills in HTML,
CSS & JavaScript. The goal of this task is to create an interactive user interface with double-filtering capabilites, meaning content that would be filtered based on user selections.
This should be done without the use or access to HubSpot. 

## Approach

The way I'm approaching this is to showcase my skills in various of fronts. Other than what we normally would expect in a simple HTML, CSS & JS, I tried to add additional methods on each of them to show versatility. 
- Added a way to display the content dynamically, to showcase the use of fetching JSON data and displaying it onto the HTML. 
- In terms of styling, I provided variables for the CSS, so that i could set a fixed rule-set. That way you know what the standard sizing and colors, which makes for quicker stlying. furthermore, to ensure the responsiveness of the page I used Media Queries as well as Display: flex. That way the page was also functional on Mobile. 
- Main goal of this assignment is the filtering system. That can be made with the use of JS, by adding a function to filter projects based on the selected data and Include the content if it matches the criteria for said data.
 
## HubSpot Considerations

To implement this exact project in HubSpot I would have look into creating templates. A template system that I would use to integrate pages, blogs, and webinars with. Normally can the templates be built using HubSpot's drag-and-drop editor. However you can also custom code it using HubL. In this case, I would likely need to create custom modules for the various sections like the project listings, filters, and topics. This can be done using HubL and HubSpots module system.

  #### HTML/CSS/JavaScript Integration
 - HTML: I would place the HTML code into a custom template.
 - CSS: Place the CSS in the same file or as a separate file within the HubSpot file manager OR I can also utilize HubSpots drag-and-drop editor to style components.
 - JS: JavaScript can be directly embedded in the page template or included as a separate file. HubSpot allows you to link external JS files or use inline scripts within your       template.

#### The use of HubDB

- Create a HubDB Table: I'll store the project data in a HubDB table. This table functions like a database where I can manage rows of data.
- Populate HubDB: Then I'll manually enter my project data (e.g., title, description, image URL, topic, filter type) into the HubDB table.
- Fetch and Display Data: Use HubL within my template to query and display data from the HubDB table dynamically. This will allow me to manage content more easily without   hardcoding it into the HTML.

#### Filtering system
I could simply add the JavaScript that I already made manually, and put it in the template or link the JS file.

#### Summary
Implementing this project in HubSpot requires translating the HTML, CSS, and JavaScript code into HubSpots CMS environment using templates, HubDB, and custom modules. Granted Hubspot does provide us with the drag-and-drop editor, it is not always the best option for customised solutions.
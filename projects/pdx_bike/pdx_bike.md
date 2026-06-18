---
layout: default
title: Portland Biketown Desire Paths
---

# Portland Biketown Desire Paths

## Introduction


Desire paths are the informal, eroded trails that are the result of repeated and consistent off-trail travel. People usually prefer to take the shortest possible paths from point A to point B, and when the official pathways are circuitous or otherwise unfavorable, people may find and forge out shortcuts through the grass or around obstacles. When this happens often enough, and the surrounding landscape begins to erode, a desire path is formed. Desire paths are a peculiar phenomenon, representing a model of transportation that resists top-down planning in favor of "user-centered design" In [an article](https://jjbrowndesign.medium.com/desire-paths-urban-planning-and-their-impacts-on-ui-design-55236f6d31f) in Medium, Jeremy Brown notes how this model of infrastructure have been used to inform real architecture planning, such as at Ohio State University, where walkways between buildings weren't included in the original campus plan, and were only constructed after the optimal desire paths emerged naturally. Human behavior can be difficult to anticipate, and some times it is better work with it, rather than against it.

And that's all very interesting, but what about bicycles?

![desire](assets/desire_paths.jpeg)
*An example from Reddit user u/Jeffmaster223 on the subreddit r/DesirePath*

Portland is a renowned city for American bicycling. It's among the highest ranked cities in the country for [commuting by bike](https://en.wikipedia.org/wiki/List_of_U.S._cities_with_most_bicycle_commuters#cite_note-1) and boasts more than [100 miles of neighborhood greenways](https://www.portland.gov/transportation/what-are-neighborhood-greenways). The Portland Bureau of Transportation (PBOT) compiles the Portland bike network, including these greenways, bike lanes, and multi-use paths, into a handy [Bike Map](https://www.portland.gov/transportation/what-are-neighborhood-greenways) to make navigating the city on a bike as easy as possible. And if you don't have a bike of your own, you can rent one from [Biketown](https://biketownpdx.com/), Portland's bikeshare program.

The Portland Bike Map is extensive, offering recommended cycling routes across the entire city. Using a framework of desire paths, this map can be thought of as the paved sidewalks and walkways of the bicycling world. Conversely, Biketown maintains a large, detailed dataset of where and how Portlanders actually navigate the city on their bikes. While not desire paths in the traditional sense (Biketown vehicles don't cause erosion because the roadways are already paved for vehicle), this ridership data can be compared with the Portland Bike Map to see where Portlanders want to cycle, and what gaps may exist in the greenway network. Are there any places where the PBOT could better support Portland's cyclists? Are there any popular routes that PBOT should consider "paving" with bike lanes and greenway inclusion?

There is an obvious limitation here in that Biketown represents only a small portion of the cycling that takes place in the city. In addition, riding a Biketown is more expensive than traditional biking and limited to those with mobile app access, a credit/debit card, and reliable physical proximity to Biketown vehicles. It is also easy to imagine that people who bike regularly (e.g. commuters) may prefer to own their own bikes, whereas Biketown riders may represent more casual bike enthusiasts. This is no doubt skewing the results to some extent. Regardless, until personal bicycles begin recording every users' trips with GPS tracking at all times, this will have to do.

![biketown](assets/biketown.jpg)
*A Biketown rack at the OMSI MAX station*

## Methodology

This analysis was performed in QGIS. The full workflow was as follows:

1.	Downloaded Q1 2026 rider data from Biketown, the Portland Bike Map shapefile, and Oregon census block groups (links to Data Sources at the bottom).
2.	Cleaned the Biketown route data, removing segments with fewer than 100 passengers or no name. Nameless segments were mostly entrance/exit ramps to primary roads, park trails, or very short connector segments. The only nameless segments I kept from the original data were the Steel and Burnside Bridges, which were both renamed accordingly.
3.	Calculated the length of the each Biketown segment in meters and multiplied it by the vehicle count for that segment to determine its total vehicle-meters travelled. Divided by 1000 to calculate vehicle-kilometers traveled. This is the metric we will use for cycling activity in this analysis.
4.	Created an 18m buffer around the Bike Map recommended routes and dissolved these buffers into a single polygon. This was essential for matching streets in the Biketown data with streets in the Bike Map because their respective geometries were not aligned in the raw data. I settled on 18m through trial and error, as it proved to be the ideal width to ensure that all relevant segments in the Biketown shapefile overlapped with the dissolved Bike Map, without from spilling over to include adjacent routes.
5.	Translated the Portland census block group shapefile 10m to the north and 10m west. Because census block group boundaries are typically situated along roadways, lots of these boundaries overlapped with Biketown segments. I translated the blocks slightly to ensure Biketown segments fit cleanly into a single block group, even if the choice of which was somewhat arbitrary, and to avoid any unexpected behavior these overlaps might cause.
6.	Used the Join Attributes by Location tool to assign the block group GEOID to each Biketown segment shapefile as a new field. I used a one-to-one join with the largest overlap to further reduce the impact of segment-block group overlaps.
7.	Used the aggregate tool to merge the Biketown segments into larger segments based on street name and block group GEOID. Each segment in the new Biketown dataset includes all sections of a given roadway within a given block group, and the summed total of those segments' vehicle-kilometers traveled.
8.	Used the Join Attributes by Location tool again, this time using the buffered Bike Map layer as the overlay, to create a new attribute in the aggregated Biketown segments based on whether the majority of the new segment is located within the Bike Map buffer. This was similarly performed with a one-to-one join using the greatest overlap. This categorizes Biketown-Block Group segments as within the Bike Map network or outside the network, and ensures segments that interest the Bike Map network but are not themselves Bike Map routes are excluded.

## Findings

Overall, Biketown vehicles traveled a collective 5,9972,111 km in Q1 2026, 4,570,064 (76.2%) of which were on routes recommended by the Portland Bike Map.

The heaviest used corridors were downtown and across the six bridges between East and West Portland. This makes sense, given that downtown has the highest transit, population, and Biketown station densities in the city, and that the bridges serve as vital connectors between downtown and the geographically larger east side of the city. However, most roadways downtown are already recommended bike routes, including all six Biketown-able bridges. As such, most of the downtown trips were along recommended routes, and the non-recommended routes with the highest bike activity were mostly east of the river.

Below is a list of the ten Biketown segments with the highest number of Q1 vehicle-kilometers traveled that are *not* covered by the Portland Bike Map.

1. SE Division Place from 4th to 9th (20,665 bike-kms)
2. NE 7th Ave from Fremont to Prescott (15,038 bike-kms)
3. SE Division St from 10th to 26th (14,293 bike-kms)
4. SE Caruthers St from 4th to 12th (14,069 bike-kms)<sup>†</sup>
5. NW 12th Ave from Burnside to Lovejoy (13,919 bike-kms)
6. SW 10th Ave from Salmon to Burnside (12,891 bike-kms)
7. SE Taylor St from Water to 12th (10,926 bike-kms)
8. NE 7th Ave from Knott to Monroe (10,834 bike-kms)
9. SW 12th Ave from Jefferson to Burnside (10,543 bike-kms)
10. NW 21st Ave from Hoyt to Marshall (10,321 bike-kms)

<sup>†</sup>*This segment SE Caruthers St reveals a bit of a flaw in the segment aggregation process. It comprises two separate, disconnected sections of SE Caruthers that happen to share a name and census block. While the longer section to the east of the railroad tracks is not a recommended cycling route, the section of to the west of the railroad is, and is one that I included in the Division/Clinton site visit later on. Most of the cycling on this segment of SE Caruthers St actually took place on this, recommended section.*

The interactive map below shows all road segments in the final dataset. Segments with more bike activity are colored in red, and those with less bike activity are in blue. Zooming in, you can see the Portland Bike Map's recommended routes, which are highlighted in white. Clicking on a road segment displays its name, bike-kms traveled, and whether the segment is a recommended route on the Portland Bike Map.


<link rel="stylesheet" href="./resources/ol.css">
<link rel="stylesheet" href="resources/fontawesome-all.min.css">
<link href="resources/photon-geocoder-autocomplete.min.css" rel="stylesheet">
<link rel="stylesheet" href="./resources/ol-layerswitcher.css">
<link rel="stylesheet" href="./resources/qgis2web.css">
<style>
        .ol-control > * {
            background-color: #f8f8f8!important;
            color: #444444!important;
            border-radius: 0px;
        }
        .ol-attribution a, .gcd-gl-input::placeholder, .search-layer-input-search::placeholder {
            color: #444444!important;
        }
        .search-layer-input-search {
            background-color: #f8f8f8!important;
        }
        .ol-control > *:focus, .ol-control >*:hover {
            background-color: rgba(248, 248, 248, 0.7)!important;
        }
        .ol-control {
            background-color: rgba(255,255,255,.4) !important;
            padding: 2px !important;
        }
</style>
<style>
        #map {
            background-color: #ffffff;
            width: 608px;
            height: 469px;
        }
</style>

<div id="map">
    <div id="popup" class="ol-popup">
        <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content"></div>
    </div>
</div>

<script src="resources/qgis2web_expressions.js"></script>
<script src="./resources/functions.js"></script>
<script src="./resources/ol.js"></script>
<script src="./resources/ol-layerswitcher.js"></script>
<script src="resources/photon-geocoder-autocomplete.min.js"></script>
<script src="resources/olms.js"></script>
<script src="layers/BikeShareServiceArea_1.js"></script><script src="layers/BikeMapRecommendedRoutes_2.js"></script><script src="layers/BiketownSegments_3.js"></script><script src="layers/Difference_4.js"></script>
<script src="styles/BikeShareServiceArea_1_style.js"></script><script src="styles/BikeMapRecommendedRoutes_2_style.js"></script><script src="styles/BiketownSegments_3_style.js"></script><script src="styles/Difference_4_style.js"></script>
<script src="./layers/layers.js" type="text/javascript"></script>
<script src="./resources/Autolinker.min.js"></script>
<script src="./resources/qgis2web.js"></script>

* * *

## Site Visits

Several road names appeal multiple times in the top 10 list, indicating that the desire paths for bike infrastructure might be longer than the census block boundaries used in this analysis. Even more interesting is that several of these are adjacent to an existing bike paths or neighborhood greenways. I decided to go investigate. I rented a Biketown on a Tuesday afternoon to visit these highly used portions of SE Division and NE 7th, and to compare the experience of riding on these "desire paths" to the experience of riding on their parallel neighborhood greenways on SE Clinton and NE 9th.


### SE Divison/Clinton St

It's worth noting that while SE Division has some of the highest non-greenway cycling activity in Portland, the adjacent greenways on SE Caruthers and SE Clinton are still the more popular routes. These roads exist along a very busy cycling corridor in the city, providing one of few connections between MAX lightrail and Streetcar lines, the southern edge of the Eastbank Esplanade and Springwater Corridor trails, the Tilikum Crossing Bridge, and the Oregon Museum of Science and Industry to the west with the commercial corridor on SE Division St and the rest Southeast Portland to the east.

I began my ride eastbound at the OMSI MAX stop. I first traveled eastbound using the non-sanctioned Division Place and Division St to 26th Ave. Once I reached 26th, I returned using the Clinton Street Greenway and SE Caruthers St.

<div id="image-table">
    <table>
	    <tr>
    	    <td style="padding:10px">
        	    <img src="division_clinton/division1.jpg" width="400"/>
      	    </td>
            <td style="padding:10px">
            	<img src="division_clinton/division2.jpg" width="400"/>
            </td>
            <td style="padding:10px">
            	<img src="division_clinton/division3.jpg" width="400"/>
            </td>
        </tr>
    </table>
</div>
*SE Division Place/Street*

There was some bike infrastructure on SE Division Place, and I was not the only cyclist using the roadways that afternoon. As a whole, however, the experience was a bit uneasy. The roads were wide, and there was also lots of motor vehicle traffic towering over me, particularly on the commercial areas of Division St. However, aside from a single pointed bike-arrow at the corner of SE Division St and 21st Ave, I saw no indication that there was a better cycling route a mere two blocks away. If I didn't already know that greenway was there, I'm not sure I would have ever found it.

<div id="image-table">
    <table>
	    <tr>
    	    <td style="padding:10px">
        	    <img src="division_clinton/clinton1.jpg" width="400"/>
      	    </td>
            <td style="padding:10px">
            	<img src="division_clinton/clinton2.jpg" width="400"/>
            </td>
            <td style="padding:10px">
            	<img src="division_clinton/clinton3.jpg" width="400"/>
            </td>
        </tr>
    </table>
</div>
*SE Clinton St*

SE Clinton St is part of the [Portland Bike Bus](https://www.bikebuspdx.org/), and riding it was a breeze. Every aspect of the road design led to the feeling that the street was designed for cyclists before any other type of transportation. I passed a variety of different "Bike May Use Full Lane" "Neighborhood Greenway" and "Bike Route" signs, as well as traffic calming measures like mini-roundabouts, speed humps (with small divots for easy bike passage), and even bollards to prevent cars from using Clinton St as a through-street. There was also a clear community involvement in this. I passed several houses with yard signs advising drivers to slow down on the greenway, keeping speeds under 15mph. As a result, I saw over a dozen other cyclists using the greenway in just the fifteen minutes I was there on a random Tuesday.

Transferring from Clinton to Caruthers was easy as well, with abundant directional signage pointing me mostly off of roadways entirely and onto designated bike trails. This signage made it simple to stay on the bike routes once I was on them, but I wish their had been more to get me onto them in the first place.

While I am glad that more Biketown users generally take Clinton as opposed to Division, Division remains one of the most-ridden non-greenway routes in the city. And were it not for my own independent research and planning with the Portland Bike Map, I would not have known where or how to find the greenway. Given that Division St is the more popular commercial corridor for pedestrians and cars, it makes sense that many people begin their cycling journeys on here. The city does a great job of navigating cyclists who are already on Clinton. But there is room for improvement in terms of navigating cyclists off of Division and onto Clinton in the first place.

### NE 7th/9th Ave

These sections of NE 7th and 9th Aves are less trafficked overall, and don't serve a particularly dense or constrained connection in the network. And unlike the Division/Clinton section, where most ridership took place on the recommended route, NE 7th sees significantly more bike activity than the adjacent greenway route on NE 9th. I rode southbound on NE 7th from Alberta St to Knott St, and returned to Alberta on 9th, to see why.

<div id="image-table">
    <table>
	    <tr>
    	    <td style="padding:10px">
        	    <img src="seventh_ninth/seventh1.jpg" width="400"/>
      	    </td>
            <td style="padding:10px">
            	<img src="seventh_ninth/seventh2.jpg" width="400"/>
            </td>
            <td style="padding:10px">
            	<img src="seventh_ninth/seventh3.jpg" width="400"/>
            </td>
        </tr>
    </table>
</div>
*NE 7th Ave*

While this area had fewer riders than the SE corridor, I wasn't the only one biking on 7th Ave during my visit, and there far fewer cars. The roadway was narrower than Division and Clinton, with parked cars on both sides and speed humps on nearly every block north of Fremont (these speed humps did not have cutouts for easy cycling). That said, there was some limited bike infrastructure, including a short painted bike lane to help with crossing Fremont St and a mini roundabout for traffic calming. There was even a painted bike arrow at the intersection with Siskiyou St, pointing bikes onto southbound 7th.

<div id="image-table">
    <table>
	    <tr>
    	    <td style="padding:10px">
        	    <img src="seventh_ninth/ninth1.jpg" width="400"/>
      	    </td>
            <td style="padding:10px">
            	<img src="seventh_ninth/ninth2.jpg" width="400"/>
            </td>
            <td style="padding:10px">
            	<img src="seventh_ninth/ninth3.jpg" width="400"/>
            </td>
        </tr>
    </table>
</div>
*NE 9th Ave*

In general, 9th has a very similar character to 7th - narrow neighborhood streets with lots of parked cars and speed humps. However, the bike infrastructure was actually more limited on 9th. There were no mini roundabouts, no bike lane when crossing Fremont St, and there was a significant barrier to easy riding in Irving Park. The only physical indication I saw that I was on a neighborhood greenway at all was the bicycle design above the stop signs. I did not see anyone else cycling on 9th while I was there.

While on paper it may seem wise to route a greenway through Irving Park, it actually proved to be a fairly significant barrier on the ride. The park's trails are quite narrow, as they are designed primarily for pedestrian traffic. I found it quite difficult to maintain a safe, slow speed and keep my distance from pedestrians walking their dogs while navigating these trails on an ebike. At times, I had to ride into the lawns to avoid them. In contrast, the surrounding neighborhood streets like 7th see quite little car traffic, and the cars that do pass through are already moving slowly as they maneuver the neighborhoods's narrow streets, speed humps, and parked cars. While on my ride, I got the impression that the neighborhood's cars posed less of a threat to my safety than I posed to the safety of parkgoing pedestrians and their dogs. The northern end of the the park trail also has a short but very steep section that felt quite dangerous on an ebike.

Given the differences in infrastructure between 7th and 9th, I think it makes sense, and is probably safer, for cyclists to continue riding on 7th as opposed to 9th. It is also worth noting that just south of where I ventured, NE 7th is a recommended cycling route that extends to the Blumenauer Bicycle and Pedestrian Bridge, which crosses over US Interstate 84 and serves as a vital connection between Northeast and Southeast Portland. Under the current bike network, northbound cyclists using this bridge are advised to go two blocks out of their way to 9th, in order ride on roads that are less conducive for biking than where they otherwise would take on 7th. This is a situation where the city's Bike Map does not seem aligned with the true cycling conditions on the ground, and PBOT should consider revising its Bike Map accordingly.

## Conclusion

While most Biketown activity takes place along routes recommended in the Portland Bike Map, nearly a quarter takes place on unprotected roadways which are less conducive for cycling. For this project, I visited the two most popular non-recommended cycling corridors, along SE Division and NE 7th, to understand how and why cyclists may diverge from recommended routes. In the case of Division, most of the area's bike activity does take place on the nearby greenways on Clinton and Caruthers Streets. But given the commercial popularity of Division, and the lack of signage directing cyclists from nearby streets toward the greenway, a sizable chunk remain on Division. In the case of 7th, this road is actually better suited for cycling than the designated greenway on 9th. This portion of 7th includes mini-roundabouts for traffic calming and a short bike lane to assist with crossing NE Fremont St, whereas nearby 9th does not have such assets and dangerously passes through a popular park. While not a desire path in a traditional sense, this section of 7th can be seen as a desire path, as its popularity follows the user-experience of the place as opposed to the top down route planning represented by the Bike Map. 7th already sees more bicycle ridership than nearby 9th, and I would argue that this is a situation where the bike network as a whole would be improved by following the popular cycling demand.

![desire_paths2](assets/desire_paths2.jpeg)
*A desire path becomes reality. From Reddit user u/DownDeep99*

## Data Sources
- [Biketown Ridership Data - Downloaded for Q1 2026](https://public.ridereport.com/pdx?x=-122.6411937&y=45.5228353&z=11.23&vehicle=e-bike)
- [Portland Recommended Bicycle Routes](https://gis-pdx.opendata.arcgis.com/datasets/e14a0185c46c4a3983a38be96bdaea07_183/explore?location=45.520135%2C-122.638767%2C14)
- [Biketown Service Area Boundary](https://gis-pdx.opendata.arcgis.com/datasets/d4edce3b82d441ff8f621d07a21eb11f_1301/explore?location=45.535874%2C-122.566732%2C12)
- [Oregon Census Block Groups 2020](https://geohub.oregon.gov/search?q=block%20groups)

[back](../)

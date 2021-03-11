---
layout: page
title: Gravity Model of Spatial Interraction
---

I created a gravity model of spatial interaction to estimate the coverage extents of hospitals in New England. It does this by assuming people will tend to go to hospitals that are nearest to them and that have more beds. By looking at these three factors, one can create hospital catchment areas that show what hospitals people would be most likely to go to.

Paragraph about data sources.

Paragraph about preprocessing.
  Screenshot of preprocessing Model

Paragraph about analysis steps
  Screenshot of gravity model

Paragraph about comparison to Dartmouth Map

A map of the hospital catchment areas that I found when compared to the Dartmouth Atlas can be found [here.](https://jackson-mumper.github.io/gravity/assets/leaflet_map/#6/44.281/-70.887)

As one can see, my model places a much stronger reliance on beds than distance when compared to the Dartmouth HSAs. Springfield, MA, for example, has a catchment area in my analysis that includes almost all of western Massachusetts as well as much of northern Connecticut, totally over 3 million people, despite there being several other hospitals in the region. In future iterations of this project I would decrease the friction of distance to account for some of this.

**Data Sources**

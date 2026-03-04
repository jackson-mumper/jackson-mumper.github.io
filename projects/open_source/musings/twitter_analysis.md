---
layout: default
title: Spatial Twitter Analysis
---

In their spatial analysis of Twitter data, Wang and Tsou identify the network of Twitter connectivity during a 2014 wildfire in southern California. They do this by using Twitter's API to collect the tweets taken during the peak of the fire that contain keywords relating to either the disaster (i.e. 'fire' and 'wildfire') or keywords relating to affected communities (i.e. 'Bernardo' and 'San Marcos'). Once these tweets are selected, the authors filter for only tweets with geo-coordinates in their metadata. Using this as their input data, their analyses include calculating kernel density of wildfire tweet locations, text mining for important terms and phrases in the tweet data, and a social network analysis to categorize these tweets. The final products of this analysis are visual demonstrations of how twitter activity moves depending on where the fire was most active. These include bar graphs of use of location-based keywords over time and a heatmap of geo-tagged tweets during the fire. The authors also conduct a network analysis, demonstrating that the largest sources of retweets during the fire were San Diego-based news media outlets.

Examining this article through the lens of reproducibility and replicability, there appear to be efforts made by the authors to ensure their results are reproducible. The National Academies of Sciences, Engineering, and Medicine define reproducibility as the ability to, using the same data and processes, get the same results as the original study. As we learned in the [Malawi Analysis](https://jackson-mumper.github.io/malcomb/malcomb.html), this can be a very difficult thing to accomplish as the level of detail needed for an exact reproduction is often left out of a paper for the sake of readability. Similar to Malcomb et al, there is a narrative description of methodology that seems written with the potential for reproduction in mind. However, the authors do not publish their code, and Twitter's user privacy policy makes it difficult to access the data used in the report. Therefore, while a loose reproduction may be possible, it would likely be impossible to reproduce their work in the strictest sense of the word.

From a replicability standpoint, I'm not sure it would be possible to say without actually running one's own analysis. Wang and Tsou's findings, that twitter data matches activity of a real-world event and the news organizations are the harbingers of this knowledge, seems logical. However, in order to replicate these findings, one would have to do the same or a similar analysis for Twitter data during a separate disaster and see if/the extent to which this remains the case. Once enough replication studies have been done, a theory could be formed about the spatial patterns of Twitter data and the networks thereof. But from just the one study, it is unclear if/how the research will develop from here.

**References**

Malcomb, D. W., E. A. Weaver, and A. R. Krakowka. 2014. Vulnerability modeling for sub-Saharan Africa: An operationalized approach in Malawi. Applied Geography 48:17–30. DOI:10.1016/j.apgeog.2014.01.004

National Academies of Sciences, Engineering, and Medicine. 2019. Reproducibility and Replicability in Science. Washington, D.C.: National Academies Press. DOI: 10.17226/25303

Wang, Z., X. Ye, and M. H. Tsou. 2016. Spatial, temporal, and content analysis of Twitter for wildfire hazards. Natural Hazards 83 (1):523–540.

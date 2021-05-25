---
layout: page
title: Replication of Kang et al COVID-19 Healthcare Resources in Chicago
---

**Introduction**

In their 2020 paper, Kang et al conduct a vulnerability model of hospital capacity and accessibility in relation to the COVID-19 pandemic in Illinois. By using largely open source methods and data, they use Cyber GIS to calculate hospital catchment areas based on driving time to hospitals, then by calculating a bed-to-population ratio for each hospital location. The final products are two hospital accessibility maps, one of Illinois and one of Chicago, aggregated based on a hexagonal raster.

The recent publication of the source code from this study in a Jupyter notebook, as well as their use of widely available datasets like OpenStreetMap, allows for both public reproduction of their methods, and alteration of their methods when changes can/should be made. This replication has two main goals:

1. To correct for a key error in the way hospitals and the road network connect in Chicago
2. To assess the impact of the weights with regard to the Modifiable Aerial Unit Problem (MAUP)

**Materials and Methods**

The original Kang et al study uses a Python script in CyberGIS and 

briefly explaining and citing what data sources and computational resources were used for the study. The length/depth of this explanation may be similar to your review of the Twitter for Wildfire Hazards paper (Wang et al 2016). Explain any changes you made to the original python notebook / repository.

**Results and Discussion**

*Part 1*

*Part 2*

include images of findings (maps, graphs) and link to your final repository for the reproduction. Discuss what you learned from the reproduction attempt, especially any knowledge, insight, or uncertainty that was encoded in the repository or discovered in the reproduction but not explained in the published paper.

![original_result](/assets/ChicagoResult.png)
Figure 1: Original Findings of Kang et al

![network_fix](/assets/network_fix.png)
Figure 2: Adjusted results for network design improvements

![network_fix_new_weights](/assets/network_fix_new_weights.png)
Figure 3: Adjusted results with new weighting schema

**Conclusion**

with emphasis on the significance of the reproduction study you just completed. Was the study reproducible, and has the reproduction study increased, decreased, or otherwise refined your belief in the validity of the original study? Conclude with any insights, priorities, or questions for future research.

**References**

Kang, J. Y., A. Michels, F. Lyu, Shaohua Wang, N. Agbodo, V. L. Freeman, and Shaowen Wang. 2020. Rapidly measuring spatial accessibility of COVID-19 healthcare resources: a case study of Illinois, USA. International Journal of Health Geographics 19 (1):1–17. DOI:10.1186/s12942-020-00229-x.

Thank you to Professor Joe Holler, Kufre Udoh, and the rest of the Geog323 class for the collaborative spirit and aid in this project.

---
layout: page
title: Replication of Climate Vulnerability in Malawi
---

**THIS PAGE IS UNDER CONSTRUCTION**

**Replication of**
# Vulnerability modeling for sub-Saharan Africa

Original study *by* Malcomb, D. W., E. A. Weaver, and A. R. Krakowka. 2014. Vulnerability modeling for sub-Saharan Africa: An operationalized approach in Malawi. *Applied Geography* 48:17–30. DOI:[10.1016/j.apgeog.2014.01.004](https://doi.org/10.1016/j.apgeog.2014.01.004)

Replication Authors:
Your Name, Joseph Holler, Kufre Udoh, Open Source GIScience students of fall 2019 and spring 2021

Replication Materials Available at: [RP-Malcomb](https://github.com/jackson-mumper/RP-Malcomb)

Created: `26 April 2021`
Revised: `26 April 2021`

## Abstract

The original study is a multi-criteria analysis of vulnerability to Climate Change in Malawi, and is one of the earliest sub-national geographic models of climate change vulnerability for an African country. The study aims to be replicable, and had 40 citations in Google Scholar as of April 8, 2021.

## Original Study Information

The study region is the country of Malawi. The spatial support of input data includes DHS survey points, Traditional Authority boundaries, and raster grids of flood risk (0.833 degree resolution) and drought exposure (0.416 degree resolution).

The original study was published without data or code, but has detailed narrative description of the methodology. The methods used are feasible for undergraduate students to implement following completion of one introductory GIS course. The study states that its data is available for replication in 23 African countries.


### Data Description and Variables

Outline the data used in the study, including:

- sources of each data layer and
- the variable(s) used from each data source
- transformations applied to the variables (e.g. rescaling variables, calculating derived variables, aggregating to different geographic units, etc.)

This part may be compiled collaboratively as a group!

### Analytical Specification

The original study was conducted using ArcGIS and STATA, but does not state which versions of these software were used.
The replication study will use R.

## Materials and Procedure

**COPY YOUR WORKFLOW CONTENT HERE**

## Replication Results

For each output from the original study (mainly figure 4 and figure 5), present separately the results of the replication attempt.

2.	State whether the original study was or was not supported by the replication
3.	State whether any hypothesis linked to a planned deviation from the original study was supported. Provide key statistics and related reasoning.

Figures to Include:
- map of resilience by traditional authority in 2010, analagous to figure 4 of the original study
- map of vulnerability in Malawi, analagous to figure 5 of the original study
- map of difference between your figure 4 and the original figure 4
- map of difference between your figure 5 and the original figure 5

## Unplanned Deviations from the Protocol

Summarize changes and uncertainties between
- your interpretation and plan for the workflow based on reading the paper
- your final workflow after accessing the data and code and completing the code

## Discussion

Provide a summary and interpretation of the key findings of the replication *vis-a-vis* the original study results. If the attempt was a failure, discuss possible causes of the failure. In this replication, any failure is probably due to practical causes, which may include:
- lack of data
- lack of code
- lack of details in the original analysis
- uncertainties due to manner in which data has been used

## Conclusion

Restate the key findings and discuss their broader societal implications or contributions to theory.
Do the research findings suggest a need for any future research?

## References

Include any referenced studies or materials in the [AAG Style of author-date referencing](https://www.tandf.co.uk//journals/authors/style/reference/tf_USChicagoB.pdf).

Malcomb
Tate

Thank you to Professor Joe Holler, Kufre Udoh, and the rest of the Geog323 class for the collaborative spirit and aid in this project. Particular thanks to, [Arielle Landau](alandaux.github.io), [Evan Killion](evankilli.github.io), [Steven Montilla-Morantes](stevenmontilla.github.io), [Sanjana Roy](sanjana-roy.github.io), and [Maddie Tango](mtango99.github.io).




**Figures/Maps**
![mumper_ac](/assets/ac_2010.png)
![mumper_vul](/assets/vulnerability.png)

Confusion Matrix of AC
|| 1 | 2 | 3 | 4 |
| 1 | 33 | 5 | 0 | 0 |
| 2 | 26 | 24 | 0 | 0 |
| 3 | 5 | 43 | 19 | 3 |
| 4 | 0 | 6 | 30 | 5 |
![scatter_vuln](/assets/difference_scatter.png)


![diff_ac](/assets/difference4.png)
![diff_vul](/assets/difference5.png)

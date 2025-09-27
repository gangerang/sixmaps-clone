# SIX Maps Clone
A clone of [SIX Maps](https://maps.six.nsw.gov.au) for those who are after the nestalgiac value of the old site.

**Try it out here:** [https://six.al3x.au](six.al3x.au)

SIX Maps was introduced in 2008 and was the go-to web mapping site for many map users in NSW. It was decommissioned in March of 2025 and replaced with a new site, the [SDT Explorer](https://portal.spatial.nsw.gov.au/explorer/index.html).

This version is a static clone of the original site, with a Node.js server to proxy requests to the original map services, which are still available.

All functions appear to work, including:
- lot and location search
- coordinate search and identification, across both GDA94 and GDA2020
- csv dropper, allowing bulk loading of lots which can then be easily viewed
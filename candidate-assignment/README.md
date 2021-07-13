# Layer0 Software Engineer, Solution Engineering Candidate Assignment 

Please find the link to the deployed project:
https://dmastiuk-candidate-assignment-default.layer0.link/

**Purpose**:
Maximize the website loading speed.

**Performed steps**:
1) Copied repository to local machine;
2) Checked Layer0 documentation;
3) Updated Node.js and installed Layer0 CLI;
4) Opened local repo via InteliJ IDEA;
5) Checked the scripts in routes.ts, shoppingFlowRouteHandler.ts and service-worker.ts;
6) To routes.ts, line 9, added route .match('/p/:path*', shoppingFlowRouteHandler), to define the general path to PDPs;
7) In service-worker.ts, line 11, updated PLP thumbnail selector;
8) Lines 23-29, service-worker.ts, added Deep Fetching config for main PDP image, added callback: deepFetchPDPImages;
9) Lines 30-36, service-worker.ts, added Deep Fetching config for PDP thumb images, added callback: deepFetchPDPImages;
10) Saved and performed commit to remote repository;
11) Deployed the project to Layer0;
12) Performed the test on WebPageTest.

**Result**:
Here is the result from WebPageTest: https://www.webpagetest.org/result/210712_AiDcCH_914717d717ade24da884a783d862858e/

**Feedback**
My initial intention was to add PDP images to layer0 and inscrease the load speed of the website.
Possible next steps would be: 
1) Spliting cache based on cookie for localized currency;
2) Setting late load for promo pricing;
3) Lower TTLs for Sale pricing;
4) Lower cache TTL for Inventory;
5) Setting late load for personalized banners.
I would also add deep fetching URLs, but have some questions on this matter.


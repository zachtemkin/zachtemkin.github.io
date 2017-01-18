---
layout: project
title: "IBM – Watson Hello"
ID: "ww"
img: "/assets/img/thumbnails/ww-thumb.png"
imgBg: true
brief: "Showcase the value of Watson language processing APIs through a translation experience on a mobile device."
roles: "Ux Design; Prototyping; User Research"
categories: portfolio
---

In the fall of 2015 I participated in a 12 week design bootcamp as part of my on-boarding to IBM Design. For the first three weeks, I was on a team assigned to create a proof of concept that showcased the value of IBM’s Watson language processing APIs.

I worked with two other UX Designers, [Betty Quinn](http://www.bettyquinn.com/pages/about.html) and [Sofia Gutierrez](http://www.gsofia.com/#About); Two Visual Designers, [Adam Lehman](http://www.upandadam.co/about/) and [Marion Brülls](https://www.linkedin.com/in/marion-bruells-24332395); A Researcher, [Josh Shiau](http://www.joshshiau.com/about-1/) and a Front-end Developer, [Lindsay Roberts](https://www.linkedin.com/in/lindsayrene?authType=NAME_SEARCH&authToken=m2gp&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A257881617%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1484617583922%2Ctas%3ALindsay%20Roberts).

Although we had defined roles, we all participated in research activities. I also produced our final prototype using Facebook’s Origami library for Quartz Composer.

##  The Brief

At the start of the project we were introduced to stakeholders from the Watson organization. They gave us some background on the technology and the goals of the project.

IBM Design uses statements called ‘Hills’ to help teams align around goals. Hills are statements of intent written as meaningful user outcomes. Our stakeholders gave us the hill:

> A consumer can communicate in-person with non-native speakers with their mobile device at the speed of thought, and give Watson feedback along the way.

From here we began to list out any assumptions we felt were built into the Hill and began to find people to interview.

{%
	include project-image-container.html
	images = "/assets/img/watson-hello/assumptions.png"
	rel = true
%}

{%
	include project-image-container.html
	rel = true
	caption = "we made some initial assumptions about the physical and cognitive abilities of our users and the capabilities of the technology. We then crafted research questions to test these assumptions."
	images = "/assets/img/watson-hello/research-questions.png"
%}

## Research

### User Interviews

In order to create something that had real value to a user and that stood out in the market we needed to quickly develop a deep understanding of people who need translation services as part of their day-to-day activities.  

We only had a few days to conduct research so each team member worked to identify and interview people whose need for translation was extreme. We interviewed English speaking doctors and a nurse who frequently work in developing nations, a peace corps volunteer working on a community development project in kyrgyzstan and, finally, we talked with some IBMers in offices around the world who have to communicate in a non-native language as part of their job. In each of these cases our interviewee had an important job to get done in a situation where they could not communicate effectively in either their native language or the native language of the person with whom they were working.

### Personas & Insights

We synthesized the findings from our interviews into three personas: the Doctor, the Volunteer, and the Knowledge Worker. As a team we mapped the major pain points of each

{%
	include project-image-container.html
	images = "/assets/img/watson-hello/doctor-journey.png"
	rel = true
	featured = true
	side-caption = true
	caption = "<strong>The Doctor</strong> starts out excited to help her patients but is quickly frustrated when she struggles to communicate with her patient. Tools like Google translate provide some help and the Doctor feels good when she things she’s made a diagnosis or communicated treatment but is later crushed to find the patient is still ill because her message was not in fact interpreted as intended"
%}
{%
	include project-image-container.html
	images = "/assets/img/watson-hello/volunteer-journey.png"
	rel = true
	featured = true
	side-caption = true
	caption = "<strong>The volunteer</strong> starts out anxious about their experience but through training becomes more confident. When he starts his project, however, he finds that half of his team speaks no English. His host family, further training, and tools like Google Translate help but still leave him less than confident"
%}
{%
	include project-image-container.html
	images = "/assets/img/watson-hello/knowledge-worker-journey.png"
	rel = true
	featured = true
	side-caption = true
	caption = "<strong>The Knowledge Worker</strong> also starts off excited but quickly starts struggling to keep up with her peers. Tools like Google Translate start off working well but she quickly fails to keep up with the fast pace of collaboration and can’t express her ideas in a nuanced way."
%}

From our research into these users we synthesized three main insights into how our users approached translation. These ideas were points that we could try to enhance or support with our solution.

{%
	include project-image-container.html
	images = "/assets/img/watson-hello/insights.png"
	rel = true
%}

## Reflect & Make

### Re-align Goals

Now that we had a good understanding of our users and their pain points we began to develop concepts that would solve their problems. Our first step was to use the insights we’d gained to tweak our Hill. We presented our findings to our stakeholders and worked with them to create a new hill that aligned better with our users while still meeting the goals of the business. Our new hill read:

> A user can communicate face to face, naturally and confidently, with a non native speaker using a mobile device.

We felt the language in this statement highlighted the importance of maintaining natural, human conversation even though a piece of technology was acting as a facilitator.

### Concept Generation

Next we began work to map our insights to concepts. We used the findings from our research to create needs statements for each persona. A needs statement represents a problem faced by a user in the form of an outcome they wish to achieve, e.g. *“Marion, the knowledge worker, needs to feel confident in the validity of a translation so that she can keep her focus on the task at hand”* 

{%
	include project-image-container.html
	images = "/assets/img/watson-hello/needs.png"
	rel = true
%}

We then each created brief storyboards, or vignettes that represented ideal scenarios for our users. We based these vignettes around metaphors such as *“our solution is like a tamagotchi for translation”* or “a Spotify playlist for vocabulary words”.

{%
	include project-image-container.html
	images = "/assets/img/watson-hello/tamagotchi.png, /assets/img/watson-hello/pokedex.png"
	rel = true
	featured = true
	side-caption = true
	caption = "Creating metaphors for our concepts helped us diverge as a team and think of several ideas that could later become features"
%}

{%
	include project-image-container.html
	images = "/assets/img/watson-hello/baymax.png, /assets/img/watson-hello/spotify.png"
	rel = true
	featured = true
	side-caption = true
	caption = "This exercise also got us thinking about the tone and personality we wanted our solution to have"
%}

From this work we synthesized three core concepts we wanted in our solution:

#### Real time translation

Two users would be able to speak naturally, with the device between them, and have the solution convert speech to text on the screen while simultaneously translating that text into the appropriate language. The full transcript with both languages would be saved and searchable later.

This would allow users to communicate naturally and face-to-face. The automated nature of this feature and the display of both languages keeps the user in **context**. The ability to go back and re-read a conversation allows the user to **review** and learn directly from their experiences.

Watson language translation, speech-to-text, text-to-speech and language detection API’s would be used to achieve this.

#### Smart Words

Words for which there was no direct translation would be highlighted. The solution would then search Wikipedia and other sources for information on the word to determine if it was culturally significant and, if so, surface that information to the user.

This would allow the user to gain a deeper understanding of the language and culture and the person they were communicating with. Smart Words would allow the user to gain cultural **context** and could be **reviewed** at a later time.

Watson language translation, speech-to-text and tradeoff analytics API’s would be used to implement this feature.

#### text to text translation

A fallback for when speaking out loud with a device might not be appropriate for the situation, a user could perform a traditional text translation by typing the source material into a text field. 

This would utilize the Watson language translation API.

## Make & Observe 

We quickly created paper prototypes of these concepts to roughly validate our direction with users and stakeholders.

{%
	include project-image-container.html
	images = "/assets/img/watson-hello/paper-proto-1.gif, /assets/img/watson-hello/paper-proto-2.gif"
	rel = true
	featured = true
%}

After some tweaks and more testing with wireframes it was time to start creating higher fidelity mock-ups and ultimately putting together a prototype. Our front-end developer built some simple proofs of concept that demonstrated use of API’s and I built a demonstration of the user experience using Facebook’s Origami.

{%
	include project-image-container.html
	images = "/assets/img/watson-hello/wh-qz.png"
%}

<p><iframe src="https://player.vimeo.com/video/192566953?byline=0&portrait=0" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></p>

## Reflect 

We received a lot of positive feedback at our final demo to our users and stakeholders. Our users felt our solution would definitely help them in their work around the world and our stakeholders were pleased with how our solution demonstrated the power of Watson APIs.

If we could have continued with the project we would have liked to conduct further investigation into issues around the availability of internet and the prevalence of mobile devices in certain regions. We would also have considered how our solution could scale to different device form factors such as wearables and tablets. Finally we would have liked to work more closely with the Watson development team on how data collected through our app could help train the Watson system. 



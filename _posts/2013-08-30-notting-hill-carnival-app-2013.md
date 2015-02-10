---
layout: post
title: Notting Hill Carnival App 2013
date: 2013-08-30 16:54:01.000000000 +02:00
categories:
- mobile app
tags:
- javascript
- mobile app
- notting hill carnival app
- PhoneGap
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  easy_noindex_nofollow_index: '0'
  easy_noindex_nofollow_follow: '0'
  _thumbnail_id: '874'
  dsq_thread_id: '2274886076'
author:
  login: mrjrobertson
  email: innit@hotmail.com
  display_name: Jamie Robertson Interactive
  first_name: ''
  last_name: ''
---

### Version 2.0

Just like the first version for 2012, the objective of the app was to provide a custom map for the Notting Hill Carnival that showed the location of the soundsystems and other important points of interest. It was a collaborative project with Franky and Adlai and used PhoneGap.

<img src="{{ site.baseurl }}/static/img/2013/12/nhc13-00.png" alt="nhc13-00" width="400" height="585" class="aligncenter size-full wp-image-933" />

Before we started developing the second version of the app we identified areas that we wanted to improve and new features we wanted to include:


### Locally served map

The Notting Hill Carnival attracts around 1.5 million festival goers. Due to the high density of crowds, mobile phone signal is patchy at best and between 5pm and 7pm is almost non existent. This means that we could not rely on 3g signal to load the Google maps api.
Our solution to this problem was to design our own map in Adobe Illustrator and serve it locally.

We also wanted the user to be able to see where they were on the map. To do this we used Phonegap's geolocation feature combined with data we already know about the area and translate it into absolute CSS positioning relative to the full width and height of the map.


### Faster touch events

I decided to use Zepto instead of jQuery. Zepto is a _'minimalist JavaScript library for modern browsers'_. This makes it highly suitable for use with mobile browsers, and thus perfect for PhoneGap. Another great feature of Zepto is its touch events that respond faster than standard jQuery click events (used for version 1).


### Redesigned user experience

I wanted to make the interface more minimal as possible in order to shift the focus to the map.


<img src="{{ site.baseurl }}/static/img/2013/12/nhc13-01.png" alt="nhc13-01" width="400" height="550" class="alignleft size-full wp-image-934" />

<img src="{{ site.baseurl }}/static/img/2013/12/nhc13-02.png" alt="nhc13-02" width="400" height="550" class="alignleft size-full wp-image-935" />

<img src="{{ site.baseurl }}/static/img/2013/12/nhc13-09.png" alt="nhc13-09" width="400" height="550" class="alignleft size-full wp-image-942" />

<img src="{{ site.baseurl }}/static/img/2013/12/nhc13-08.png" alt="nhc13-08" width="400" height="550" class="alignleft size-full wp-image-941" />

<img src="{{ site.baseurl }}/static/img/2013/12/nhc13-07.png" alt="nhc13-07" width="400" height="550" class="alignleft size-full wp-image-940" />

<img src="{{ site.baseurl }}/static/img/2013/12/nhc13-05.png" alt="nhc13-05" width="400" height="550" class="alignleft size-full wp-image-938" />

<img src="{{ site.baseurl }}/static/img/2013/12/nhc13-06.png" alt="nhc13-06" width="400" height="550" class="alignleft size-full wp-image-939" />

<img src="{{ site.baseurl }}/static/img/2013/12/nhc13-04.png" alt="nhc13-04" width="400" height="550" class="alignleft size-full wp-image-937" />

<img src="{{ site.baseurl }}/static/img/2013/12/nhc13-03.png" alt="nhc13-03" width="400" height="550" class="alignleft size-full wp-image-936" />


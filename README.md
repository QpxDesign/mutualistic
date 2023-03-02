### mutualistic

An open-source news website for content created by non-profit outlets

### List of All Potential Sources

- The Guardian (has free API) → https://open-platform.theguardian.com/
- PBS (has API) → https://docs.pbs.org/display/CDA
- NPR (outdated api that still works :] ) → https://legacy.npr.org/api/index
- BBC (no public API :[ )
- Mother Jones (no API?)
- ProPublica → (no News API)
- WikiNews → https://www.mediawiki.org/wiki/API:Main_page
- College Newspapers (Basically every college has one)
  - The Crimson
  - UC Chicago
  - Turtleback
  - etc
- High School News? (Coverage about national stories)
  - Would require manual submisson
- AP (not non-profit, but very unbiased) → https://developer.ap.org/

### Useful Resources

https://en.wikipedia.org/wiki/List_of_news_media_APIs

### Techstack

#### Current

- React.JS in Typescript
- Vanilla CSS

#### Planned

- MySQL
- Express.js
- Python (to scrape/collect data)

### Data Structures

#### Users Table (in MySQL):

```
Username varchar(255)
Email varchar(255)
TopicsOfIntrest varchar(5000) //Stringified JSON Array of topic names (see topics.json)
Location varchar(255)
PoliticalLeaning varchar(255)
Readlist Text //Stringified JSON Array of read article IDs, used to prevent reshowing of articles
FavoritedStories Text // Stringified JSON Array of article IDs
HiddenPublishers Text // Stringified JSON Array of publisher IDs
```

#### Article Database Table (in MySQL):

```
articleID varchar(255)
publisherID varchar(255)
title varchar(255) // may make longer
publishDate varchar(255) // Stringified Unix timestamp
articleImageSlug varchar(255) // may make longer
```

### Planned Features

- Allow users to upload content from their High School or Local College Newspapers
- Allow users to favorite articles
- Allow users to blacklist publishers
- Algorithm to detect topic of article and to connect that with user preferences
- Show users articles based on poltical leaning
- More sources!

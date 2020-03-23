import StoryblokClient from 'storyblok-js-client';
import { makeStyles } from '@material-ui/core/styles';

const accessToken = () => {
  if (process.env.REACT_APP_ENV === 'production') {
    return '4KWRQxfTx3WVCmJC13fXUwtt';
  }

  if (process.env.REACT_APP_ENV === 'stage') {
    return 'OusGlkeBv0HLadri7lZZtQtt';
  }

  return 'kC3FAVf9oA1KtsFLtRdzDgtt';
};

const client = new StoryblokClient({
  accessToken: accessToken(),
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});

const checkForMetaTag = (id, property = null, name = null) => {
  let element = document.getElementById(id);
  if (!element) {
    element = document.createElement('meta');
    if (property) element.setAttribute('property', property);
    if (name) element.setAttribute('name', property);
  }
  return element;
};


const setMetadata = (res) => {
  if (res.data.story.content.seo) {

    const metadataTag = checkForMetaTag('metadataTitle');
    const metaOgTitle = checkForMetaTag('metaOgTitle', 'og:title');
    const metaOgImage = checkForMetaTag('metaOgImage', 'og:image');
    const metaOgDescription = checkForMetaTag('metaOgDescription', 'og:description');
    const metaOgUrl = checkForMetaTag('metaOgUrl', 'og:url');

    const metaTwitterTitle = checkForMetaTag('metaTwitterTitle', null, 'twitter:title');
    const metaTwitterDescription = checkForMetaTag('metaTwitterDescription', null, 'twitter:description');
    const metaTwitterImage = checkForMetaTag('metaTwitterImage', null, 'twitter:image');

    if (res.data.story.content.seo.title) {
      const {
        title,
        og_image,
        og_title,
        description,
        twitter_image,
        twitter_title,
        og_description,
        og_url,
        twitter_description,
      } = res.data.story.content.seo;
      metadataTag.setAttribute('content', description);
      metadataTag.setAttribute('title', title);
      document.title = title;

      // setting meta tags for facebook and linkedin
      metaOgTitle.setAttribute('content', og_title);
      metaOgImage.setAttribute('content', og_image);
      metaOgDescription.setAttribute('content', og_description);
      metaOgUrl.setAttribute('content', (og_url || ''));

      // setting meta tags for twitter
      metaTwitterTitle.setAttribute('content', twitter_title);
      metaTwitterDescription.setAttribute('content', twitter_description);
      metaTwitterImage.setAttribute('content', twitter_image);
    }
  }
};

const version = process.env.REACT_APP_ENV === 'production' ? 'published' : 'draft';

class StoryBlock {
  static async get(route, options = {}) {
    try {
      const res = await client.get(`cdn/stories/${route}`, Object.assign({ version }, options));
      setMetadata(res);
      return res.data.story.content.body;
    } catch (err) {
      throw new Error(err);
    }
  }

  // takes a array of strings in key value pars and returns mui with style strings
  // ex ['color: black'] = { color: 'black' }
  static arrayToMuiStyles(array = [], defaultStyles = {}, styleKey = 'root') {
    const stylesObj = {};
    array.forEach((pair) => {
      const [key, value] = pair.split(': ');
      stylesObj[key.trim()] = value.trim();
    });

    const useStyles = makeStyles({ [styleKey]: { ...stylesObj, ...defaultStyles } });
    return useStyles();
  }
}

export default StoryBlock;

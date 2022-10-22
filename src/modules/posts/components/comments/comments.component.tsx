import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import CONFIGS from 'services/configs';

const { DEFAULT_LANG , DISQUS_SITENAME } = CONFIGS;

type CommentsProps = {
  title: string
}

export const Comments = ({ title }: CommentsProps): JSX.Element => {
  const url = `${
    window.location.href.indexOf('.html') > -1
      ? window.location.href
      : window.location.href + '.html'
  }`

  return (
    <DiscussionEmbed
      shortname={DISQUS_SITENAME}
      config={{
        url: url,
        identifier: url,
        title: title,
        language: DEFAULT_LANG.replace('-', '_'),
      }}
    />
  )
}

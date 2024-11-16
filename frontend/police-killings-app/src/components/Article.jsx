import React from 'react';
import '../styles/Article.css';
import Paragraph from './Paragraph';
import SubHeading from './SubHeading';
import {paragraphItems, headingItems} from '../ArticleData';
import Chart2 from './Chart2';

function Article() {
  return (
  <main>
    <Paragraph items={paragraphItems[0]} />
    < Chart2 />
    <Paragraph items={paragraphItems[1]} />
    <SubHeading items={headingItems[0]} />
  </main>
  );
}

export default Article;
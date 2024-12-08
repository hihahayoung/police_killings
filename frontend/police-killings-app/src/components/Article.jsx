import React from 'react';
import '../styles/Article.css';
import Paragraph from './Paragraph';
import SubHeading from './SubHeading';
import {paragraphItems, imageProps, headingItems} from '../ArticleData';
import Chart2 from './Chart2';
import Image from './Image';

function Article() {
  return (
  <main>
    <Paragraph items={paragraphItems[0]} />
    <Chart2 />
    <Paragraph items={paragraphItems[1]} />
    <SubHeading items={headingItems[0]} />
    <Paragraph items={paragraphItems[2]} />
    <Paragraph items={paragraphItems[3]} />
    <Image {...imageProps[0]} />
    <Paragraph items={paragraphItems[4]} />
    <Paragraph items={paragraphItems[5]} />
    <Paragraph items={paragraphItems[6]} />
    <Paragraph items={paragraphItems[7]} />
    <Paragraph items={paragraphItems[8]} />
    <Paragraph items={paragraphItems[9]} />
    <Paragraph items={paragraphItems[10]} />
    <Paragraph items={paragraphItems[11]} />
  </main>
  );
}

export default Article;
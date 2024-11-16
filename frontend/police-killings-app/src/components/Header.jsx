import React from 'react';
import coverImage from '../assets/img/coverImage.webp';
import '../styles/Header.css';

function Header() {
  return (
    <div class="title-container">
      <div class="title-image-container">
        <img src={coverImage} alt="Title" class="title-image" />
      </div>
      <div class="title-text-container">
        <div class="title-text-overlapping">Behind The Lens:</div>
        <hr class='hr-solid' />
        <br />
        <div class="title-text-sub">Unveiling the Impact of</div>
        <div class="title-text-sub">Body Cameras on Police Killings</div>
        <br />
        <hr class='hr-solid' />
        <div class="title-text-author-date">By Hayoung Lim, November 2024</div>
      </div>
    </div>
  );
}

export default Header;
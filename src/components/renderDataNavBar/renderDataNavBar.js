import React from 'react';
import OurProject from '../ourProject/ourProject';
import ConstructionMaterial from '../constructionMaterial/constructionMaterial';
import ForCeo from '../forCeo/forCeo';
import ExploreBlog from '../exploreBlog/exploreBlog';
import Contactus from '../contactus/contactus';

const RenderDataNavBar = () => {
  return (
    <>
      <OurProject/>
      <ConstructionMaterial />
      <ForCeo />
      <ExploreBlog />
      <Contactus />
    </>
  )
}

export default RenderDataNavBar;

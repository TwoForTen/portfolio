import React, { useState } from 'react';
import SwipableViews from 'react-swipeable-views';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import {
  ProjectMedia,
  SlideIndicator,
  IndicatorContainer,
  ArrowIndicatorContainer,
  Media,
  MediaContainer,
} from './projectMedia.styled';
import { ProjectProp } from '../../../types';

const ProjectMediaComponent: React.FC<ProjectProp> = ({ project }) => {
  const { media } = project;
  const [mediaIndex, setMediaIndex] = useState<number>(0);

  const goRight = () => setMediaIndex((prev) => prev + 1);
  const goLeft = () => setMediaIndex((prev) => prev - 1);

  return (
    <ProjectMedia>
      <ArrowIndicatorContainer>
        <IoIosArrowBack
          onClick={goLeft}
          size={40}
          color="#fff"
          cursor="pointer"
          visibility={mediaIndex !== 0 ? 'visible' : 'hidden'}
        />
        <IoIosArrowForward
          onClick={goRight}
          size={40}
          color="#fff"
          cursor="pointer"
          visibility={mediaIndex !== media.length - 1 ? 'visible' : 'hidden'}
        />
      </ArrowIndicatorContainer>
      <SwipableViews index={mediaIndex}>
        {media.map((img, i) => {
          return (
            <MediaContainer>
              <Media src={process.env.GATSBY_API_URL + img.url} />
            </MediaContainer>
          );
        })}
      </SwipableViews>
      <IndicatorContainer>
        {media.map((_, i) => (
          <SlideIndicator active={i === mediaIndex} key={i} />
        ))}
      </IndicatorContainer>
    </ProjectMedia>
  );
};

export default ProjectMediaComponent;

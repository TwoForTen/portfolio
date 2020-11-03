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

interface ProjectMediaProps {
  media?: {
    url: string;
  }[];
}

const ProjectMediaComponent: React.FC<ProjectMediaProps> = ({ media }) => {
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
        />
        <IoIosArrowForward
          onClick={goRight}
          size={40}
          color="#fff"
          cursor="pointer"
        />
      </ArrowIndicatorContainer>
      <SwipableViews index={mediaIndex}>
        <MediaContainer>
          <Media src="https://picsum.photos/1920/1080" />
        </MediaContainer>
        <MediaContainer>
          <Media src="https://picsum.photos/1920/1080" />
        </MediaContainer>
        <MediaContainer>
          <Media src="https://picsum.photos/1920/1080" />
        </MediaContainer>
      </SwipableViews>
      <IndicatorContainer>
        {new Array(3).fill(undefined).map((_, i) => (
          <SlideIndicator active={i === mediaIndex} key={i} />
        ))}
      </IndicatorContainer>
    </ProjectMedia>
  );
};

export default ProjectMediaComponent;

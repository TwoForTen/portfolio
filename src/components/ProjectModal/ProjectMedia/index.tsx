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
  BackgroundBlur,
} from './projectMedia.styled';
import { ProjectProp } from '../../../types';

const ProjectMediaComponent: React.FC<ProjectProp> = ({ project }) => {
  const { media } = project;
  const [mediaIndex, setMediaIndex] = useState<number>(0);
  const [mediaLoaded, setMediaLoaded] = useState<boolean>(false);

  const swipeRight = () => setMediaIndex((prev) => prev + 1);
  const swipeLeft = () => setMediaIndex((prev) => prev - 1);

  return (
    <ProjectMedia>
      {mediaLoaded && (
        <ArrowIndicatorContainer>
          <IoIosArrowBack
            onClick={swipeLeft}
            size={40}
            color="#fff"
            cursor="pointer"
            visibility={mediaIndex !== 0 ? 'visible' : 'hidden'}
          />
          <IoIosArrowForward
            onClick={swipeRight}
            size={40}
            color="#fff"
            cursor="pointer"
            visibility={mediaIndex !== media.length - 1 ? 'visible' : 'hidden'}
          />
        </ArrowIndicatorContainer>
      )}
      <SwipableViews index={mediaIndex} maxLength={media.length}>
        {media.map((img) => {
          return (
            <React.Fragment key={img.url}>
              <BackgroundBlur
                style={{
                  backgroundImage: `url(${
                    process.env.GATSBY_API_URL + img.url
                  })`,
                }}
              />
              <MediaContainer>
                <Media
                  onLoad={() => setMediaLoaded(true)}
                  style={{ visibility: mediaLoaded ? 'visible' : 'hidden' }}
                  src={process.env.GATSBY_API_URL + img.url}
                />
              </MediaContainer>
            </React.Fragment>
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

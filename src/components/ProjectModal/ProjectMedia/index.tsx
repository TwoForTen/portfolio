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

interface ProjectMediaProps extends ProjectProp {
  fullscreen: boolean;
}

const ProjectMediaComponent: React.FC<ProjectMediaProps> = ({
  project,
  fullscreen,
}) => {
  const { media } = project;
  const [mediaIndex, setMediaIndex] = useState<number>(0);
  const [mediaLoaded, setMediaLoaded] = useState<boolean>(false);

  const swipeRight = () => setMediaIndex((prev) => prev + 1);
  const swipeLeft = () => setMediaIndex((prev) => prev - 1);

  return (
    <ProjectMedia fullscreen={fullscreen}>
      {mediaLoaded && (
        <ArrowIndicatorContainer>
          <IoIosArrowBack
            onClick={swipeLeft}
            size={40}
            color="#fff"
            cursor="pointer"
            visibility={mediaIndex !== 0 ? 'visible' : 'hidden'}
            style={{
              filter: 'drop-shadow(0px 0px 1px rgba(0,0,0,0.5))',
            }}
          />
          <IoIosArrowForward
            onClick={swipeRight}
            size={40}
            color="#fff"
            cursor="pointer"
            visibility={mediaIndex !== media.length - 1 ? 'visible' : 'hidden'}
            style={{
              filter: 'drop-shadow(0px 0px 1px rgba(0,0,0,0.5))',
            }}
          />
        </ArrowIndicatorContainer>
      )}
      <SwipableViews
        index={mediaIndex}
        maxLength={media.length}
        onChangeIndex={(index) => {
          setMediaIndex(index);
        }}
      >
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

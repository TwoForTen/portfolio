import React from 'react';
import { format } from 'date-fns';
import { enUS, hr } from 'date-fns/locale';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { Experience } from '../../../../types';
import {
  CardContainer,
  Image,
  ImageContainer,
  ObligationCard,
} from './experienceCard.styled';
import { TitleWithSubtitle } from '../../aboutMe.styled';

import { Row, Typography } from '../../../../styles/globalComponents';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { language } = useI18next();
  const { company_name, date_to, date_from, obligations, image } = experience;

  return (
    <CardContainer>
      <Row>
        <ImageContainer>
          {image?.url && (
            <Image
              src={process.env.GATSBY_API_URL + image?.url}
              alt="company_image"
            />
          )}
        </ImageContainer>
        <TitleWithSubtitle>
          <Typography variant="h3" style={{ fontWeight: 'normal' }}>
            {company_name}
          </Typography>
          <Typography
            variant="span"
            color="darkGray"
            style={{ textTransform: 'capitalize' }}
          >
            {`${format(new Date(date_from), 'LLLL, y', {
              locale: language === 'en' ? enUS : hr,
            })} - ${
              date_to
                ? format(new Date(date_to), 'LLLL, y', {
                    locale: language === 'en' ? enUS : hr,
                  })
                : ''
            }`}
          </Typography>
        </TitleWithSubtitle>
      </Row>
      <ObligationCard>
        {obligations?.map((obligation) => {
          return (
            <>
              <Typography
                variant="h3"
                style={{ fontWeight: 'normal', marginBottom: '10px' }}
              >
                {obligation.title}
              </Typography>
              <Typography variant="p">{obligation.description}</Typography>
            </>
          );
        })}
      </ObligationCard>
    </CardContainer>
  );
};

export default ExperienceCard;

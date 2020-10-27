import React from 'react';
import { format } from 'date-fns';
import { enUS, hr } from 'date-fns/locale';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { ExperienceDescription } from '../../../../types';
import {
  CardContainer,
  Image,
  ImageContainer,
  ObligationCard,
} from './experienceCard.styled';
import { TitleWithSubtitle } from '../../aboutMe.styled';

import { Row, Typography } from '../../../../styles/globalComponents';

interface ExperienceCardProps {
  image?: string;
  company_name: string;
  date_from: string;
  date_to?: string;
  obligations?: ExperienceDescription[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  image,
  company_name,
  date_from,
  date_to,
  obligations,
}) => {
  const { language } = useI18next();

  return (
    <CardContainer>
      <Row>
        <ImageContainer>
          <Image src="https://picsum.photos/200" />
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

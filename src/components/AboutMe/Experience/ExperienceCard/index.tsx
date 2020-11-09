import React, { useRef, useEffect } from 'react';
import { format } from 'date-fns';
import { enUS, hr } from 'date-fns/locale';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { useAnimation } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

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
  const { company_name, date_to, date_from, obligations, image } = experience;

  const { language } = useI18next();
  const expRef = useRef<HTMLDivElement>(null);
  const animation = useAnimation();

  const variants = {
    inactive: {
      opacity: 0,
      x: 30,
    },
    active: {
      opacity: 1,
      x: 0,
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) animation.start('active');
        else animation.start('inactive');
      });
    }, {});

    if (expRef.current) observer.observe(expRef.current);

    return () => {
      if (expRef.current) observer.unobserve(expRef.current);
    };
  }, [expRef]);

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
            style={{ textTransform: 'capitalize', fontWeight: 'lighter' }}
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
      <ObligationCard ref={expRef}>
        {obligations?.map((obligation, i) => {
          return (
            <motion.div
              style={{
                marginBottom: i !== obligations.length - 1 ? '30px' : '0',
              }}
              key={obligation.id}
              variants={variants}
              initial="inactive"
              animate={animation}
              transition={{ delay: 0.3 + i / obligations.length }}
            >
              <Typography
                variant="h3"
                style={{
                  fontWeight: 'normal',
                  marginBottom: '10px',
                  fontSize: '16px',
                }}
              >
                {obligation.title}
              </Typography>
              <Typography
                variant="span"
                color="darkGray"
                style={{ fontWeight: 300 }}
              >
                <ReactMarkdown>
                  {obligation.translations[language].description}
                </ReactMarkdown>
              </Typography>
            </motion.div>
          );
        })}
      </ObligationCard>
    </CardContainer>
  );
};

export default ExperienceCard;

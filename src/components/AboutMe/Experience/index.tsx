import React from 'react';

import ExperienceCard from './ExperienceCard';
import { SectionTitle } from '../aboutMe.styled';

const Experience = () => {
  return (
    <div style={{ flex: 5, minWidth: '300px' }}>
      <SectionTitle>Experience And Education</SectionTitle>
      <ExperienceCard
        company_name="Serphent"
        date_from="April, 2020"
        obligations={[
          {
            title: 'Frontend Developer - React',
            description:
              'Serphent is a two man freelance agency that does blablawpdokawojda djoaiwjd jdajiwd djawoijd jdoa jwdioja jdaowmdpwqwšdl  ,d,qšwd , dqšwdl dqwpdm ',
          },
        ]}
      />
      <ExperienceCard
        company_name="Serphent"
        date_from="April, 2020"
        // obligations={[
        //   {
        //     title: 'Frontend Developer - React',
        //     description:
        //       'Serphent is a two man freelance agency that does blablawpdokawojda djoaiwjd jdajiwd djawoijd jdoa jwdioja jdaowmdpwqwšdl  ,d,qšwd , dqšwdl dqwpdm ',
        //   },
        // ]}
      />
      <ExperienceCard
        company_name="Serphent"
        date_from="April, 2020"
        obligations={[
          {
            title: 'Frontend Developer - React',
            description:
              'Serphent is a two man freelance agency that does blablawpdokawojda djoaiwjd jdajiwd djawoijd jdoa jwdioja jdaowmdpwqwšdl  ,d,qšwd , dqšwdl dqwpdm ',
          },
        ]}
      />
    </div>
  );
};

export default Experience;

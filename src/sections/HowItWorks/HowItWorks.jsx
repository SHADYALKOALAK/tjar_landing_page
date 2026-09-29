'use client';

import { useState } from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import SegmentedControl from '../../components/SegmentedControl/SegmentedControl';
import { useLocale } from '../../i18n/LocaleContext';
import { useAudience } from '../../context/AudienceContext';
import useMediaQuery, { DESKTOP_QUERY } from '../../hooks/useMediaQuery';
import StepperMobile from './StepperMobile';
import StoryDesktop from './StoryDesktop';
import styles from './HowItWorks.module.css';

const PANEL_ID = 'how-panel';

export default function HowItWorks() {
  const { howItWorks } = useLocale().t.home;
  const { audience, setAudience } = useAudience();
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  const steps = howItWorks.steps[audience];

  // Restart the story from step 1 whenever the audience changes.
  const [active, setActive] = useState(0);
  const [storyAudience, setStoryAudience] = useState(audience);
  if (storyAudience !== audience) {
    setStoryAudience(audience);
    setActive(0);
  }

  const toggle = (
    <SegmentedControl
      options={howItWorks.audiences}
      value={audience}
      onChange={setAudience}
      label={howItWorks.toggleLabel}
      panelId={PANEL_ID}
      className={styles.toggle}
    />
  );

  const Story = isDesktop ? StoryDesktop : StepperMobile;

  return (
    <section id="how" className={`section ${styles.how}`} aria-labelledby="how-title">
      <div className="container">
        <SectionHeading
          id="how-title"
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          lead={howItWorks.lead}
          align={isDesktop ? 'start' : 'center'}
        />
        <Story
          steps={steps}
          audience={audience}
          active={active}
          onActiveChange={setActive}
          toggle={toggle}
          panelId={PANEL_ID}
        />
      </div>
    </section>
  );
}

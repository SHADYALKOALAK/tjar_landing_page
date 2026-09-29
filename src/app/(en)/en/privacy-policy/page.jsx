import LegalPage from '@/views/LegalPage/LegalPage';
import { StructuredData, buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata('privacy', 'en');

export default function EnglishPrivacyPage() {
  return (
    <>
      <StructuredData pageId="privacy" locale="en" />
      <LegalPage docId="privacy" />
    </>
  );
}
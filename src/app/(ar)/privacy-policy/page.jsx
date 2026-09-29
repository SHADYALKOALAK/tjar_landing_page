import LegalPage from '@/views/LegalPage/LegalPage';
import { StructuredData, buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata('privacy', 'ar');

export default function ArabicPrivacyPage() {
  return (
    <>
      <StructuredData pageId="privacy" locale="ar" />
      <LegalPage docId="privacy" />
    </>
  );
}
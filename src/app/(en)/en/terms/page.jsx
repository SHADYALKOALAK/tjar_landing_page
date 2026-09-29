import LegalPage from '@/views/LegalPage/LegalPage';
import { StructuredData, buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata('terms', 'en');

export default function EnglishTermsPage() {
  return (
    <>
      <StructuredData pageId="terms" locale="en" />
      <LegalPage docId="terms" />
    </>
  );
}
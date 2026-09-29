import LegalPage from '@/views/LegalPage/LegalPage';
import { StructuredData, buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata('terms', 'ar');

export default function ArabicTermsPage() {
  return (
    <>
      <StructuredData pageId="terms" locale="ar" />
      <LegalPage docId="terms" />
    </>
  );
}
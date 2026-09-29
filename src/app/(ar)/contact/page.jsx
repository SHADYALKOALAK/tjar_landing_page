import ContactPage from '@/views/ContactPage/ContactPage';
import { StructuredData, buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata('contact', 'ar');

export default function ArabicContactPage() {
  return (
    <>
      <StructuredData pageId="contact" locale="ar" />
      <ContactPage />
    </>
  );
}
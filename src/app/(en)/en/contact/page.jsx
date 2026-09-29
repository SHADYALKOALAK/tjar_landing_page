import ContactPage from '@/views/ContactPage/ContactPage';
import { StructuredData, buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata('contact', 'en');

export default function EnglishContactPage() {
  return (
    <>
      <StructuredData pageId="contact" locale="en" />
      <ContactPage />
    </>
  );
}
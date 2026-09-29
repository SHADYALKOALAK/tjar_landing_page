import HomePage from '@/views/HomePage';
import { StructuredData, buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata('home', 'ar');

export default function ArabicHomePage() {
  return (
    <>
      <StructuredData pageId="home" locale="ar" />
      <HomePage />
    </>
  );
}
import HomePage from '@/views/HomePage';
import { StructuredData, buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata('home', 'en');

export default function EnglishHomePage() {
  return (
    <>
      <StructuredData pageId="home" locale="en" />
      <HomePage />
    </>
  );
}
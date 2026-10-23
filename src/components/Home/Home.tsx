
import NocturneLayout from '../NocturneLayout/NocturneLayout';

type HomeProps = {
  initialDateKey: string;
};

export default function Home({ initialDateKey }: HomeProps) {
  return <NocturneLayout initialDateKey={initialDateKey} />;
}

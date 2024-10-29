import Head from 'next/head';
import AnimatedGrid from '../components/AnimatedGrid/AnimatedGrid';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Developer</title>
        <meta name="description" content="Animated grid background in Next.js" />
      </Head>
      <AnimatedGrid />
    </div>
  );
}

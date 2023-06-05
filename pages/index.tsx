import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import { BackGroundImage1, BackGroundImage2, FootCon, FooterLink, GradientBackgroundCon, RedSpan } from '@/components/QuoteGenerator/QuoteGeneratorElements'

import Cloud1 from "../assets/cloud1-nobg.png";
import Cloud2 from "../assets/cloud2-nobg.png";

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="Generate Quotes w/ a lot of fun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GradientBackgroundCon>

        <BackGroundImage1
          src={Cloud1}
          alt="Cloud1"
          />

        <BackGroundImage2
          src={Cloud2}
          alt="Cloud2"
          />

        <FootCon>
          <>
            Quotes Generated: {numberOfQuotes}
            <br/>
            Developed with <RedSpan>&#x2665;</RedSpan> by { }
              <FooterLink 
                href="https://o-v-a-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                >
                  Omar
              </FooterLink>

          </>
        </FootCon>

      </GradientBackgroundCon>
    </>
  )
}
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

/* Components */
import { 
        BackgroundImage1, 
        BackgroundImage2, 
        FooterCon, 
        FooterLink, 
        GenerateQuoteButton, 
        GenerateQuoteButtonText, 
        GradientBackgroundCon, 
        QuoteGeneratorCon, 
        QuoteGeneratorInnerCon, 
        QuoteGeneratorSubTitle, 
        QuoteGeneratorTitle, 
        RedSpan 
      } from '@/components/QuoteGenerator/QuoteGeneratorElements'

/* Assets */
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

      {/* Background */}

      <GradientBackgroundCon>

      {/* Quote Generator Model Pop-Up */}

      <QuoteGeneratorCon>
        <QuoteGeneratorInnerCon>
          <QuoteGeneratorTitle>Inspirational Quote Generator</QuoteGeneratorTitle>
          <QuoteGeneratorSubTitle>Looking for an inspirational quote? <br/>
          Click the button below to generate a random quote! provided by 
          <FooterLink
            href="https://zenquotes.io/"
            target="_blank"
            rel="noopener noreferrer"
            >
              ZenQuotes.io
          </FooterLink>
          </QuoteGeneratorSubTitle>

          <GenerateQuoteButton
            onClick={() => {null}}
            >
              <GenerateQuoteButtonText>Generate Quote</GenerateQuoteButtonText>
          </GenerateQuoteButton>
        </QuoteGeneratorInnerCon>
      </QuoteGeneratorCon>

        <BackgroundImage1
          src={Cloud1}
          alt="Cloud1"
          />

        <BackgroundImage2
          src={Cloud2}
          alt="Cloud2"
          />

        <FooterCon>
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
        </FooterCon>

      </GradientBackgroundCon>
    </>
  )
}
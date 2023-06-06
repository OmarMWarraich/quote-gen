import { useEffect, useState } from 'react';
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
import { API } from 'aws-amplify';
import { quoteQueryName } from '@/src/graphql/queries';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import QuoteGeneratorModal from '../components/QuoteGenerator';
      
/* Interface for DDB Obj */

interface UpdateQuoteInfoData {
  id: string;
  queryName: string;
  quotesGenerated: number;
  createdAt: string;
  updatedAt: string;
}

/* Type guard for fetch fn */

function isGraphQLResultForQuoteQueryName(response: any): response is GraphQLResult<{
  quoteQueryName: {
    items: [UpdateQuoteInfoData];
  };
}> {
  return response.data && response.data.quoteQueryName && response.data.quoteQueryName.items;
}

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  const [openGenerator, setOpenGenerator] = useState(false);
  const [processingQuote, setProcessingQuote] = useState(false);
  const [quoteReceived, setQuoteReceived] = useState<String | null>(null);


  /* Fn: fetch DDb obj (quotes gen) */

  const updateQuoteInfo = async () => {
    try {
      const res = await API.graphql<UpdateQuoteInfoData>({
        query: quoteQueryName,
        authMode: 'AWS_IAM',
        variables: {
          queryName: "LIVE",
        }, 
      })
      // console.log('response',res);

      /* Typeguards */

      if (!isGraphQLResultForQuoteQueryName(res)) {
        throw new Error('Response data is undefined');
      }

      if (!res.data) {
        throw new Error('Response data is undefined');
      }

      const receivedNumberOfQuotes = res.data.quoteQueryName.items[0].quotesGenerated;
      setNumberOfQuotes(receivedNumberOfQuotes);


    } catch (error) {
      console.log('error getting quote data',error);
    }
  }

  useEffect(() => {
    updateQuoteInfo();
  }, [])

  /* fn: quote generator modal */

  const handleCloseGenerator = () => {
    setOpenGenerator(false);
  }

  const handleOpenGenerator = async(e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpenGenerator(true);
  }

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

      {/* Quote Generator Modal */}

      <QuoteGeneratorModal
        open = {openGenerator}
        close = {handleCloseGenerator}
        processingQuote = {processingQuote}
        setProcessingQuote = {setProcessingQuote}
        quoteReceived = {quoteReceived}
        setQuoteReceived = {setQuoteReceived}
        
      />



      {/* Quote Generator */}

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
            onClick={handleOpenGenerator}
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
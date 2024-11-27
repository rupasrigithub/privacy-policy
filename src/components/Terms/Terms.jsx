'use client'

import React from 'react';
import { Shield, Clock, ChevronRight } from 'lucide-react';
import {
  PageContainer,
  HeaderWrapper,
  BreadcrumbNav,
  TitleWrapper,
  Title,
  MainLayout,
  ContentArea,
  MainHeading,
  Section,
  SectionTitle,
  SectionText,
  Sidebar,
  CurrentAffairsCard,
  IconWrapper,
  CardContent,
  CardTitle,
  CardDescription,
  Advertisement,
  QuickLinks,
  QuickLinksTitle,
  LinksContainer,
  LinkColumn,
  CategoryTitle,
  LinkList,
  LinkItem
} from './Terms.styled';

const Terms = () => {
  return (
    <PageContainer>
      <HeaderWrapper>
        <BreadcrumbNav>
          <a href="/">Home</a>
          <span>»</span>
          <span className="current">Terms of Use and Privacy Policy</span>
        </BreadcrumbNav>
        
        <TitleWrapper>
          <Shield className="icon" size={20} />
          <Title>Terms of Use and Privacy Policy</Title>
        </TitleWrapper>
      </HeaderWrapper>

      <MainLayout>
        <ContentArea>
          <MainHeading>TERMS OF SERVICE</MainHeading>
          
          <Section>
            <SectionTitle>1. ACCEPTANCE OF TERMS</SectionTitle>
            <SectionText>
              www.IndiaBIX.com provides its service to you, subject to the following Terms of Service. These policies may be updated by us from time to time without notice of you. You can review our updated terms and conditions always in this page. Usage of this site is subject to these Terms, Conditions and Policies, therefore please read the following information carefully.
            </SectionText>
          </Section>

          <Section>
            <SectionTitle>2. USAGE OF THIS SITE</SectionTitle>
            <SectionText>
              www.IndiaBIX.com is an Open Database and operates with a motto of collecting and sharing questions and answers that were asked in various interviews. This data is collected and submitted by various users/visitors around the world. www.IndiaBIX.com does not guarantee the re-occurrences or repetition of questions in same interviews or any other interviews. The purpose of this site is to provide information to the public. Even though every care has been taken in compiling the information forwarded by certain enthusiastic users, www.IndiaBIX.com doesn't guarantee the accuracy of the content or information that provided in this site and won't take responsible for any INCORRECT questions, answers, content and any form of errors. www.IndiaBIX.com will not be responsible in anyway for any damages/consequences that might occur due to inclusion of some incorrect content or information in this site. You can use this information solely at your own risk.
            </SectionText>
          </Section>

          <Section>
            <SectionTitle>3. REGISTRATION INTO SITE</SectionTitle>
            <SectionText>
              This is an OPTIONAL service provided by www.IndiaBIX.com. Visitors can register into the site on their own interest, it is not mandatory. This registration into the site permits the user to maintain and modify of the data submitted to the site. The personal information that collected during this registration process will NOT, be distributed and shared with any other third-parties.
            </SectionText>
          </Section>

          <Section>
            <SectionTitle>4. ANTI-SPAM POLICY</SectionTitle>
            <SectionText>
              www.IndiaBIX.com is against in sending spam, unsolicited emails. You should not use our service and you are not authorized to use our referral or email services, for your personal or commercial purposes. By usage of this service you agreed that to our policies. Violating these policies in any manner subject to violation of respected laws and necessary action will be initiated against the defaulters.
            </SectionText>
          </Section>

          <Section>
            <SectionTitle>5. COPYRIGHT POLICY</SectionTitle>
            <SectionText>
              All pages, data and graphics presented on this website are the property of www.IndiaBIX.com. The pages may not be redistributed or reproduced in any way, shape, or form without the written permission of www.IndiaBIX.com. www.IndiaBIX.com respects the copyrights, trademarks and intellectual property of others and also we expect this from other users. In this site, if you found any information that is owned by you or any content that violates your intellectual property rights, please contact to us with all necessary documents/information that authenticate your authority on your property.
            </SectionText>
          </Section>

          <Section>
            <SectionTitle>6. PRIVACY POLICY</SectionTitle>
            <SectionText>
              The Personal information, email that submitted while registering to the site, will NOT be distributed, shared with any other third-parties. We only use this data for our information, for research, to improve our services and for contacting you purposes. www.IndiaBIX.com is an Open Database Site, so Registering into site is NOT mandatory and also we won't verify your email address. Registration into the site is purely of user's interest. www.IndiaBIX.com reserves the right to change this policy at any time. Any significant changes will be notified to you by sending an email to your email address that you provided while registering with us or by placing a notice on our site.
            </SectionText>
          </Section>
        </ContentArea>

        <Sidebar>
          <CurrentAffairsCard>
            <IconWrapper>
              <Clock size={24} />
            </IconWrapper>
            <CardContent>
              <CardTitle>Current Affairs</CardTitle>
              <CardDescription>Check out the latest current affairs questions and answers.</CardDescription>
            </CardContent>
          </CurrentAffairsCard>

          <Advertisement>
            <img 
              src="/img1.png" 
              
            />
          </Advertisement>

          <QuickLinks>
            <QuickLinksTitle>Quick links</QuickLinksTitle>
            <LinksContainer>
              <LinkColumn>
                <div>
                  <CategoryTitle>Quantitative Aptitude</CategoryTitle>
                  <LinkList>
                    <LinkItem><a href="#">Arithmetic</a></LinkItem>
                    <LinkItem><a href="#">Data Interpretation</a></LinkItem>
                  </LinkList>
                </div>

                <div>
                  <CategoryTitle>Verbal (English)</CategoryTitle>
                  <LinkList>
                    <LinkItem><a href="#">Verbal Ability</a></LinkItem>
                    <LinkItem><a href="#">Verbal Test</a></LinkItem>
                  </LinkList>
                </div>

                <div>
                  <CategoryTitle>Reasoning</CategoryTitle>
                  <LinkList>
                    <LinkItem><a href="#">Logical</a></LinkItem>
                    <LinkItem><a href="#">Verbal</a></LinkItem>
                    <LinkItem><a href="#">Nonverbal</a></LinkItem>
                  </LinkList>
                </div>
              </LinkColumn>

              <LinkColumn>
                <div>
                  <CategoryTitle>Programming</CategoryTitle>
                  <LinkList>
                    <LinkItem><a href="#">Python Programming</a></LinkItem>
                    <LinkItem><a href="#">C Programming</a></LinkItem>
                    <LinkItem><a href="#">C++, C#</a></LinkItem>
                    <LinkItem><a href="#">Java</a></LinkItem>
                  </LinkList>
                </div>

                <div>
                  <CategoryTitle>Interview</CategoryTitle>
                  <LinkList>
                    <LinkItem><a href="#">GD</a></LinkItem>
                    <LinkItem><a href="#">HR</a></LinkItem>
                    <LinkItem><a href="#">Technical Interview</a></LinkItem>
                  </LinkList>
                </div>

                <div>
                  <CategoryTitle>Placement Papers</CategoryTitle>
                  <LinkList>
                    <LinkItem><a href="#">Placement Papers</a></LinkItem>
                    <LinkItem><a href="#">Submit Paper</a></LinkItem>
                  </LinkList>
                </div>
              </LinkColumn>
            </LinksContainer>
          </QuickLinks>
        </Sidebar>
      </MainLayout>
    </PageContainer>
  );
};

export default Terms;


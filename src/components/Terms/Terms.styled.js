import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 24px;
`;

export const BreadcrumbNav = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  color: #666;
  font-size: 14px;

  a {
    color: #4CAF50;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .current {
    color: #666;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .icon {
    color: #4CAF50;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #333;
`;

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 24px;
`;

export const ContentArea = styled.main`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 24px;
`;

export const MainHeading = styled.h2`
  color: #4CAF50;
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 20px 0;
`;

export const Section = styled.section`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  color: #4CAF50;
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 12px 0;
`;

export const SectionText = styled.p`
  color: #4B5563;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CurrentAffairsCard = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconWrapper = styled.div`
  color: #4CAF50;
`;

export const CardContent = styled.div`
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 0 0 4px 0;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #6B7280;
  margin: 0;
`;

export const Advertisement = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    display: block;
  }
`;

export const QuickLinks = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
`;

export const QuickLinksTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 0 0 16px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e7eb;
`;

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CategoryTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #4B5563;
  margin: 0 0 8px 0;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkItem = styled.li`
  margin-bottom: 6px;
  display: flex;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "›";
    color: #4CAF50;
    margin-right: 6px;
    font-size: 14px;
  }

  a {
    color: #4CAF50;
    text-decoration: none;
    font-size: 14px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;


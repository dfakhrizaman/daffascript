import bfiLogo from '../../../../assets/bfi-logo.jpeg'
import iceHouseLogo from '../../../../assets/ice-house-logo.jpeg'
import lingoTalkLogo from '../../../../assets/lingotalk-logo.png'
import adventureCareLogo from '../../../../assets/adventure-care-logo.jpeg'
import { CardItem } from '../../../../types/CardItem.type'



export const experienceList: CardItem[] = [
  {
    id: 'bfi-finance',
    companyName: 'BFI Finance',
    role: 'Frontend Engineer',
    type: "Full-time",
    companyImage: bfiLogo,
    dateRange: 'Dec 2022 - Now',
    description: 'Test Desc',
    markdownContent: 'bfi-finance.md',
    tags: ["WEB", "REACT.JS", "MOBILE", "FINANCE"],
  },
  {
    id: 'ice-house',
    companyName: 'Ice House',
    role: 'Software Engineer',
    type: "Contract",
    companyImage: iceHouseLogo,
    dateRange: 'May 2022 - Dec 2022',
    description: 'Test Desc',
    markdownContent: 'ice-house.md',
    tags: ["WEB", "REACT.JS", "DASHBOARD"],
  },
  {
    id: 'adventure-care',
    companyName: 'AdventureCare.ID',
    role: 'Software Engineer',
    type: "Part-time",
    companyImage: adventureCareLogo,
    dateRange: 'Aug 2022 - May 2023',
    description: 'Test Desc',
    markdownContent: 'adventure-care.md',
    tags: ["MOBILE", "FLUTTER", "HEALTH"],
  },
  {
    id: 'lingotalk',
    companyName: 'LingoTalk',
    role: 'Mobile App Developer',
    type: "Intern",
    companyImage: lingoTalkLogo,
    dateRange: 'Oct 2021 - Feb 2022',
    description: 'Test Desc',
    markdownContent: 'lingo-talk.md',
    tags: ["MOBILE", "FLUTTER", "EDUCATION"],
  }
]
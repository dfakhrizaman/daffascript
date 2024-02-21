import bfiLogo from '../../../../assets/bfi-logo.jpeg'
import iceHouseLogo from '../../../../assets/ice-house-logo.jpeg'
import lingoTalkLogo from '../../../../assets/lingotalk-logo.png'
import adventureCareLogo from '../../../../assets/adventure-care-logo.jpeg'
import { CardItem } from '../../../../types/CardItem.type'



export const projectsList: CardItem[] = [
  {
    id: 'bfi-finance',
    companyName: 'BFI Finance',
    role: 'Frontend Engineer',
    type: "Full-time",
    companyImage: bfiLogo,
    dateRange: 'Dec 2022 - Now',
    description: 'Test Desc'
  },
  {
    id: 'ice-house',
    companyName: 'Ice House',
    role: 'Software Engineer',
    type: "Contract",
    companyImage: iceHouseLogo,
    dateRange: 'May 2022 - Dec 2022',
    description: 'Test Desc'
  },
  {
    id: 'adventure-care',
    companyName: 'AdventureCare.ID',
    role: 'Software Engineer',
    type: "Part-time",
    companyImage: adventureCareLogo,
    dateRange: 'Aug 2022 - May 2023',
    description: 'Test Desc'
  },
  {
    id: 'lingotalk',
    companyName: 'Lingo Talk',
    role: 'Mobile App Developer',
    type: "Intern",
    companyImage: lingoTalkLogo,
    dateRange: 'Oct 2021 - Feb 2022',
    description: 'Test Desc'
  }
]
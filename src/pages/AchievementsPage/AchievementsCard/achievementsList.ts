import { CardItem } from '../../../types/CardItem.type'
import nusLogo from '../../../assets/nus-logo-vert.jpg'
import uiLogo from '../../../assets/universitas-indonesia-logo.png'
import imeriLogo from '../../../assets/imeri-open.jpg'
import itbLogo from '../../../assets/itb-logo.png'


export const achievementsList: CardItem[] = [
  {
    id: 'nus',
    companyName: 'Finalist at National University of Singapore Medical Grand Challenge',
    role: 'Lead Mobile Engineer',
    type: "",
    companyImage: nusLogo,
    dateRange: 'Aug 2022',
    description: 'Test Desc',
    markdownContent: 'nus.md',
    tags: ["MOBILE", "FLUTTER", "HEALTH"],
  },
  {
    id: 'ui-incubate',
    companyName: 'University of Indonesia Incubate Grant Awardee',
    role: 'Lead Mobile Engineer',
    type: "",
    companyImage: uiLogo,
    dateRange: 'Oct 2022',
    description: 'Test Desc',
    markdownContent: 'ui-incubate.md',
    tags: ["MOBILE", "FLUTTER", "HEALTH"],
  },
  {
    id: 'imeri',
    companyName: 'Finalist at Indonesia Medical Education and Research Institute (IMERI) Open Innovation',
    role: 'Lead Mobile Engineer',
    type: "",
    companyImage: imeriLogo,
    dateRange: 'Oct 2022',
    description: 'Test Desc',
    markdownContent: 'imeri.md',
    tags: ["MOBILE", "FLUTTER", "HEALTH"],
  },
  {
    id: 'iotech',
    companyName: '3rd Place and Best Paper of Ganesha IoTech by Institut Teknologi Bandung',
    role: 'Software and IoT Engineer',
    type: "",
    companyImage: itbLogo,
    dateRange: 'Mar 2022',
    description: 'Test Desc',
    markdownContent: 'iotech.md',
    tags: ["MOBILE", "IOT", "FLUTTER"],
  },
]
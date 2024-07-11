import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
import { MediaLink, PortfolioLink } from './shared/enum/resume.enum';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  /** 取得Media Enum */
  get MediaLink(): typeof MediaLink {
    return MediaLink
  }

  /** 取得PortfolioLink Enum */
  get PortfolioLink(): typeof PortfolioLink {
    return PortfolioLink
  }


  ngOnInit(): void {
    Aos.init()
  }

  /** 點擊【media】圖示 */
  onClickMedia(item: MediaLink): void {
    switch (item) {
      case MediaLink.GitHub: {
        window.open('https://github.com/21Jasper12');
        break;
      }
      case MediaLink.LinkedIn: {
        window.open('https://www.linkedin.com/in/ji-eco-7701231b1');
        break;
      }
      default: {
        console.error('error Link')
        break;
      }
    }
  }

  /** 點擊【media】圖示 */
  onClickPortfolio(item: PortfolioLink): void {
    switch (item) {
      case PortfolioLink.Shop: {
        window.open('https://github.com/21Jasper12/Shop-React-Typescript-Redux');
        break;
      }
      case PortfolioLink.Restaurant: {
        window.open('https://github.com/21Jasper12/forum-front-end-vue');
        break;
      }
      default: {
        console.error('error Link')
        break;
      }
    }
  }
}
